const whatsappNumber = '60129816966';

export const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const services = [
  { number: '01', title: 'Hydration & Dryness', description: 'A comfort-focused treatment path for skin that feels dehydrated, dry, or tight.', outcome: 'Restore comfort and a fresh, supple-looking finish.' },
  { number: '02', title: 'Acne & Blemishes', description: 'Professional care for breakouts, clogged pores, and visible imperfections.', outcome: 'Support clearer-looking, more balanced skin.' },
  { number: '03', title: 'Redness & Sensitivity', description: 'A gentle treatment direction for fragile, reactive, or sensitised skin.', outcome: 'Soothe the look of redness and reinforce skin comfort.' },
  { number: '04', title: 'Pigmentation & Dark Spots', description: 'Targeted professional care for uneven tone, sun damage, and post-acne marks.', outcome: 'Reveal a brighter, more even-looking complexion.' },
  { number: '05', title: 'Elasticity & Wrinkles', description: 'An age-defying treatment path for visible lines, loss of firmness, and sagging.', outcome: 'Refine the look of lines and support firmer-looking skin.' },
  { number: '06', title: 'Radiance & Vitality', description: 'Revitalising care for tired, dull, or pollution-exposed skin.', outcome: 'Bring back a rested, luminous-looking glow.' },
  { number: '07', title: 'Eye & Neck Care', description: 'Focused professional care for delicate areas that show signs of ageing first.', outcome: 'Smooth and refresh the appearance of the eye and neck areas.' },
].map((service) => ({
  ...service,
  whatsappHref: whatsappLink(`Hi! I'm interested in the ${service.title} treatment at Sothys Kuantan. I would like to know more and book a consultation.`),
}));

export const productCategories = ['Cleansers', 'Serums', 'Moisturisers', 'Masks', 'Eye & Lip Care', 'Sun Care', 'Skincare Sets'];

export const productEnquiryHref = whatsappLink(
  "Hi! I'm interested in Sothys homecare products. Could you recommend the right product category for my skin?",
);

export const appointmentHref = whatsappLink(
  "Hi! I'd like to book a skin consultation and treatment appointment at Sothys Kuantan.",
);
