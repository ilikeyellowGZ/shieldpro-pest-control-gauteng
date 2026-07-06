export type Page =
  | 'home'
  | 'about'
  | 'services'
  | 'service-cockroach'
  | 'service-rodent'
  | 'service-termite'
  | 'service-bedbug'
  | 'service-ant'
  | 'service-flea'
  | 'service-residential'
  | 'service-commercial'
  | 'industries'
  | 'areas'
  | 'pest-guide'
  | 'blog'
  | 'reviews'
  | 'contact'
  | 'book-inspection'
  | 'privacy'
  | 'terms';

export interface PestInfo {
  id: string;
  name: string;
  scientificName?: string;
  icon: string;
  dangerLevel: 'Low' | 'Medium' | 'High' | 'Extreme';
  gautengRisk: string;
  signsOfInfestation: string[];
  treatmentApproach: string;
  preventionTips: string[];
  description: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  process: string[];
  urgencyLevel: string;
  pageId: Page;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  type: 'Residential' | 'Commercial';
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
}

export interface ServiceArea {
  name: string;
  region: 'Johannesburg' | 'Pretoria' | 'East Rand' | 'West Rand' | 'Midrand & Centurion';
  suburbs: string[];
  description: string;
  urgencyNote: string;
}

export interface LeadSubmission {
  name: string;
  phone: string;
  whatsapp?: string;
  email: string;
  suburb: string;
  propertyType: string;
  pestType: string;
  urgency: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
}
