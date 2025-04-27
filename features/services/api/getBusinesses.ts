import { axiosInstance } from "@/lib/api/axiosInstance";

interface FetchBusinessesParams {
  page: number;
  limit?: number;
  userId?: string;
  search?: string;
}

export const getBusinesses = async ({
  page,
  limit = 10,
  userId = "",
  search = "",
}: FetchBusinessesParams) => {
  try {
    let url = `/business/fetch-all-business?page=${page}&limit=${limit}${
      userId ? `&userId=${userId}` : ""
    }`;
    if (search) {
      url += `&search=${search}`;
    }

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    console.error("Error fetching businesses:", error);
    throw error;
  }
};
