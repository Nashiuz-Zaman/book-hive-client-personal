// react
import { useSelector, useDispatch } from "react-redux";
import {
  openNav,
  closeNav,
} from "../features/dashboardMobileNav/dashboardMobileNavSlice";

// backdrop slice methods
import { setOpen } from "../features/backdrop/backdropSlice";

const useDashboardMobileNav = () => {
  const { dashboardMobileNavOpen } = useSelector(
    (store) => store.dashboardMobileNav
  );
  const dispatch = useDispatch();

  const openDashboardMobileNav = () => {
    dispatch(openNav());
    dispatch(setOpen(true));
  };

  const closeDashboardMobileNav = () => {
    dispatch(closeNav());
    dispatch(setOpen(false));
  };

  return {
    dashboardMobileNavOpen,
    openDashboardMobileNav,
    closeDashboardMobileNav,
  };
};

export default useDashboardMobileNav;
