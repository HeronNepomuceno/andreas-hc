import type { Locale } from './routing';

export type HeroCopy = {
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  location: string;
  status: string;
  subtitle: string;
  logoAlt: string;
  reviewsFallback: string;
  reviewsLinkLabel: string;
  reviewsCta: string;
  reviewsCountLabel: (count: number, locale: Locale) => string;
  yelpLabel: string;
  ariaLabel: string;
};

export type TrustBarCopy = {
  happyClients: string;
  yelpRating: string;
  googleRating: string;
  satisfaction: string;
};

export type ServicesCopy = {
  heading: string;
  description: string;
  learnMore: string;
  services: Array<{
    title: string;
    description: string;
  }>;
};

export type HowItWorksCopy = {
  heading: string;
  description: string;
  cta: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
};

export type TestimonialsCopy = {
  heading: string;
  description: string;
  testimonials: Array<{
    name: string;
    neighborhood: string;
    initials: string;
    text: string;
    color: string;
  }>;
};

export type LocationHoursCopy = {
  heading: string;
  description: string;
  hours: string;
  serving: string;
  openNow: string;
  closed: string;
  opensAt: string;
  opensNextPrefix: string;
  book: string;
  dayNames: string[];
  dayShortNames: string[];
  rows: Array<{
    open: string | null;
    close: string | null;
  }>;
};

export type FAQCopy = {
  heading: string;
  contactPrompt: string;
  contactLink: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
};

export type FooterCopy = {
  description: string;
  servicesTitle: string;
  companyTitle: string;
  contactTitle: string;
  services: string[];
  company: Array<{
    label: string;
    href: string;
  }>;
  contact: {
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
  rights: string;
  license: string;
  social: {
    instagram: string;
    facebook: string;
  };
};

export type AboutCopy = {
  seoTitle: string;
  seoDescription: string;
  headlineBadge: string;
  headline: string;
  intro: string;
  highlights: string[];
  detailsTitle: string;
  detailsStatus: string;
  currentFocusLabel: string;
  currentFocus: string;
  historyBadge: string;
  historyTitle: string;
  historyBody: string[];
  emphasisLabel: string;
  emphasisBody: string;
  ownerBadge: string;
  serviceNotesBadge: string;
  ownerName: string;
  ownerBio: string[];
  ownerReaction: string;
  cta: string;
  backToContact: string;
};

export type ContactCopy = {
  seoTitle: string;
  seoDescription: string;
  heading: string;
  intro: string;
  responseTime: string;
  privacyLabel: string;
  callUs: string;
  emailUs: string;
  location: string;
  hours: string;
  privacy: string;
  formTitle: string;
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  serviceType: string;
  propertySize: string;
  preferredDate: string;
  preferredTime: string;
  additionalNotes: string;
  submit: string;
  submitNote: string;
  servicePlaceholder: string;
  sizePlaceholder: string;
  notePlaceholder: string;
  services: string[];
  sizes: string[];
  times: string[];
};

export type SiteCopy = {
  brandName: string;
  logoAlt: string;
  nav: {
    home: string;
    about: string;
    contact: string;
    cta: string;
    languageLabel: string;
  };
  hero: HeroCopy;
  trustBar: TrustBarCopy;
  services: ServicesCopy;
  howItWorks: HowItWorksCopy;
  testimonials: TestimonialsCopy;
  locationHours: LocationHoursCopy;
  faq: FAQCopy;
  footer: FooterCopy;
  about: AboutCopy;
  contact: ContactCopy;
  misc: {
    aboutBusinessLabel: string;
    phoneLabel: string;
    sinceLabel: string;
    mapTitle: string;
    neighborhoodLine: string;
    hoursLine: string;
    logoCaption: string;
  };
};

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    brandName: 'Andreas Cleaning Co.',
    logoAlt: "Andreas Cleaning Co. logo",
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      cta: 'Get a Free Quote',
      languageLabel: 'Portuguese',
    },
    hero: {
      badge: 'Top Rated in Daly City',
      title: "San Francisco's Most Trusted House Cleaning Service",
      description: 'Fully insured, background-checked cleaners. Book in 60 seconds. Serving Mission, Pacific Heights, Noe Valley, and beyond.',
      primaryCta: 'Book Now',
      secondaryCta: 'See Our Services',
      location: 'San Francisco, CA',
      status: 'Active',
      subtitle: 'Professional House Cleaning',
      logoAlt: "Andreas Cleaning Co. logo",
      reviewsFallback: 'Read our reviews',
      reviewsLinkLabel: 'Read our reviews on Yelp',
      reviewsCta: 'See what our customers are saying',
      reviewsCountLabel: (count, locale) => `${count.toLocaleString(locale === 'pt-br' ? 'pt-BR' : 'en-US')} reviews`,
      yelpLabel: 'Yelp',
      ariaLabel: 'Read our reviews on Yelp',
    },
    trustBar: {
      happyClients: 'Happy Clients',
      yelpRating: 'Yelp Rating',
      googleRating: 'Google Rating',
      satisfaction: 'Satisfaction Guaranteed',
    },
    services: {
      heading: 'What We Clean',
      description: 'From regular upkeep to specialized deep cleans, we handle it all with precision and care.',
      learnMore: 'Learn More',
      services: [
        {
          title: 'Deep Cleaning',
          description: 'A thorough top-to-bottom clean, perfect for seasonal resets or first-time bookings. We cover every corner.',
        },
        {
          title: 'Move In / Move Out',
          description: 'Leave your old place spotless or arrive to a perfectly clean new home. Stress-free transition guaranteed.',
        },
        {
          title: 'Regular Home Cleaning',
          description: 'Regular scheduled cleanings to keep your home consistently fresh and tidy. Perfect for busy families.',
        },
        {
          title: 'Commercial Deep Cleaning',
          description: 'Professional workspace cleaning that keeps your team productive and your clients impressed.',
        },
        {
          title: 'Move-In or Move-Out Cleaning',
          description: 'Comprehensive cleaning for commercial spaces during transitions. We ensure a pristine environment for your next chapter.',
        },
        {
          title: 'Custom Cleaning Plans',
          description: 'Tell us what you need and we will shape a service around your priorities and schedule.',
        },
      ],
    },
    howItWorks: {
      heading: 'Booking Is Simple',
      description: 'Get your home professionally cleaned in 3 easy steps.',
      cta: 'Start My Quote Request',
      steps: [
        {
          title: 'Request a Quote',
          description: 'Fill out our quick online form with your home size and preferred date. Takes under 2 minutes.',
        },
        {
          title: "We'll Confirm",
          description: 'Our team reviews your request and confirms availability within 1 hour during business hours.',
        },
        {
          title: 'We Clean, You Relax',
          description: 'Your background-checked cleaner arrives on time and leaves your home spotless.',
        },
      ],
    },
    testimonials: {
      heading: 'What Our Clients Say',
      description: 'Trusted by hundreds of homeowners across San Francisco.',
      testimonials: [
        {
          name: 'Sarah M.',
          neighborhood: 'Mission District',
          initials: 'SM',
          text: "We've tried several cleaning services in SF and Andreas Cleaning Co. is by far the best. They're thorough, punctual, and always leave our apartment looking immaculate.",
          color: 'bg-primary',
        },
        {
          name: 'James T.',
          neighborhood: 'Pacific Heights',
          initials: 'JT',
          text: 'I booked a deep clean before moving out of my old apartment and got my full security deposit back! Incredibly professional team. Highly recommend.',
          color: 'bg-accent',
        },
        {
          name: 'Linda R.',
          neighborhood: 'Noe Valley',
          initials: 'LR',
          text: "As an Airbnb host, I need reliable turnovers on tight schedules. Andreas's team never misses a beat. My guests consistently mention how clean everything is.",
          color: 'bg-secondary',
        },
      ],
    },
    locationHours: {
      heading: 'Location & Hours',
      description: 'Based in Daly City, serving the greater San Francisco Bay Area.',
      hours: 'Hours',
      serving: 'Serving Daly City & SF Bay Area',
      openNow: 'Open now',
      closed: 'Closed',
      opensAt: 'Opens at 9 AM',
      opensNextPrefix: 'Opens',
      book: 'Book a Cleaning',
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayShortNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      rows: [
        { open: '9:00 AM', close: '8:00 PM' },
        { open: '9:00 AM', close: '8:00 PM' },
        { open: '9:00 AM', close: '8:00 PM' },
        { open: '9:00 AM', close: '8:00 PM' },
        { open: '9:00 AM', close: '8:00 PM' },
        { open: '9:00 AM', close: '8:00 PM' },
        { open: null, close: null },
      ],
    },
    faq: {
      heading: 'Common Questions',
      contactPrompt: "Can't find your answer?",
      contactLink: 'Contact us',
      items: [
        {
          question: 'How do I book a cleaning?',
          answer: "You can request a quote through our contact form or call us directly at (415) 374-1720. We'll confirm availability within 1 hour during business hours.",
        },
        {
          question: 'Are your cleaners background-checked?',
          answer: 'Yes. Every member of our team goes through a thorough background check and identity verification before their first shift. Your safety and peace of mind are our top priorities.',
        },
        {
          question: 'Do I need to be home during the cleaning?',
          answer: 'No. Many of our clients provide a spare key or access code. Your home and belongings are fully covered by our comprehensive liability insurance.',
        },
        {
          question: 'What cleaning products do you use?',
          answer: 'We use eco-friendly, non-toxic cleaning products that are safe for children and pets. If you have specific product preferences or allergies, just let us know and we will accommodate them.',
        },
      ],
    },
    footer: {
      description: 'Professional house cleaning services in San Francisco, CA. Reliable, insured, and background-checked team.',
      servicesTitle: 'Services',
      companyTitle: 'Company',
      contactTitle: 'Contact',
      services: ['Deep Cleaning', 'Move In/Out', 'Regular home cleaning', 'Commercial deep cleaning', 'Custom cleaning plans'],
      company: [
        { label: 'About Us', href: 'about' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: 'contact' },
        { label: 'Get a Free Quote', href: 'contact' },
      ],
      contact: {
        address: 'San Francisco, CA 94015',
        phone: '(415) 374-1720',
        email: 'andreasperfectcleaning@gmail.com',
        hours: 'Mon-Sat: 9:00 AM - 8:00 PM',
      },
      rights: 'All rights reserved.',
      license: 'Licensed, Bonded & Insured in California',
      social: {
        instagram: 'Instagram',
        facebook: 'Facebook',
      },
    },
    about: {
      seoTitle: 'About Andreas Cleaning Co. | House Cleaning in Daly City and the Bay Area',
      seoDescription: 'Learn how Andreas Cleaning Co. grew from a 2018 local cleaning business into a Bay Area service focused on safety, quality, and reliable deep and regular cleaning.',
      headlineBadge: 'Bay Area Cleaning Company',
      headline: 'Professional cleaning services built on safety, quality, and consistency.',
      intro: 'Andreas Cleaning Co. was established in 2018 and grew through local outreach, a stronger Yelp presence, and a focus on repeat clients.',
      highlights: [
        'Yelp-reviewed business',
        'Established in 2018',
        'Business phone: (415) 374-1720',
      ],
      detailsTitle: 'Established in 2018',
      detailsStatus: 'Serving clients',
      currentFocusLabel: 'Current focus',
      currentFocus: 'Serving homes and repeat clients across the Bay Area with a cleaner, more reliable service experience.',
      historyBadge: 'Business History',
      historyTitle: 'Built from 2018 with steady, practical growth.',
      historyBody: [
        'The company started with local marketing and business cards in San Francisco, then grew by building a clearer presence on Yelp.',
        'That approach helped the business move from one-time jobs to recurring clients, and it is still how the company thinks about growth today.',
      ],
      emphasisLabel: 'What the business emphasizes',
      emphasisBody: 'Eco-friendly products, careful surface cleaning, and finishing details like towel origami in bedrooms and bathrooms.',
      ownerBadge: 'Business Owner',
      serviceNotesBadge: 'Service Notes',
      ownerName: 'Andréa S.',
      ownerBio: [
        'Andréa started the company because he wanted to provide clients with a comfortable, clean environment and to create work that feels personal rather than transactional.',
        'What drives the business is the reaction after a job is finished: seeing the client relax when the space looks and feels better.',
      ],
      ownerReaction: 'What drives the business is the reaction after a job is finished: seeing the client relax when the space looks and feels better.',
      cta: 'Schedule an Appointment',
      backToContact: 'Schedule an Appointment',
    },
    contact: {
      seoTitle: 'Get a Free Cleaning Quote | Contact Andreas Cleaning Co.',
      seoDescription: 'Request a free quote for house cleaning services in San Francisco. Fast response, transparent pricing, no commitment required.',
      heading: 'Get Your Free Quote',
      intro: "Fill out the form and we'll get back to you with a transparent quote within 1 hour during business hours.",
      responseTime: '1 hour',
      privacyLabel: 'Privacy Guarantee',
      callUs: 'Call Us',
      emailUs: 'Email Us',
      location: 'Location',
      hours: 'Business Hours',
      privacy: 'Privacy Guarantee: Your information is 100% private and will never be sold or shared with third parties.',
      formTitle: 'Request a Free Quote',
      fullName: 'Full Name *',
      emailAddress: 'Email Address *',
      phoneNumber: 'Phone Number',
      namePlaceholder: 'John Doe',
      emailPlaceholder: 'john@example.com',
      phonePlaceholder: '(415) 000-0000',
      serviceType: 'Service Type *',
      propertySize: 'Property Size *',
      preferredDate: 'Preferred Date',
      preferredTime: 'Preferred Time Window',
      additionalNotes: 'Additional Notes',
      submit: 'Request My Free Quote',
      submitNote: 'We typically respond within 1 hour · No commitment required · No spam, ever.',
      servicePlaceholder: 'Select a service',
      sizePlaceholder: 'Select home size',
      notePlaceholder: 'Tell us about any specific areas to focus on or entry instructions...',
      services: [
        'Standard Cleaning',
        'Deep Cleaning',
        'Move In Cleaning',
        'Move Out Cleaning',
        'Office Cleaning',
        'Post-Construction',
        'Airbnb Turnover',
        'Other',
      ],
      sizes: [
        'Studio',
        '1 Bedroom',
        '2 Bedrooms',
        '3 Bedrooms',
        '4+ Bedrooms',
        'Commercial Space',
      ],
      times: [
        'Morning (7–11 AM)',
        'Afternoon (11 AM–3 PM)',
        'Late Afternoon (3–7 PM)',
      ],
    },
    misc: {
      aboutBusinessLabel: 'About the business',
      phoneLabel: 'Phone',
      sinceLabel: 'Since',
      mapTitle: "Andreas Cleaning Co. location on Google Maps",
      neighborhoodLine: 'Serving all San Francisco neighborhoods',
      hoursLine: 'Mon-Sat: 7:00 AM - 7:00 PM',
      logoCaption: 'Professional House Cleaning',
    },
  },
  'pt-br': {
    brandName: 'Andreas Cleaning Co.',
    logoAlt: 'Logo da Andreas Cleaning Co.',
    nav: {
      home: 'Início',
      about: 'Sobre',
      contact: 'Contato',
      cta: 'Solicitar orçamento',
      languageLabel: 'English',
    },
    hero: {
      badge: 'Mais bem avaliada em Daly City',
      title: 'O serviço de limpeza residencial mais confiável de San Francisco',
      description: 'Equipe totalmente segurada, com verificação de antecedentes. Agende em 60 segundos. Atendemos Mission, Pacific Heights, Noe Valley e região.',
      primaryCta: 'Agendar agora',
      secondaryCta: 'Ver nossos serviços',
      location: 'San Francisco, CA',
      status: 'Ativa',
      subtitle: 'Limpeza residencial profissional',
      logoAlt: 'Logo da Andreas Cleaning Co.',
      reviewsFallback: 'Leia nossas avaliações',
      reviewsLinkLabel: 'Leia nossas avaliações no Yelp',
      reviewsCta: 'Veja o que nossos clientes dizem',
      reviewsCountLabel: (count, locale) => `${count.toLocaleString(locale === 'pt-br' ? 'pt-BR' : 'en-US')} avaliações`,
      yelpLabel: 'Yelp',
      ariaLabel: 'Leia nossas avaliações no Yelp',
    },
    trustBar: {
      happyClients: 'Clientes satisfeitos',
      yelpRating: 'Avaliação no Yelp',
      googleRating: 'Avaliação no Google',
      satisfaction: 'Satisfação garantida',
    },
    services: {
      heading: 'O que limpamos',
      description: 'Da manutenção regular à limpeza profunda especializada, cuidamos de tudo com precisão e atenção.',
      learnMore: 'Saiba mais',
      services: [
        {
          title: 'Limpeza profunda',
          description: 'Uma limpeza completa de cima a baixo, perfeita para mudanças de estação ou primeira contratação.',
        },
        {
          title: 'Limpeza de mudança',
          description: 'Deixe o imóvel antigo impecável ou chegue a uma casa nova já perfeitamente limpa.',
        },
        {
          title: 'Limpeza residencial recorrente',
          description: 'Limpezas agendadas para manter sua casa sempre fresca e organizada. Ideal para famílias ocupadas.',
        },
        {
          title: 'Limpeza comercial profunda',
          description: 'Limpeza profissional de ambientes de trabalho para manter sua equipe produtiva e seus clientes impressionados.',
        },
        {
          title: 'Limpeza para entrada ou saída',
          description: 'Limpeza completa para espaços comerciais durante transições. Garantimos um ambiente impecável para a próxima fase.',
        },
        {
          title: 'Planos personalizados',
          description: 'Conte o que você precisa e ajustamos o serviço às suas prioridades e à sua rotina.',
        },
      ],
    },
    howItWorks: {
      heading: 'Agendar é simples',
      description: 'Receba uma limpeza profissional em 3 passos fáceis.',
      cta: 'Começar meu orçamento',
      steps: [
        {
          title: 'Solicite um orçamento',
          description: 'Preencha nosso formulário rápido com o tamanho do imóvel e a data desejada. Leva menos de 2 minutos.',
        },
        {
          title: 'Confirmamos para você',
          description: 'Nossa equipe analisa sua solicitação e confirma a disponibilidade em até 1 hora durante o horário comercial.',
        },
        {
          title: 'Nós limpamos, você relaxa',
          description: 'A equipe com verificação de antecedentes chega no horário e deixa sua casa impecável.',
        },
      ],
    },
    testimonials: {
      heading: 'O que nossos clientes dizem',
      description: 'A confiança de centenas de moradores em San Francisco.',
      testimonials: [
        {
          name: 'Sarah M.',
          neighborhood: 'Mission District',
          initials: 'SM',
          text: 'Já testamos vários serviços de limpeza em SF e a Andreas Cleaning Co. é, de longe, a melhor. São detalhistas, pontuais e sempre deixam nosso apartamento impecável.',
          color: 'bg-primary',
        },
        {
          name: 'James T.',
          neighborhood: 'Pacific Heights',
          initials: 'JT',
          text: 'Contratei uma limpeza profunda antes de sair do antigo apartamento e recebi meu depósito de volta por completo. Equipe extremamente profissional. Recomendo muito.',
          color: 'bg-accent',
        },
        {
          name: 'Linda R.',
          neighborhood: 'Noe Valley',
          initials: 'LR',
          text: 'Como anfitriã do Airbnb, preciso de trocas confiáveis em prazos curtos. A equipe do Andreas nunca falha. Meus hóspedes sempre comentam como tudo fica limpo.',
          color: 'bg-secondary',
        },
      ],
    },
    locationHours: {
      heading: 'Localização e horário',
      description: 'Baseados em Daly City, atendemos toda a região da Baía de San Francisco.',
      hours: 'Horário',
      serving: 'Atendendo Daly City e a região de SF Bay Area',
      openNow: 'Aberto agora',
      closed: 'Fechado',
      opensAt: 'Abre às 9h',
      opensNextPrefix: 'Abre',
      book: 'Agendar limpeza',
      dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
      dayShortNames: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      rows: [
        { open: '9:00', close: '20:00' },
        { open: '9:00', close: '20:00' },
        { open: '9:00', close: '20:00' },
        { open: '9:00', close: '20:00' },
        { open: '9:00', close: '20:00' },
        { open: '9:00', close: '20:00' },
        { open: null, close: null },
      ],
    },
    faq: {
      heading: 'Perguntas comuns',
      contactPrompt: 'Não encontrou a resposta?',
      contactLink: 'Fale conosco',
      items: [
        {
          question: 'Como faço para agendar uma limpeza?',
          answer: 'Você pode solicitar um orçamento pelo formulário de contato ou ligar diretamente para (415) 374-1720. Confirmamos a disponibilidade em até 1 hora durante o horário comercial.',
        },
        {
          question: 'A equipe passa por verificação de antecedentes?',
          answer: 'Sim. Cada membro da equipe passa por uma verificação completa de antecedentes e identidade antes do primeiro turno. Sua segurança e tranquilidade são prioridade.',
        },
        {
          question: 'Preciso estar em casa durante a limpeza?',
          answer: 'Não. Muitos clientes deixam uma chave reserva ou código de acesso. Sua casa e seus bens estão cobertos pela nossa apólice de responsabilidade civil.',
        },
        {
          question: 'Quais produtos de limpeza vocês usam?',
          answer: 'Usamos produtos ecológicos e não tóxicos, seguros para crianças e pets. Se você tiver preferência ou alergias, basta nos avisar.',
        },
      ],
    },
    footer: {
      description: 'Serviços profissionais de limpeza residencial em San Francisco, CA. Equipe confiável, segurada e com verificação de antecedentes.',
      servicesTitle: 'Serviços',
      companyTitle: 'Empresa',
      contactTitle: 'Contato',
      services: ['Limpeza profunda', 'Mudança', 'Limpeza recorrente', 'Limpeza comercial profunda', 'Planos personalizados'],
      company: [
        { label: 'Sobre nós', href: 'about' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contato', href: 'contact' },
        { label: 'Solicitar orçamento', href: 'contact' },
      ],
      contact: {
        address: 'San Francisco, CA 94015',
        phone: '(415) 374-1720',
        email: 'andreasperfectcleaning@gmail.com',
        hours: 'Seg-Sáb: 9:00 - 20:00',
      },
      rights: 'Todos os direitos reservados.',
      license: 'Licenciada, segurada e coberta na Califórnia',
      social: {
        instagram: 'Instagram',
        facebook: 'Facebook',
      },
    },
    about: {
      seoTitle: 'Sobre a Andreas Cleaning Co. | Limpeza em Daly City e na Bay Area',
      seoDescription: 'Conheça como a Andreas Cleaning Co. cresceu desde 2018 e se tornou uma empresa da Bay Area focada em segurança, qualidade e limpeza confiável.',
      headlineBadge: 'Empresa de limpeza da Bay Area',
      headline: 'Serviços de limpeza profissional baseados em segurança, qualidade e consistência.',
      intro: 'A Andreas Cleaning Co. foi fundada em 2018 e cresceu por meio de divulgação local, presença mais forte no Yelp e foco em clientes recorrentes.',
      highlights: [
        'Empresa avaliada no Yelp',
        'Fundada em 2018',
        'Telefone comercial: (415) 374-1720',
      ],
      detailsTitle: 'Fundada em 2018',
      detailsStatus: 'Atendendo clientes',
      currentFocusLabel: 'Foco atual',
      currentFocus: 'Atender casas e clientes recorrentes em toda a Bay Area com uma experiência mais limpa e confiável.',
      historyBadge: 'História da empresa',
      historyTitle: 'Crescimento prático e constante desde 2018.',
      historyBody: [
        'A empresa começou com marketing local e cartões de visita em San Francisco, depois cresceu construindo uma presença mais clara no Yelp.',
        'Essa abordagem ajudou o negócio a sair de trabalhos pontuais para clientes recorrentes, e ainda guia a forma como a empresa pensa crescimento hoje.',
      ],
      emphasisLabel: 'O que a empresa valoriza',
      emphasisBody: 'Produtos ecológicos, limpeza cuidadosa das superfícies e detalhes finais como origami de toalhas em quartos e banheiros.',
      ownerBadge: 'Proprietário',
      serviceNotesBadge: 'Notas sobre o serviço',
      ownerName: 'Andréa S.',
      ownerBio: [
        'Andréa criou a empresa porque queria oferecer aos clientes um ambiente confortável e limpo, além de criar um trabalho mais pessoal do que transacional.',
        'O que move o negócio é a reação ao final de cada serviço: ver o cliente relaxar quando o espaço fica melhor.',
      ],
      ownerReaction: 'O que move o negócio é a reação ao final de cada serviço: ver o cliente relaxar quando o espaço fica melhor.',
      cta: 'Agendar um horário',
      backToContact: 'Agendar um horário',
    },
    contact: {
      seoTitle: 'Receba um orçamento grátis | Fale com a Andreas Cleaning Co.',
      seoDescription: 'Solicite um orçamento grátis para limpeza residencial em San Francisco. Resposta rápida, preços transparentes e sem compromisso.',
      heading: 'Receba seu orçamento grátis',
      intro: 'Preencha o formulário e retornaremos com um orçamento transparente em até 1 hora durante o horário comercial.',
      responseTime: '1 hora',
      privacyLabel: 'Garantia de privacidade',
      callUs: 'Ligue para nós',
      emailUs: 'Envie um e-mail',
      location: 'Localização',
      hours: 'Horário comercial',
      privacy: 'Garantia de privacidade: suas informações são 100% privadas e nunca serão vendidas ou compartilhadas com terceiros.',
      formTitle: 'Solicite um orçamento grátis',
      fullName: 'Nome completo *',
      emailAddress: 'E-mail *',
      phoneNumber: 'Telefone',
      namePlaceholder: 'João Silva',
      emailPlaceholder: 'joao@exemplo.com',
      phonePlaceholder: '(415) 000-0000',
      serviceType: 'Tipo de serviço *',
      propertySize: 'Tamanho do imóvel *',
      preferredDate: 'Data preferida',
      preferredTime: 'Janela de horário preferida',
      additionalNotes: 'Observações adicionais',
      submit: 'Solicitar meu orçamento grátis',
      submitNote: 'Normalmente respondemos em até 1 hora · Sem compromisso · Sem spam.',
      servicePlaceholder: 'Selecione um serviço',
      sizePlaceholder: 'Selecione o tamanho da casa',
      notePlaceholder: 'Conte-nos sobre áreas específicas para atenção ou instruções de acesso...',
      services: [
        'Limpeza padrão',
        'Limpeza profunda',
        'Limpeza de entrada',
        'Limpeza de saída',
        'Limpeza de escritório',
        'Pós-obra',
        'Limpeza de Airbnb',
        'Outro',
      ],
      sizes: [
        'Studio',
        '1 quarto',
        '2 quartos',
        '3 quartos',
        '4+ quartos',
        'Espaço comercial',
      ],
      times: [
        'Manhã (7h–11h)',
        'Tarde (11h–15h)',
        'Fim de tarde (15h–19h)',
      ],
    },
    misc: {
      aboutBusinessLabel: 'Sobre a empresa',
      phoneLabel: 'Telefone',
      sinceLabel: 'Desde',
      mapTitle: 'Localização da Andreas Cleaning Co. no Google Maps',
      neighborhoodLine: 'Atendemos todos os bairros de San Francisco',
      hoursLine: 'Seg–Sáb: 7:00 – 19:00',
      logoCaption: 'Limpeza residencial profissional',
    },
  },
};

export function getSiteCopy(locale: Locale): SiteCopy {
  return siteCopy[locale];
}
