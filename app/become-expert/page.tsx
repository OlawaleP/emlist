import ExpertBanner from "@components/ExpertBanner";
import ExpertOptions from "@components/ExpertOptions";
import Footer from "@components/Footer";
import MainNav from "@components/MainNav";
import NewsLetter from "@components/NewsLetter";
import React from "react";

const BecomeExpert = () => {
  return (
    <main className="relative">
      <MainNav />
      <ExpertBanner />
      <ExpertOptions />
      <NewsLetter />
      <Footer />
    </main>
  );
};

export default BecomeExpert;
