import CompletedProjectPage from "@components/CompletedProjectPage";
import DashboardNavBar from "@components/DashboardNavBar";

const CompletedProject = () => {
  return (
    <main className="relative">
      <DashboardNavBar />
      <CompletedProjectPage />
    </main>
  );
};

export default CompletedProject;
