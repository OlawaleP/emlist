import AllReviews from "@components/AllReviews";
import Footer from "@components/Footer";
import MainNav from "@components/MainNav";
import NewsLetter from "@components/NewsLetter";
import ReviewBar from "@components/ReviewBar";
import React from "react";

const page = () => {
  return (
    <main className="relative">
      {" "}
      <MainNav />
      <ReviewBar />
      <AllReviews />
      <NewsLetter />
      <Footer />
    </main>
  );
};

export default page;
