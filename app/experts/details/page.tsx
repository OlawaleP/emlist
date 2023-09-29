import Footer from "@components/Footer";
import MainNav from "@components/MainNav";
import NewsLetter from "@components/NewsLetter";
import ReviewDescription from "@components/ReviewDescription";
import ReviewImageCtn from "@components/ReviewImageCtn";
import ReviewOtherServices from "@components/ReviewOtherServices";
import ReviewProfile from "@components/ReviewProfile";
import ReviewSlider from "@components/ReviewSlider";
import SimilarServices from "@components/SimilarServices";

const ReviewDetails = () => {
  return (
    <main className="relative">
      {" "}
      <MainNav />
      <ReviewProfile profile={true} />
      <ReviewImageCtn />
      <ReviewSlider />
      <ReviewDescription />
      <ReviewOtherServices />
      <SimilarServices />
      <NewsLetter />
      <Footer />
    </main>
  );
};

export default ReviewDetails;
