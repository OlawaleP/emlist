export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGN_UP: "/sign-up",
  SEARCH_SERVICE: "/catalog/services?",
  FIND_JOB: "/find-job",
  HIRE_EXPERT: "/hire-experts",
  BUY_MATERIALS: "/buy-materials",
  PRIVATE_EXPERT: "/expert/private-expert",
  JOIN_EXPERT: "/expert/register",
  LIST_NEW_JOB: "/dashboard/job/list-new-job",
  PLANNED_MAINTENANCE: "/dashboard/planned-maintenance",
  DASHBOARD_JOB: "/dashboard/job",
  GENERAL_BIDDABLE_JOB_DETAILS: (id: string) =>
    `/dashboard/job/info/biddable/${id}`,
  GENERAL_REGULAR_JOB_DETAILS: (id: string) =>
    `/dashboard/job/info/regular/${id}`,
  GENERAL_DIRECT_JOB_DETAILS: (id: string) =>
    `/dashboard/job/info/direct/${id}`,
  GENERAL_EXPERT_DETAILS: (id: string) => `/expert/info/${id}`,
  DASHBOARD_MATERIAL: `/dashboard/material`,
  GENERAL_MATERIAL_DETAILS: (id: string) => `/material/info/${id}`,
  CART: "/dashboard/cart",
} as const;
