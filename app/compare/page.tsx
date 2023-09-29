import CompareCards from "@components/CompareCards";
import Footer from "@components/Footer";
import MainNav from "@components/MainNav";
import NewsLetter from "@components/NewsLetter";

const ComparePage = () => {
  return (
    <main className="relative">
      <MainNav />
      <CompareCards />
      <NewsLetter />
      <Footer />
    </main>
  );
};

export default ComparePage;
