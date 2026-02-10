
export type Category = 'BACKPACKS' | 'HANDBAGS';

export interface Product {
  id: string;
  name: string;
  category: Category;
  subCategory: string;
  price: number;
  image: string;
  description: string;
  impact: {
    wasteReduced: string;
    lifespan: string;
    materials: string[];
  };
}

export interface CartItem extends Product {
  quantity: number;
}
