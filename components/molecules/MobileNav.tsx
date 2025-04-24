import CartIcon from "../atoms/CartIcon";
import HamburgerIcon from "../atoms/HamburgerIcon";

interface MobileNavProps {
  isAuthenticated: boolean;
  toggle: () => void;
}

const MobileNav = ({ isAuthenticated, toggle }: MobileNavProps) => (
  <div className="flex items-center gap-4 lg:hidden">
    {isAuthenticated && <CartIcon />}
    <HamburgerIcon toggle={toggle} />
  </div>
);

export default MobileNav;
