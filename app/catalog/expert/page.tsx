import CatalogSearch from "@components/CatalogSearch";
import CompareSearch from "@components/CompareSearch";
import Footer from "@components/Footer";
import MainNav from "@components/MainNav";
import NewsLetter from "@components/NewsLetter";
import SearchResults from "@components/SearchResults";

const Catalog = () => {
  return (
    <main className="relative">
      <MainNav />
      <CatalogSearch title="Painter" />
      <CompareSearch />
      <SearchResults
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

export default Catalog;
