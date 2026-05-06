import { HeroSection } from '@/components/landing/HeroSection';
import { AppDownloadSection } from '@/components/landing/AppDownloadSection';
import { CategoriesSection } from '@/components/landing/CategoriesSection';
import { DeliveryBanner } from '@/components/landing/DeliveryBanner';
import { PromotionsSection } from '@/components/landing/PromotionsSection';
import { RestaurantsCounter } from '@/components/landing/RestaurantsCounter';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <DeliveryBanner />
      <AppDownloadSection />
      <PromotionsSection />
      <RestaurantsCounter />
    </>
  );
}
