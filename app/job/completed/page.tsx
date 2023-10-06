import CompletedJobPage from "@components/CompletedJobPage";
import DashboardNavBar from "@components/DashboardNavBar";

const CompletedJob = () => {
  return (
    <main className="relative">
      <DashboardNavBar />
      <CompletedJobPage />
    </main>
  );
};

export default CompletedJob;
