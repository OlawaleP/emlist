import DashboardNavBar from "@components/DashboardNavBar";
import OverdueProjectPage from "@components/OverdueProjectPage";

const OverdueProject = () => {
  return (
    <main className="relative">
      <DashboardNavBar />
      <OverdueProjectPage />
    </main>
  );
};

export default OverdueProject;
