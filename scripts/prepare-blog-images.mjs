import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const sourceDir = 'C:/Users/user/.codex/generated_images/01a01b51-14b5-7cc0-9c7c-a02d64b2572a';
const outputDir = fileURLToPath(new URL('../public/blog/', import.meta.url));

const images = [
  ['exec-9f44b813-1e3e-490b-9522-2f0ebe0cc91b.png', 'facial-treatment-kuantan-first-visit'],
  ['exec-bb3af5b5-7080-42e8-87f1-e3838f753666.png', 'hydrating-facial-kuantan-dry-skin'],
  ['exec-f51399a7-42ec-41cc-a1ef-445590b2eae4.png', 'acne-facial-kuantan-blemish-care'],
  ['exec-48923ef2-e28c-466c-9639-0e6245f46264.png', 'sensitive-skin-facial-kuantan'],
  ['exec-6f5250ad-da99-4390-bac5-144dc746f39d.png', 'pigmentation-facial-kuantan-dark-spots'],
  ['exec-6fb78b70-ec77-40a8-a176-c24048a9bed9.png', 'anti-aging-facial-kuantan'],
  ['exec-e2ba1738-7714-4614-aaa2-d2ae29ce311e.png', 'glowing-skin-facial-kuantan'],
  ['exec-ab9b6550-3201-4ce2-9535-b95a037f2307.png', 'facial-before-event-kuantan'],
  ['exec-f8346871-d50c-4b64-a00c-a75bdcd44adc.png', 'monthly-facial-benefits'],
  ['exec-7d3e698f-d899-4310-9177-8992c6f64242.png', 'professional-skin-consultation-kuantan'],
  ['exec-48e35028-42a6-46dc-ba8d-b23f2ac9b4c1.png', 'skincare-routine-malaysia-humid-weather'],
  ['exec-a99625fe-db9e-4772-bfe6-d345af881ce5.png', 'sunscreen-kuantan-hot-weather'],
  ['exec-fe64b6d4-be5c-4c7a-acab-210b0efd0105.png', 'oily-skin-routine-malaysia'],
  ['exec-2268e044-c520-49a3-ab9e-02ddbab56942.png', 'dry-vs-dehydrated-skin'],
  ['exec-d5933ada-3d69-4d18-bb1d-6babfeeb19ee.png', 'sensitive-skin-routine-guide'],
  ['exec-cf918443-0570-4089-b4d8-519ff34e52f3.png', 'how-to-layer-skincare'],
  ['exec-7123182f-d8cb-4364-89f0-32dafa145d32.png', 'cleanser-for-your-skin-type'],
  ['exec-08c55f21-bdb4-4d86-976e-62a047f79dc6.png', 'moisturiser-tropical-climate'],
  ['exec-2ae853c2-b48e-46ed-8b7b-524b595d1b6f.png', 'face-serum-guide'],
  ['exec-f893a096-9939-40af-a32e-4a8d1d7e29c2.png', 'how-often-to-exfoliate'],
  ['exec-8cdcd63d-9fff-4eb9-9b19-27d0ed7ecde2.png', 'post-facial-aftercare'],
  ['exec-183df340-1253-449c-894b-296aaeca7468.png', 'how-often-should-you-get-facial'],
  ['exec-e2557536-5a16-46c9-95f4-9fcb7fb139ef.png', 'signs-your-skin-needs-facial'],
  ['exec-feb47d0a-b993-4db4-8a1e-b2f6d74db0e8.png', 'blackheads-congested-pores-care'],
  ['exec-8590c3ab-f810-4a7c-82ab-05c213d2aade.png', 'stress-and-skin-care'],
  ['exec-eba9768d-2bb4-432b-850a-cf32fe8e258d.png', 'bridal-facial-timeline-kuantan'],
  ['exec-4b7988b8-3880-47d2-ae20-9f28e73899aa.png', 'facial-for-women-kuantan'],
  ['exec-f0adeef3-d59c-446b-a282-787116b3fddf.png', 'mature-skin-care-kuantan'],
  ['exec-2acedfd3-a1dd-450e-a199-cd258c3dffc0.png', 'teen-skincare-basics'],
  ['exec-298a549d-d042-43da-8cb9-a7221eea2dcf.png', 'choose-beauty-salon-kuantan'],
];

await mkdir(outputDir, { recursive: true });

await Promise.all(images.map(async ([source, slug]) => {
  const destination = join(outputDir, `${slug}.webp`);
  await sharp(join(sourceDir, source))
    .resize(1400, 900, { fit: 'cover', position: 'attention' })
    .webp({ quality: 86, effort: 5 })
    .toFile(destination);
}));

console.log(`Prepared ${images.length} blog images in public/blog.`);
