export interface MaterialItem {
  id: string;
  name: string;
  unit: string;
  approxPrice?: string;
  tags?: string[];
}

export interface MaterialCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  items: MaterialItem[];
}

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  initials: string;
  verified: boolean;
}

export interface QuoteItem {
  materialId: string;
  materialName: string;
  quantity: number;
  unit: string;
}

export interface EstimationResult {
  itemName: string;
  quantity: number;
  unit: string;
  description: string;
}
