import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

export interface Business {
  id: number;
  slug: string;
  name: string;
  logo_url: string | null;
  messenger_id: string;
}

export interface Category {
  id: number;
  business_id: number;
  name: string;
  sort_order: number;
}

export interface MenuItem {
  id: number;
  category_id: number;
  name: string;
  description: string;
  price: number;
  image_url: string | null;
  is_popular: boolean;
  is_available: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}
