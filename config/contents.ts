import { HeroHeader, ContentSection } from "@/types/contents"

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Add images by adding files to /public folder
-- Leave blank `` if you don't want to put texts or images
 ==================== */

export const heroHeader: HeroHeader = {
  header: `خدمات شبانه روزی امداد خودرو و مکانیک سیار جوکار`,
  // headertag: `تجربه بیش از ۱۱ سال امداد خودرو حرفه‌ای`,
  tell: ` 09177483447 ، 09301713447`,
  subheader: `🚨 در هر ساعت از شبانه‌روز، در هر نقطه از سروستان و جاده‌های اطراف، تیم امداد خودرو سروستان آماده است تا مشکل خودروی شما را برطرف کند. از حمل خودرو تا تعمیرات سیار، ما همیشه در کنار شما هستیم!`,
  image: `/hero-img.webp`,
}

export const featureCards: ContentSection = {
  header: `🚗 حمل خودرو به سراسر ایران`,
  subheader: `امداد خودرو سروستان مجهز به ناوگان پیشرفته حمل خودرو شامل:`,
  content: [
    {
      text: `خودروبر کفی هیدرولیکی`,
      subtext: `یدک‌کش و چرخ‌گیر مکانیزه`,
      image: "/car2.jpg",
    },
    {
      text: `خودروسوار ویژه خودروهای لوکس`,
      subtext: `جرثقیل خودروبر برای خودروهای تصادفی`,
      image: "/car6.jpg",
    },
    {
      text: `انتقال خودروهای صفر و کارکرده به سراسر ایران`,
      subtext: `با مناسب‌ترین قیمت و بیمه بارنامه رسمی، خودرو شما را بدون کوچک‌ترین آسیب جابه‌جا می‌کنیم.`,
      image: "/car4.jpg",
    },
  ],
};


export const features: ContentSection = {
  header: `Features`,
  subheader: `Why use Next Landing?`,
  image: `/features-img.webp`,
  content: [
    {
      text: `SEO Optimized`,
      subtext: `Improved website visibility on search engines`,
      icon: "fileSearch",
    },
    {
      text: `Highly Performant`,
      subtext: `Fast loading times and smooth performance`,
      icon: "barChart",
    },
    {
      text: `Easy Customizability`,
      subtext: `Change your content and layout with little effort`,
      icon: "settings",
    },
  ],
}
