import JobCardSummary from "./JobCardSummary";
import JobToggle from "./JobToggle";
import NewJobContent from "./NewJobContent";

const NewJobPage = () => {
  return (
    <section className="py-28 padding-x">
      <JobCardSummary />
      <JobToggle currentLink={2} />
      <NewJobContent />
    </section>
  );
};

export default NewJobPage;
