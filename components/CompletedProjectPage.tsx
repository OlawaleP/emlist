import CompletedProjectContent from "./CompletedProjectContent";
import ProjectSummaryCards from "./ProjectSummaryCards";
import ProjectToggle from "./ProjectToggle";

const CompletedProjectPage = () => {
  return (
    <section className="py-28 padding-x">
      <ProjectSummaryCards />
      <ProjectToggle currentLink={5} />
      <CompletedProjectContent />
    </section>
  );
};

export default CompletedProjectPage;
