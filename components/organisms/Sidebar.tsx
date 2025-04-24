import { useContext } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { AuthContext } from "@/lib/context/AuthState";
import { ROUTES } from "@/lib/constants/routes";
import { useLogout } from "@/features/auth/hooks/useLogout";

import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";

const Sidebar = ({ toggle }: { toggle: () => void }) => {
  const { logoutUser } = useLogout();
  const { currentUser } = useContext(AuthContext);

  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="w-full h-full min-h-screen bg-part-transparent absolute z-50 top-0 bottom-0 left-0 right-0 flex justify-end"
    >
      <AnimatePresence>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          exit={{ x: 100 }}
          transition={{ duration: 0.4 }}
          className="max-w-96 sm:w-full w-[90%] bg-white h-full py-6 padding-ctn"
        >
          <div className="flex-c-b">
            <Logo />
            <button className="block float-end text-2xl" onClick={toggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col text-gray-600 pt-12 gap-2">
            <li className="border-b-1 py-2">
              <NavLink href={ROUTES.JOIN_EXPERT}>Join as Expert</NavLink>
            </li>
            <li className="border-b-1 py-2">
              <NavLink href={ROUTES.LIST_NEW_JOB}>List New Job</NavLink>
            </li>
            {currentUser ? (
              <>
                <li className="border-b-1 py-2">
                  <NavLink href={ROUTES?.DASHBOARD_JOB}>Dashboard</NavLink>
                </li>
                <button
                  className="font-medium px-5 sm:py-2 py-1 home-nav max-sm:text-sm flex-c gap-2 text-red-500 "
                  onClick={logoutUser}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                    />
                  </svg>
                  Logout
                </button>
              </>
            ) : (
              <>
                <li className="border-b-1 py-2">
                  <NavLink href={ROUTES?.LOGIN}>Login</NavLink>
                </li>
                <li className="border-b-1 py-2">
                  <NavLink href={ROUTES?.SIGN_UP}>Sign up</NavLink>
                </li>
              </>
            )}
          </ul>
        </motion.div>
      </AnimatePresence>
    </motion.aside>
  );
};

export default Sidebar;
