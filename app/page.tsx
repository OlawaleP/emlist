import HeroSection from "@/components/organisms/HeroSection";
import HomeFeatureLinks from "@/components/organisms/HomeFeatureLinks";
import PopularExperts from "@/components/organisms/PopularExperts";
import PopularMaterials from "@/components/organisms/PopularMaterials";
import MainLayout from "@/components/templates/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <HomeFeatureLinks />
      <PopularExperts />
      <PopularMaterials bgColor="bg-[#F7F7F7]" />
      <h1 className="font-bold min-h-screen">Hello world</h1>
      <h1 className="font-bold min-h-screen">Hello world</h1>
    </MainLayout>
  );
}
