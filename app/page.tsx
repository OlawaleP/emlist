import HeroSection from "@/components/organisms/HeroSection";
import HomeFeatureLinks from "@/components/organisms/HomeFeatureLinks";
import PopularExperts from "@/components/organisms/PopularExperts";
import MainLayout from "@/components/templates/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <HomeFeatureLinks />
      <PopularExperts />
      <h1 className="font-bold min-h-screen">Hello world</h1>
      <h1 className="font-bold min-h-screen">Hello world</h1>
      <h1 className="font-bold min-h-screen">Hello world</h1>
      <h1 className="font-bold min-h-screen">Hello world</h1>
      <h1 className="font-bold min-h-screen">Hello world</h1>
    </MainLayout>
  );
}
