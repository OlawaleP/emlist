import { axiosInstance } from "@/lib/api/axiosInstance";

interface FetchBusinessesParams {
  page: number;
  limit?: number;
  userId?: string;
  search?: string;
  serviceQuery?: string;
  locationQuery?: string;
  location?: string;
  noticePeriod?: number;
  noOfReviews?: string;
  rating?: string;
  expertType?: string;
}

export const getBusinesses = async ({
  page,
  limit = 10,
  userId = "",
  search = "",
  serviceQuery = "",
  location = "",
  locationQuery = "",
  noticePeriod,
  noOfReviews,
  rating,
  expertType,
}: FetchBusinessesParams) => {
  try {
    let url = `/business/fetch-all-business?page=${page}&limit=${limit}${
      userId ? `&userId=${userId}` : ""
    }`;
    if (search) {
      url += `&search=${search}`;
    } else if (serviceQuery) {
      url += `&search=${serviceQuery}`;
    }
    // if (minValue) {
    //   url += `&startPriceRange[0]=${minValue}`;
    // }
    // if (maxValue) {
    //   url += `&startPriceRange[1]=${maxValue}`;
    // }
    if (location) {
      url += `&location=${location}`;
    } else if (locationQuery) {
      url += `&location=${locationQuery}`;
    }
    if (noticePeriod) {
      url += `&noticePeriod=${noticePeriod}`;
    }
    if (noOfReviews) {
      url += `&minReviews=${noOfReviews}`;
    }
    if (rating) {
      url += `&minRating=${rating}`;
    }
    if (expertType) {
      url += `&expertType=${expertType}`;
    }

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    console.error("Error fetching businesses:", error);
    throw error;
  }
};
