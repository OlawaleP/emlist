import { useSearchParams } from "next/navigation";
import React from "react";

const ServiceCatalog = () => {
  const searchParams = useSearchParams();

  const service = searchParams.get("q");
  const locationQuery = searchParams.get("location");
  
  return <div>ServiceCatalog</div>;
};

export default ServiceCatalog;
