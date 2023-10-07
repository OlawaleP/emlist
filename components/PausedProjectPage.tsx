import ProjectSummaryCards from "./ProjectSummaryCards";
import ProjectToggle from "./ProjectToggle";
import PausedProjectContent from "./PausedProjectContent";

const PausedProjectPage = () => {
  return (
    <section className="py-28 padding-x">
      <ProjectSummaryCards />
      <ProjectToggle currentLink={4} />
      <PausedProjectContent />
    </section>
  );
};

export default PausedProjectPage;
