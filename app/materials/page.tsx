import DownloadApp from "@components/DownloadApp";
import EmilistExperts from "@components/EmilistExperts";
import Footer from "@components/Footer";
import Header from "@components/Header";
import MainNav from "@components/MainNav";
import NewsLetter from "@components/NewsLetter";
import PopularMaterial from "@components/PopularMaterial";
import React from "react";

const FindMaterials = () => {
  return (
    <main className="relative">
      <MainNav />
      <div className="">
        <Header currentLink={3} />

        <PopularMaterial bgColor={"bg-[#fff]"} />

        <EmilistExperts />
        <DownloadApp />
        <NewsLetter />
        <Footer />
      </div>
    </main>
  );
};

export default FindMaterials;
