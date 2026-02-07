
export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  CONTACT = 'contact',
}

export interface SpecialtyCard {
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: { label: string; value: string }[];
}
