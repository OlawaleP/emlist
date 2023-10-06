import ActiveJobContent from "./ActiveJobContent";
import JobCardSummary from "./JobCardSummary";
import JobToggle from "./JobToggle";

const ActiveJobPage = () => {
  return (
    <section className="py-28 padding-x">
      <JobCardSummary />
      <JobToggle currentLink={3} />
      <ActiveJobContent />
    </section>
  );
};

export default ActiveJobPage;
