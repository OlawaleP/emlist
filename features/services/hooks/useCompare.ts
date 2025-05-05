import { useContext } from "react";
import { useRouter } from "next/navigation";

import { AuthContext } from "@/lib/context/AuthState";
import { axiosInstance } from "@/lib/api/axiosInstance";
import { CompareContext } from "@/lib/context/CompareState";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { ROUTES } from "@/lib/constants/routes";
import { useToast } from "@/lib/hooks/useToast";

export const useCompare = () => {
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);
  const { reFetchComparedBusinesses } = useContext(CompareContext);

  const { showToast } = useToast();

  const compare = async (serviceId: string) => {
    if (!currentUser) {
      return router.push(ROUTES?.LOGIN);
    }

    try {
      await axiosInstance.patch(`/business/compare-business/${serviceId}`);
      showToast({
        message: "Business successfully added to compare!",
        type: "success",
        autoClose: false,
      });
      reFetchComparedBusinesses();
    } catch (error) {
      console.log("error adding business to compare", error);
      promiseErrorFunction(error, showToast);
    }
  };

  return {
    compare,
  };
};
