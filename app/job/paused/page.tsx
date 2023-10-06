import DashboardNavBar from "@components/DashboardNavBar";
import PausedJobPage from "@components/PausedJobPage";

const page = () => {
  return (
    <main className="relative">
      <DashboardNavBar />
      <PausedJobPage />
    </main>
  );
};

export default page;
