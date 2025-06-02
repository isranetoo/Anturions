import HeroSection from "../components/HeroSection";
import InfoCards from "../components/InfoCards";
import NewsletterSeparator from "../components/NewsletterSeparator";
import ProductList from "../components/ProductList";
import StrategySection from "../components/StrategySection";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <HeroSection />
      <InfoCards />
      <ProductList />
      <NewsletterSeparator />
      <StrategySection />
    </div>
  );
}
