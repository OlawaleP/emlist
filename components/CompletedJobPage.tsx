import CompletedJobContent from "./CompletedJobContent";
import JobCardSummary from "./JobCardSummary";
import JobToggle from "./JobToggle";

const CompletedJobPage = () => {
  return (
    <section className="py-28 padding-x">
      <JobCardSummary />
      <JobToggle currentLink={6} />
      <CompletedJobContent />
    </section>
  );
};

export default CompletedJobPage;
