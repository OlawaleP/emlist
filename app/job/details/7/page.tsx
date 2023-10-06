import DashboardNavBar from "@components/DashboardNavBar";
import JobDetailsContentSeven from "@components/JobDetailsContentSeven";
import React from "react";

const page = () => {
  return (
    <main className="relative">
      <DashboardNavBar />
      <JobDetailsContentSeven />
    </main>
  );
};

export default page;
