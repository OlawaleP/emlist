import DownloadApp from "@components/DownloadApp";
import EmilistExperts from "@components/EmilistExperts";
import ExploreServices from "@components/ExploreServices";
import Footer from "@components/Footer";
import Header from "@components/Header";
import MainNav from "@components/MainNav";
import NewsLetter from "@components/NewsLetter";
import PopularMaterial from "@components/PopularMaterial";
import PopularService from "@components/PopularService";

const FindMaterials = () => {
  return (
    <main className="relative">
      <MainNav />
      <div className="">
        <Header currentLink={2} />
        <PopularService />
        <PopularMaterial bgColor={"bg-[#d9d9d933]"} />
        <ExploreServices />
        <EmilistExperts />
        <DownloadApp />
        <NewsLetter />
        <Footer />
      </div>
    </main>
  );
};

export default FindMaterials;
