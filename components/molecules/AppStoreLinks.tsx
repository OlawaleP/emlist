import { FC } from "react";
import AppImage from "../atoms/AppImage";
import MenuLink from "../atoms/MenuLink";

const AppStoreLinks: FC = () => (
  <div className="flex justify-center">
    <MenuLink href="/">
      <AppImage
        src="/images/playstore.png"
        alt="Play Store"
        width={169}
        height={49}
        className="h-10"
      />
    </MenuLink>
    <MenuLink href="/">
      <AppImage
        src="/images/googleplay.png"
        alt="Google Play"
        width={200}
        height={55}
        className="h-10"
      />
    </MenuLink>
  </div>
);

export default AppStoreLinks;
