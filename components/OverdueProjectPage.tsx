import OverdueProjectContent from "./OverdueProjectContent";
import ProjectSummaryCards from "./ProjectSummaryCards";
import ProjectToggle from "./ProjectToggle";

const OverdueProjectPage = () => {
  return (
    <section className="py-28 padding-x">
      <ProjectSummaryCards />
      <ProjectToggle currentLink={3} />
      <OverdueProjectContent />
    </section>
  );
};

export default OverdueProjectPage;
