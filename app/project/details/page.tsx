import DashboardNavBar from "@components/DashboardNavBar";
import ProjectDetailsOne from "@components/ProjectDetailsOne";

const page = () => {
  return (
    <main className="relative">
      <DashboardNavBar />
      <ProjectDetailsOne />
    </main>
  );
};

export default page;
