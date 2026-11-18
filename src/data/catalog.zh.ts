import { whatsappLink } from './catalog';

export const servicesZh = [
  { number: '01', title: '补水与干燥', description: '针对缺水、干燥或紧绷肌肤的舒适护理方案。', outcome: '帮助肌肤恢复舒适感，呈现水润柔嫩的状态。' },
  { number: '02', title: '痘痘与瑕疵', description: '针对痘痘、毛孔堵塞与明显瑕疵的专业护理。', outcome: '帮助肌肤看起来更清透、更平衡。' },
  { number: '03', title: '泛红与敏感', description: '为脆弱、易受刺激或敏感肌肤而设的温和护理方向。', outcome: '舒缓明显泛红，帮助提升肌肤舒适度。' },
  { number: '04', title: '色素与暗斑', description: '针对肤色不均、日晒痕迹与痘印的专业护理。', outcome: '帮助肌肤呈现更明亮、均匀的肤色。' },
  { number: '05', title: '弹性与皱纹', description: '针对细纹、松弛与弹性流失的抗老护理方案。', outcome: '改善细纹外观，帮助肌肤看起来更紧致。' },
  { number: '06', title: '光泽与活力', description: '为疲倦、暗沉或受环境影响的肌肤注入活力。', outcome: '帮助肌肤恢复明亮、健康的光泽。' },
  { number: '07', title: '眼部与颈部护理', description: '集中护理容易首先出现老化迹象的细致部位。', outcome: '帮助眼周与颈部肌肤看起来更平滑、更清新。' },
].map((service) => ({
  ...service,
  whatsappHref: whatsappLink(`您好！我想了解 Sothys Kuantan 的「${service.title}」专业护理，并预约皮肤咨询。`),
}));

export const productCategoriesZh = ['洁面产品', '精华液', '保湿产品', '面膜', '眼唇护理', '防晒护理', '护肤套装'];

export const productEnquiryHrefZh = whatsappLink('您好！我想了解 Sothys 居家护肤产品。可以根据我的肌肤状况推荐适合的产品吗？');

export const appointmentHrefZh = whatsappLink('您好！我想预约 Sothys Kuantan 的皮肤咨询与专业护理。');
