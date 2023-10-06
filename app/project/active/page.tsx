import ActiveProjectPage from "@components/ActiveProjectPage";
import DashboardNavBar from "@components/DashboardNavBar";

const ActiveProjects = () => {
  return (
    <main className="relative">
      <DashboardNavBar />
      <ActiveProjectPage />
    </main>
  );
};

export default ActiveProjects;
