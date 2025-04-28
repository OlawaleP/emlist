import { LayoutType } from "@/types";

import MainNav from "../organisms/MainNav";
import NewsLetter from "../organisms/NewsLetter";

const MainLayout = ({ children }: LayoutType) => {
  return (
    <div className="min-h-screen w-full relative">
      <MainNav />
      <main>{children}</main>
      <NewsLetter />
    </div>
  );
};

export default MainLayout;
