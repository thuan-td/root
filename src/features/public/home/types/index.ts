export interface FeaturedStore {
  id: string;
  title: string;
  address: string;
  station: string;
  price: number;
  imageUrl: string;
  category: 'STORAGE' | 'GARAGE' | 'PARKING';
  available: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  tag: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  imageUrl: string;
  borderColor: string;
}

export interface UseCase {
  id: string;
  imageUrl: string;
  category: string;
  title: string;
  tags: string;
}

export interface Column {
  id: string;
  imageUrl: string;
  date: string;
  title: string;
  tags: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
