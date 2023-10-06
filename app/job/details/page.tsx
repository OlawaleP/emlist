import DashboardNavBar from "@components/DashboardNavBar";
import JobDetailsContentOne from "@components/JobDetailsContentOne";

const page = () => {
  return (
    <main className="relative">
      <DashboardNavBar />
      <JobDetailsContentOne />
    </main>
  );
};

export default page;
