const fs = require('fs');
let code = fs.readFileSync('src/components/SnapchatWebDev.tsx', 'utf8');

const oldArray = `  const slideImages = [
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845984/WhatsApp_Image_2026-08-04_at_3.17.16_PM_1_dny4la.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845984/WhatsApp_Image_2026-08-04_at_3.17.16_PM_zt43w0.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845985/WhatsApp_Image_2026-08-04_at_3.17.32_PM_1_ssoh8m.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845985/WhatsApp_Image_2026-08-04_at_3.17.33_PM_1_frdzkk.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845986/WhatsApp_Image_2026-08-04_at_3.17.32_PM_pjrxip.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845988/WhatsApp_Image_2026-08-04_at_3.17.32_PM_2_xap0d1.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845983/WhatsApp_Image_2026-08-04_at_3.17.33_PM_awtws7.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845983/WhatsApp_Image_2026-08-04_at_3.17.16_PM_2_g4g8fr.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845983/WhatsApp_Image_2026-08-04_at_3.17.32_PM_3_fsqymm.jpg"
  ];`;

const newArray = `  const slideImages = [
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845985/WhatsApp_Image_2026-08-04_at_3.17.32_PM_1_ssoh8m.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845985/WhatsApp_Image_2026-08-04_at_3.17.33_PM_1_frdzkk.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845986/WhatsApp_Image_2026-08-04_at_3.17.32_PM_pjrxip.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845988/WhatsApp_Image_2026-08-04_at_3.17.32_PM_2_xap0d1.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845983/WhatsApp_Image_2026-08-04_at_3.17.33_PM_awtws7.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845983/WhatsApp_Image_2026-08-04_at_3.17.16_PM_2_g4g8fr.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845983/WhatsApp_Image_2026-08-04_at_3.17.32_PM_3_fsqymm.jpg"
  ];`;

code = code.replace(oldArray, newArray);
fs.writeFileSync('src/components/SnapchatWebDev.tsx', code);
console.log('patched');
