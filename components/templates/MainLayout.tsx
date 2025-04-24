import { LayoutType } from "@/types";

import MainNav from "../organisms/MainNav";

const MainLayout = ({ children }: LayoutType) => {
  return (
    <div className="min-h-screen w-full relative">
      <MainNav />
      {children}
    </div>
  );
};

export default MainLayout;
