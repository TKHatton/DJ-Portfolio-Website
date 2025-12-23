
export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

export interface SystemStatus {
  id: string;
  name: string;
  problem: string;
  whoItIsFor: string;
  status: 'In Development' | 'Validating' | 'Planning';
  availability: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
