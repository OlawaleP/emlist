import Footer from "@components/Footer";
import MainNav from "@components/MainNav";
import MaterialImageCtn from "@components/MaterialImageCtn";
import NewsLetter from "@components/NewsLetter";
import ProductDescription from "@components/ProductDescription";
import ReviewOtherServices from "@components/ReviewOtherServices";
import ReviewProfile from "@components/ReviewProfile";
import ReviewSlider from "@components/ReviewSlider";
import SimilarServices from "@components/SimilarServices";
import React from "react";

const MaterialDetails = () => {
  return (
    <main className="relative">
      <MainNav />
      <ReviewProfile profile={false} />
      <MaterialImageCtn />
      <ProductDescription />
      <ReviewSlider />
      <ReviewOtherServices />
      <SimilarServices />
      <NewsLetter />
      <Footer />
    </main>
  );
};

export default MaterialDetails;
