import rawProducts from './products.json';

export interface Product {
  handle: string;
  title: string;
  price: string;
  description: string;
  meta: string;
  image: string;
  category: string;
}

export const categoryFor = (title: string) => {
  const value = title.toLowerCase();
  if (value.includes('serum') || value.includes('ampoule')) return 'Serums';
  if (value.includes('clean') || value.includes('lotion') || value.includes('essence')) return 'Cleansers';
  if (value.includes('mask') || value.includes('desquacrem')) return 'Masks';
  if (value.includes('eye') || value.includes('lip')) return 'Eye & Lip';
  if (value.includes('set') || value.includes('kit') || value.includes('tr.')) return 'Sets';
  if (value.includes('spf') || value.includes('sun')) return 'Sun Care';
  return 'Moisturisers';
};

export const products: Product[] = rawProducts.map((product) => ({
  ...product,
  handle: decodeURIComponent(product.handle),
  category: categoryFor(product.title),
}));

export const services = [
  { number: '01', title: 'Hydration & Dryness', description: 'For dehydrated, dry, or tight-feeling skin.' },
  { number: '02', title: 'Acne & Blemishes', description: 'For breakouts, clogged pores, and imperfections.' },
  { number: '03', title: 'Redness & Sensitivity', description: 'For fragile, reactive, or sensitised skin.' },
  { number: '04', title: 'Pigmentation & Dark Spots', description: 'For uneven skin tone, sun damage, or post-acne marks.' },
  { number: '05', title: 'Ageing: Elasticity & Wrinkle', description: 'For visible ageing signs, expression lines, or sagging.' },
  { number: '06', title: 'Dullness & Lack of Radiance', description: 'For tired, lifeless, or pollution-exposed skin.' },
  { number: '07', title: 'Eye & Neck Care', description: 'Targeted care to effectively combat signs of ageing.' },
].map((service) => ({ ...service, href: `/contact?service=${encodeURIComponent(service.title)}` }));

export const categories = ['All', ...new Set(products.map((product) => product.category))];
