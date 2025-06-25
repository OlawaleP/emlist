import { useState } from "react";

export const useRegisterService = () => {
  const [services, setServices] = useState<string[]>([]);

  return {
    services,
    setServices,
  };
};
