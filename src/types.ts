export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  features: Feature[];
  techStack: string[];
  imageUrl: string;
}

export interface Feature {
  title: string;
  details: string[];
}

export interface TechStackCategory {
  name: string;
  items: string[];
}
