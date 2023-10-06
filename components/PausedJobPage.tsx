import JobCardSummary from "./JobCardSummary";
import JobToggle from "./JobToggle";
import PausedJobContent from "./PausedJobContent";

const PausedJobPage = () => {
  return (
    <section className="py-28 padding-x">
      <JobCardSummary />
      <JobToggle currentLink={5} />
      <PausedJobContent />
    </section>
  );
};

export default PausedJobPage;
