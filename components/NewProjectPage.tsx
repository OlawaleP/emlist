import NewProjectContent from "./NewProjectContent";
import ProjectSummaryCards from "./ProjectSummaryCards";
import ProjectToggle from "./ProjectToggle";

const NewProjectPage = () => {
  return (
    <section className="py-28 padding-x">
      <ProjectSummaryCards />
      <ProjectToggle currentLink={1} />
      <NewProjectContent />
    </section>
  );
};

export default NewProjectPage;
