import CatalogSearch from "@components/CatalogSearch";
import CompareSearch from "@components/CompareSearch";
import Footer from "@components/Footer";
import MainNav from "@components/MainNav";
import MaterialSearchResult from "@components/MaterialSearchResult";
import NewsLetter from "@components/NewsLetter";

const page = () => {
  return (
    <main className="relative">
      <MainNav />
      <CatalogSearch title="Painter" />
      <CompareSearch />
      <MaterialSearchResult
        initialMin={2500}
        initialMax={7500}
        min={0}
        max={10000}
        step={100}
        priceCap={1000}
      />
      <NewsLetter />
      <Footer />
    </main>
  );
};

export default page;
