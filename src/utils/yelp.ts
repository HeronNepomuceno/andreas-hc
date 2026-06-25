import fs from 'node:fs';
import path from 'node:path';

export interface YelpBusinessInfo {
  rating: number;
  reviewCount: number;
  url: string;
}

interface YelpBusiness {
  alias?: string;
  name?: string;
  rating?: number;
  review_count?: number;
  url?: string;
}

interface YelpSearchResponse {
  businesses?: YelpBusiness[];
}

interface YelpCache {
  rating?: number;
  reviewCount?: number;
  url?: string;
}

const FALLBACK_YELP_URL = 'https://www.yelp.com/biz/andreas-perfect-cleaning-daly-city';
const TARGET_ALIAS = 'andreas-perfect-cleaning-daly-city';
const TARGET_NAME = 'andreas perfect cleaning';

let yelpDataPromise: Promise<YelpBusinessInfo | null> | undefined;

export function getYelpData(): Promise<YelpBusinessInfo | null> {
  yelpDataPromise ||= fetchYelpData();
  return yelpDataPromise;
}

async function fetchYelpData(): Promise<YelpBusinessInfo | null> {
  const apiKey = import.meta.env.YELP_API_KEY || process.env.YELP_API_KEY;

  if (!apiKey) {
    console.warn('[Yelp Utility] YELP_API_KEY is not defined. Falling back to cached Yelp data');
    return getFallbackYelpData();
  }

  try {
    const searchUrl = new URL('https://api.yelp.com/v3/businesses/search');
    searchUrl.searchParams.set('term', 'Andreas Perfect Cleaning');
    searchUrl.searchParams.set('location', 'Daly City');

    const response = await fetch(searchUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Yelp API responded with status ${response.status} (${response.statusText})`);
    }

    const data = await response.json() as YelpSearchResponse;
    const business = findTargetBusiness(data.businesses);

    if (business) {
      console.log(`[Yelp Utility] Successfully fetched live Yelp data for "${business.name}"`);
      return normalizeBusiness(business);
    }

    console.warn('[Yelp Utility] Business not found in Yelp search results. Falling back to cached Yelp data');
    return getFallbackYelpData();
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.warn(`[Yelp Utility] Error fetching Yelp data from API: ${message}`);
    console.log('[Yelp Utility] Falling back to cached Yelp data');
    return getFallbackYelpData();
  }
}

function getFallbackYelpData(): YelpBusinessInfo | null {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'yelp-cache.json');
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const data = JSON.parse(fileContent) as YelpCache;

      if (typeof data.rating === 'number' && typeof data.reviewCount === 'number') {
        console.log('[Yelp Utility] Loaded cached Yelp data from src/data/yelp-cache.json');
        return {
          rating: data.rating,
          reviewCount: data.reviewCount,
          url: data.url || FALLBACK_YELP_URL,
        };
      }
    } else {
      console.warn('[Yelp Utility] Cached file src/data/yelp-cache.json does not exist.');
    }
  } catch (fallbackError) {
    console.error('[Yelp Utility] Error reading cached Yelp data:', fallbackError);
  }

  return null;
}

function findTargetBusiness(businesses: YelpBusiness[] = []): YelpBusiness | undefined {
  return businesses.find((business) => business.alias === TARGET_ALIAS)
    || businesses.find((business) => business.name?.toLowerCase() === TARGET_NAME)
    || businesses.find((business) => business.name?.toLowerCase().includes(TARGET_NAME));
}

function normalizeBusiness(business: YelpBusiness): YelpBusinessInfo | null {
  if (typeof business.rating !== 'number' || typeof business.review_count !== 'number') {
    return null;
  }

  return {
    rating: business.rating,
    reviewCount: business.review_count,
    url: business.url || FALLBACK_YELP_URL,
  };
}
