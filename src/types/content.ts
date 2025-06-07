
export interface HeroContent {
  title: string;
  subtitle: string;
  tagline: string;
  backgroundImage: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
  buttonText: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  color: string;
  width: string;
}

export interface SubjectCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServicesContent {
  title: string;
  services: ServiceItem[];
  subjects: SubjectCard[];
}

export interface StrategyStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface StrategyContent {
  title: string;
  subtitle: string;
  steps: StrategyStep[];
}

export interface StatisticItem {
  id: string;
  number: string;
  label: string;
}

export interface StatisticsContent {
  stats: StatisticItem[];
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  specialization: string;
}

export interface TeamContent {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

export interface NavigationContent {
  brandName: string;
  menuItems: Array<{
    id: string;
    name: string;
    href: string;
    section: string;
  }>;
}

export interface ContactContent {
  title: string;
  subtitle: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
}

export interface WebsiteContent {
  navigation: NavigationContent;
  hero: HeroContent;
  services: ServicesContent;
  strategy: StrategyContent;
  statistics: StatisticsContent;
  team: TeamContent;
  contact: ContactContent;
  footer: {
    text: string;
  };
}
