import CompareAbout from "@components/CompareAbout";
import CompareCards from "@components/CompareCards";
import CompareCertification from "@components/CompareCertification";
import CompareLevels from "@components/CompareLevels";
import CompareService from "@components/CompareService";
import CompareViewButton from "@components/CompareViewButton";
import Footer from "@components/Footer";
import MainNav from "@components/MainNav";
import NewsLetter from "@components/NewsLetter";

const ComparePage = () => {
  return (
    <main className="relative">
      <MainNav />
      <CompareCards />
      <CompareLevels title="Level" figure={1} />
      <CompareAbout />
      <CompareLevels title="Ratings" figure={12} />
      <CompareLevels title="Reviews" figure={20} />
      <CompareService title="Service" description="Painter" />
      <CompareLevels title="Job completed" figure={23} />
      <CompareService title="Notice period" description="4days" />
      <CompareService title="Location" description="Lagos, Nigeria" />
      <CompareService title="Language" description="English, French" />
      <CompareService title="Insurance" description="Property Insurance" />
      <CompareCertification
        title="Certification"
        firstList="Association of Nigeria."
        secondList="1234567890"
      />
      <CompareCertification
        title="Membership"
        firstList="Association of Nigeria."
        secondList="Club President"
      />
      <CompareViewButton />
      <NewsLetter />
      <Footer />
    </main>
  );
};

export default ComparePage;
