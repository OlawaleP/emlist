import DashboardNavBar from "@components/DashboardNavBar";
import ServiceTargetContent from "@components/ServiceTargetContent";

const page = () => {
  return (
    <main className="relative">
      <DashboardNavBar />
      <ServiceTargetContent />
    </main>
  );
};

export default page;
