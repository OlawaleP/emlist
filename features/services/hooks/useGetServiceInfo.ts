import { useContext, useEffect, useState } from "react";

import { axiosInstance } from "@/lib/api/axiosInstance";
import { AuthContext } from "@/lib/context/AuthState";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { useToast } from "@/lib/hooks/useToast";

export const useGetServiceInfo = (serviceId: string) => {
  const { showToast } = useToast();
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser?._id;

  const [loading, setLoading] = useState<boolean>(true);
  const [serviceInfo, setServiceInfo] = useState<any>({});

  const getServiceInfo = async () => {
    let url = `/business/fetch-single-business/${serviceId}${
      userId ? `?userId=${userId}` : ""
    }`;
    try {
      const { data } = await axiosInstance.get(url);
      setServiceInfo(data?.data);
    } catch (error: any) {
      console.log("error getting service info", error);
      promiseErrorFunction(error, showToast);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getServiceInfo();
  }, [serviceId]);

  return {
    loading,
    refetchServiceInfo: getServiceInfo,
    serviceInfo,
  };
};
