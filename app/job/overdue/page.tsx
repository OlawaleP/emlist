import DashboardNavBar from "@components/DashboardNavBar";
import OverdueJobPage from "@components/OverdueJobPage";

const OverdueJob = () => {
  return (
    <main className="relative">
      <DashboardNavBar />
      <OverdueJobPage />
    </main>
  );
};

export default OverdueJob;
