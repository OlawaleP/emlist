import DashboardNavBar from "@components/DashboardNavBar";
import NewJobPage from "@components/NewJobPage";
import React from "react";

const page = () => {
  return (
    <main className="relative">
      <DashboardNavBar />
      <NewJobPage />
    </main>
  );
};

export default page;
