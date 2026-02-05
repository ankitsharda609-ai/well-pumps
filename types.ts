
export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
}

export interface DiagnosticMessage {
  role: 'user' | 'assistant';
  content: string;
}
