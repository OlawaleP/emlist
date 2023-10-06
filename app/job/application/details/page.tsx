import ApplicationDetailsContent from "@components/ApplicationDetailsContent";
import DashboardNavBar from "@components/DashboardNavBar";
import Link from "next/link";

const page = () => {
  return (
    <main className="relative">
      <DashboardNavBar />
      <ApplicationDetailsContent />
    </main>
  );
};

export default page;
