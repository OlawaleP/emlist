import IconOne from "../../public/icons/Group 26932.svg";
import IconTwo from "../../public/icons/Group 26932 (1).svg";
import IconThree from "../../public/icons/Group 26932 (2).svg";
import IconFour from "../../public/icons/Group 26932 (3).svg";
import IconFive from "../../public/icons/Group 26932 (4).svg";
import { ROUTES } from "./routes";

export const category = [
  "Agriculture",
  "Artisan",
  "Construction",
  "Education",
  "Entertainment",
  "Event Management",
  "Food/restaurant",
  "Information Management",
  "medical",
  "Manufacturing",
  "minning",
  "professional service",
  "real estate",
  "utility",
  "Waste Management",
];

export const serviceList = [
  "Project Manager",
  "Site Supervisor",
  "Architect",
  "Civil Engineer",
  "Structural Engineer",
  "Electrician",
  "Bricklayer",
  "Plumber",
  "Carpenter",
  "Mason",
  "Painter",
  "Welder",
  "Steel Fixer",
  "Crane Operator",
  "Laborer",
  "Surveyor",
  "Safety Officer",
  "Others",
];

export const mainCategoriesLinks = [
  {
    id: 1,
    name: "Hire Workers",
    link: ROUTES?.HIRE_EXPERT,
    icon: IconOne,
  },
  {
    id: 2,
    name: "Job Opportunities",
    link: ROUTES?.FIND_JOB,
    icon: IconTwo,
  },
  {
    id: 3,
    name: "Buy Materials",
    link: ROUTES?.BUY_MATERIALS,
    icon: IconThree,
  },
  {
    id: 4,
    name: "Customized Service Request",
    link: ROUTES?.PRIVATE_EXPERT,
    icon: IconFour,
  },
  {
    id: 5,
    name: "Planned Maintenance",
    link: ROUTES?.PLANNED_MAINTENANCE,
    icon: IconFive,
  },
];
