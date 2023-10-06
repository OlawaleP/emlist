import ActiveProjectContent from "./ActiveProjectContent";
import ProjectSummaryCards from "./ProjectSummaryCards";
import ProjectToggle from "./ProjectToggle";

const ActiveProjectPage = () => {
  return (
    <section className="py-28 padding-x">
      <ProjectSummaryCards />
      <ProjectToggle currentLink={2} />
      <ActiveProjectContent />
    </section>
  );
};

export default ActiveProjectPage;
