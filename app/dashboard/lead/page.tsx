import DashboardMainBody from "@components/DashboardMainBody";
import DashboardNavBar from "@components/DashboardNavBar";

const page = () => {
  return (
    <main className="relative">
      <DashboardNavBar />
      <DashboardMainBody currentLink={4} />
    </main>
  );
};

export default page;
