export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGN_UP: "/sign-up",
  JOIN_EXPERT: "/expert/register",
  LIST_NEW_JOB: "/dashboard/job/list-new-job",
  DASHBOARD_JOB: "/dashboard/job",
  PRODUCT_DETAILS: (id: string) => `/products/${id}`,
  CART: "/dashboard/cart",
} as const;
