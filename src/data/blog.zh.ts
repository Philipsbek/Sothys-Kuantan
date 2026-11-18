import { blogPosts, blogPublished, type BlogPost, type BlogSection } from './blog';

export type ZhBlogPost = Omit<BlogPost, 'category' | 'sections'> & {
  category: '专业护理' | '日常护肤' | '关丹指南';
  sections: BlogSection[];
};

type Translation = {
  title: string;
  category: ZhBlogPost['category'];
  focus: string;
  quick: string;
};

const translations: Record<string, Translation> = {
  'facial-treatment-kuantan-first-visit': { title: '关丹第一次做专业面部护理：完整流程指南', category: '关丹指南', focus: '从皮肤咨询、疗程选择到护理后建议，了解第一次到美容院时会经历什么。', quick: '第一次专业面部护理通常先从了解肌肤状况、日常习惯与目标开始，再由美容师选择合适且舒适的护理步骤。' },
  'hydrating-facial-kuantan-dry-skin': { title: '关丹补水面部护理：改善干燥与紧绷感', category: '专业护理', focus: '认识干燥肌与缺水肌的差别，以及补水护理如何改善紧绷与粗糙感。', quick: '补水护理的目标是提升肌肤舒适度与柔嫩感；适合的方案取决于缺水、缺油、敏感或多种状况并存。' },
  'acne-facial-kuantan-blemish-care': { title: '关丹痘痘肌面部护理：温和照顾易长痘肌肤', category: '专业护理', focus: '以温和清洁与平衡护理照顾痘痘、堵塞毛孔和明显瑕疵。', quick: '美容护理可以帮助改善清洁度、舒适感与堵塞外观，但不能取代医生对严重、疼痛或留疤痘痘的诊断。' },
  'sensitive-skin-facial-kuantan': { title: '关丹敏感肌面部护理：舒适与温和优先', category: '专业护理', focus: '为容易泛红、刺痛或受刺激的肌肤选择更精简、更舒适的专业护理。', quick: '敏感肌护理应先减少刺激并观察反应，而不是追求强烈感觉或一次加入太多活性成分。' },
  'pigmentation-facial-kuantan-dark-spots': { title: '关丹色素与暗斑护理：改善肤色不均', category: '专业护理', focus: '通过专业护理与日常防晒，循序照顾暗斑、痘印与肤色不均。', quick: '改善色素问题需要耐心、稳定防晒与适合的护理；单次疗程通常不能让暗斑完全消失。' },
  'anti-aging-facial-kuantan': { title: '关丹抗老紧致面部护理：以实际目标改善细纹', category: '专业护理', focus: '以补水、舒适与紧致感为重点，照顾细纹与弹性流失。', quick: '抗老护理可帮助肌肤看起来更饱满、平滑与有光泽，但应以持续照顾和实际目标为基础。' },
  'glowing-skin-facial-kuantan': { title: '关丹焕亮面部护理：找回健康光泽', category: '专业护理', focus: '针对疲倦、暗沉与缺乏光泽的肌肤，建立温和焕亮方向。', quick: '焕亮护理通常结合温和清洁、适度去角质、补水与防晒，让肌肤逐步恢复清新光泽。' },
  'facial-before-event-kuantan': { title: '重要活动前应该何时做面部护理？', category: '关丹指南', focus: '按活动日期安排护理时间，并避免在重要日子前尝试太刺激的新疗程。', quick: '熟悉且温和的护理可在活动前数天安排；全新或较强的护理应预留更长观察时间。' },
  'monthly-facial-benefits': { title: '每月做面部护理值得吗？', category: '专业护理', focus: '从肌肤目标、预算与日常习惯判断固定护理频率是否适合自己。', quick: '每月护理并非人人必须；最合适的频率取决于肌肤状况、疗程强度、居家护理与预算。' },
  'professional-skin-consultation-kuantan': { title: '为什么专业皮肤咨询很重要？', category: '关丹指南', focus: '通过咨询了解当前肌肤、产品使用与期望，再决定适合的护理方向。', quick: '专业咨询能减少盲目选择，帮助美容师在安全、舒适与现实目标之间作出更合适的建议。' },
  'skincare-routine-malaysia-humid-weather': { title: '马来西亚湿热天气的简单护肤程序', category: '日常护肤', focus: '为炎热潮湿、频繁流汗与冷气环境建立轻盈而稳定的日常程序。', quick: '温和洁面、适量保湿与每天防晒是湿热天气护肤的基础；质地可轻盈，但不应完全省略保湿。' },
  'sunscreen-kuantan-hot-weather': { title: '关丹炎热天气防晒指南', category: '日常护肤', focus: '选择愿意每天使用的广谱防晒，并在户外、流汗或擦拭后适时补涂。', quick: '最有效的防晒是用量足够、适合日常且能持续补涂的产品，同时结合遮阳、衣物与避开强烈日晒。' },
  'oily-skin-routine-malaysia': { title: '马来西亚油性肌护肤：控油但不过度清洁', category: '日常护肤', focus: '以温和清洁、轻盈保湿与稳定防晒维持油脂与舒适度平衡。', quick: '油性肌也需要保湿；过度清洁或频繁使用刺激成分，反而可能令肌肤更不舒服。' },
  'dry-vs-dehydrated-skin': { title: '干性肌与缺水肌有什么不同？', category: '日常护肤', focus: '分辨长期缺油与暂时缺水，避免只看表面油光就选择错误护理。', quick: '干性肌通常与油脂较少有关；缺水则是水分不足的状态，任何肤质都可能同时出现。' },
  'sensitive-skin-routine-guide': { title: '敏感肌护肤：简单温和的步骤', category: '日常护肤', focus: '减少不必要步骤，一次只尝试一种新产品，并留意持续刺痛或泛红。', quick: '敏感肌程序应以温和洁面、基础保湿和防晒为核心，先稳定再考虑额外活性成分。' },
  'how-to-layer-skincare': { title: '护肤品正确使用顺序：早晚简单指南', category: '日常护肤', focus: '从轻薄到较厚质地排列产品，并避免一次堆叠过多刺激成分。', quick: '一般可按洁面、精华、保湿、防晒的顺序使用；防晒放在早间护肤最后一步。' },
  'cleanser-for-your-skin-type': { title: '如何按肤质选择洁面产品', category: '日常护肤', focus: '按清洁后的舒适感、使用习惯与当前肌肤状态选择洁面产品。', quick: '合适的洁面产品应能去除日常污垢，又不会令肌肤持续紧绷、刺痛或过度干燥。' },
  'moisturiser-tropical-climate': { title: '马来西亚热带气候如何选择保湿产品', category: '日常护肤', focus: '在炎热户外与冷气室内之间，选择舒适、易坚持的保湿质地。', quick: '热带天气仍需要保湿；油性肌可选轻盈乳液，干燥肌则可在夜间或冷气环境使用更滋润质地。' },
  'face-serum-guide': { title: '精华液选择指南：按肌肤问题而不是流行趋势', category: '日常护肤', focus: '先确定一个主要肌肤目标，再选择成分与使用频率。', quick: '精华液不是越多越好；先围绕一个主要问题选择，并观察数周的舒适度与变化。' },
  'how-often-to-exfoliate': { title: '面部多久去角质一次？', category: '日常护肤', focus: '根据肤质、产品强度与耐受度控制频率，避免同时使用太多去角质方式。', quick: '去角质频率没有统一答案；从低频率开始，若出现持续刺痛、脱皮或泛红应暂停并简化程序。' },
  'post-facial-aftercare': { title: '面部护理后保养：首48小时注意事项', category: '专业护理', focus: '护理后保持程序简单，避免强烈去角质、过热环境与不必要刺激。', quick: '护理后的首一两天应使用温和产品、做好防晒，并遵循美容师针对该疗程给出的建议。' },
  'how-often-should-you-get-facial': { title: '多久做一次面部护理？', category: '专业护理', focus: '以肌肤目标、反应、疗程类型与预算决定频率，而不是套用固定时间表。', quick: '护理间隔应个性化；稳定保养可能每四至六周一次，也有人只在需要时预约。' },
  'signs-your-skin-needs-facial': { title: '肌肤可能需要专业护理的7个迹象', category: '专业护理', focus: '当居家程序无法改善持续干燥、堵塞、暗沉或不确定状况时，可考虑专业咨询。', quick: '专业护理最有价值的地方，是在肌肤状况反复或选择困难时提供观察、建议与适合的护理方向。' },
  'blackheads-congested-pores-care': { title: '黑头与毛孔堵塞：更温和的护理方式', category: '日常护肤', focus: '通过稳定清洁、适度去角质与不堵塞毛孔的保湿，减少粗暴挤压。', quick: '黑头需要持续而温和的护理；反复挤压与过度磨砂可能造成刺激，无法永久改变毛孔大小。' },
  'stress-and-skin-care': { title: '压力与肌肤：建立更舒缓的护肤程序', category: '日常护肤', focus: '在忙碌时期简化步骤、维持睡眠与规律护理，减少频繁更换产品。', quick: '压力可能影响睡眠、习惯与肌肤舒适度；简单稳定的程序通常比不断加入新品更容易坚持。' },
  'bridal-facial-timeline-kuantan': { title: '关丹新娘面部护理时间表', category: '关丹指南', focus: '提早数月咨询、测试疗程并在婚礼前保持稳定，减少最后一刻尝试新护理。', quick: '新娘护理越早规划越从容；先建立适合的方案，婚礼前只做肌肤熟悉的温和护理。' },
  'facial-for-women-kuantan': { title: '关丹女性面部护理：如何选择适合的疗程', category: '关丹指南', focus: '从当前问题、舒适度、时间与预算出发，而不是单看疗程名称。', quick: '适合的护理应回应你当下的肌肤，而不是年龄标签；先咨询再选择通常更可靠。' },
  'mature-skin-care-kuantan': { title: '关丹熟龄肌护理：补水、舒适与自信', category: '关丹指南', focus: '以补水、屏障舒适与实际抗老目标照顾熟龄肌肤。', quick: '熟龄肌护理不必复杂；温和清洁、充分保湿、防晒与持续专业建议是稳健基础。' },
  'teen-skincare-basics': { title: '青少年基础护肤：简单易坚持的程序', category: '日常护肤', focus: '从温和洁面、轻盈保湿与防晒开始，避免跟风堆叠强烈成分。', quick: '青少年护肤越简单越容易坚持；若痘痘疼痛、严重或留疤，应寻求医生或皮肤科专业意见。' },
  'choose-beauty-salon-kuantan': { title: '如何选择关丹美容院：实用检查清单', category: '关丹指南', focus: '比较咨询方式、卫生、透明沟通、真实评价与护理后的支持。', quick: '值得信赖的美容院会先了解你的需要、清楚说明护理与价格，并尊重你的舒适度与决定。' },
};

const makeSections = (entry: Translation): BlogSection[] => [
  {
    heading: '先了解你的肌肤与目标',
    paragraphs: [
      `${entry.focus} 每个人的肌肤状态、生活习惯与耐受度都不同，因此先观察当下状况，比单靠肤质标签或热门产品更有意义。`,
      '若肌肤正使用处方产品、最近接受医美程序，或曾出现明显过敏反应，请在咨询或加入新产品前主动说明。',
    ],
  },
  {
    heading: '选择温和、可持续的方法',
    paragraphs: [
      '有效的护理不一定要带来强烈感觉。适合自己的步骤应让肌肤保持舒适，并能稳定融入日常生活。一次只调整一项，更容易判断肌肤反应。',
      '在关丹炎热潮湿的环境里，轻盈保湿与广谱防晒同样重要。户外活动、流汗或擦拭后，记得按产品说明补涂防晒。',
    ],
    bullets: ['避免同时尝试多种强效活性成分', '持续泛红、疼痛或突然变化时寻求医疗建议', '专业护理后遵循美容师提供的个别建议'],
  },
  {
    heading: '把建议转化为个人计划',
    paragraphs: [
      '记录肌肤感觉、正在使用的产品与希望改善的问题。咨询时，这些资料能帮助美容师更准确地建议护理方向，也能避免重复或不必要的步骤。',
      '如需根据当前肌肤状况选择 Sothys 专业护理或居家产品，可联系 Sothys Kuantan 安排咨询。美容护理提供的是一般护肤支持，不能取代医疗诊断。',
    ],
  },
];

export const zhBlogPublished = blogPublished;

export const zhBlogPosts: ZhBlogPost[] = blogPosts.map((post) => {
  const entry = translations[post.slug];
  if (!entry) throw new Error(`Missing Chinese translation for ${post.slug}`);
  return {
    ...post,
    title: entry.title,
    seoTitle: `${entry.title}｜Sothys Kuantan`,
    description: `${entry.focus} 阅读由 Sothys Kuantan 为关丹与马来西亚读者准备的实用中文护肤指南。`,
    excerpt: entry.focus,
    category: entry.category,
    keywords: [...post.keywords, entry.title, '关丹美容院', '关丹面部护理', 'Sothys Kuantan'],
    imageAlt: `${entry.title}的专业护肤主题图片`,
    quickAnswer: entry.quick,
    sections: makeSections(entry),
  };
});

export const zhBlogCategories = ['全部', '专业护理', '日常护肤', '关丹指南'] as const;

export const getZhRelatedPosts = (current: ZhBlogPost, count = 3) => {
  const sameCategory = zhBlogPosts.filter((post) => post.slug !== current.slug && post.category === current.category);
  const others = zhBlogPosts.filter((post) => post.slug !== current.slug && post.category !== current.category);
  return [...sameCategory, ...others].slice(0, count);
};
