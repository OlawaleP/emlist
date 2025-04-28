import { useToast } from "../hooks/useToast";

export const promiseErrorFunction = (error: any) => {
  const { showToast } = useToast();
  if (error?.response?.data?.message) {
    showToast({
      message: `${error?.response?.data?.message}`,
      type: "error",
      duration: 8000,
      autoClose: true,
    });
  } else if (error?.response?.data?.detail) {
    showToast({
      message: `${error?.response?.data?.detail}`,
      type: "error",
      duration: 8000,
      autoClose: true,
    });
  } else if (
    error?.response?.data?.errors &&
    error?.response?.data?.errors?.length > 0
  ) {
    showToast({
      message: `${error?.response?.data?.errors[0]}`,
      type: "error",
      duration: 8000,
      autoClose: true,
    });
  } else {
    showToast({
      message: `Internal Server Error! Contact support`,
      type: "error",
      duration: 8000,
      autoClose: true,
    });
  }
};
