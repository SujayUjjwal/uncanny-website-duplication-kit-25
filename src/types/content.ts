
export interface FormattingOptions {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  lineHeight?: string;
  letterSpacing?: string;
}

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

export interface EnrollmentSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  education: string;
  courseSelection: string;
  parentName: string;
  parentPhone: string;
  address: string;
  message: string;
  status: 'New' | 'Contacted' | 'Processed' | 'Enrolled' | 'Rejected';
  submittedAt: string;
}

export interface RegistrationSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  courseInterest: string;
  message: string;
  status: 'New' | 'Contacted' | 'Processed' | 'Registered' | 'Rejected';
  submittedAt: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  status: 'New' | 'Contacted' | 'Processed' | 'Resolved';
  submittedAt: string;
}

export interface FormSubmissions {
  enrollments: EnrollmentSubmission[];
  registrations: RegistrationSubmission[];
  contacts: ContactSubmission[];
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
  submissions: FormSubmissions;
}

export interface ContentWithFormatting {
  content: any;
  formatting: Record<string, FormattingOptions>;
}

export interface WebsiteContentSection {
  id: string;
  section_key: string;
  content_data: any;
  formatting_options: Record<string, FormattingOptions>;
  version: number;
  created_at: string;
  updated_at: string;
}

export const FONT_FAMILIES = [
  'Inter',
  'Roboto',
  'Open Sans',
  'Lato',
  'Source Sans Pro',
  'Montserrat',
  'Nunito',
  'Poppins'
];

export const FONT_WEIGHTS = [
  { value: '300', label: 'Light' },
  { value: '400', label: 'Regular' },
  { value: '500', label: 'Medium' },
  { value: '600', label: 'Semibold' },
  { value: '700', label: 'Bold' },
  { value: '800', label: 'Extrabold' }
];

export const FONT_SIZES = [
  '12', '14', '16', '18', '20', '24', '28', '32', '36', '40', '48', '56', '64', '72'
];
