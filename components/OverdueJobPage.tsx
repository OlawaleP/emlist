import JobCardSummary from "./JobCardSummary";
import JobToggle from "./JobToggle";
import OverdueJobContent from "./OverdueJobContent";

const OverdueJobPage = () => {
  return (
    <section className="py-28 padding-x">
      <JobCardSummary />
      <JobToggle currentLink={4} />
      <OverdueJobContent />
    </section>
  );
};

export default OverdueJobPage;
