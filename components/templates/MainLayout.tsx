import { LayoutType } from "@/lib/types";

import Navbar from "../organisms/Navbar";

const MainLayout = ({ children }: LayoutType) => {
  return (
    <div className="min-h-screen w-full relative">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
