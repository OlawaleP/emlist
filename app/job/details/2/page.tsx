import DashboardNavBar from "@components/DashboardNavBar";
import JobDetailsContentTwo from "@components/JobDetailsContentTwo";
import React from "react";

const page = () => {
  return (
    <main className="relative">
      <DashboardNavBar />
      <JobDetailsContentTwo />
    </main>
  );
};

export default page;
