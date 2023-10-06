import JobCardSummary from "./JobCardSummary";
import JobToggle from "./JobToggle";
import LeadJobContent from "./LeadJobContent";

const LeadJobPage = () => {
  return (
    <section className="py-28 padding-x">
      <JobCardSummary />
      <JobToggle currentLink={1} />
      <LeadJobContent />
    </section>
  );
};

export default LeadJobPage;
