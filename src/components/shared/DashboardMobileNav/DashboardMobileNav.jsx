// react
import PropTypes from "prop-types";

// react router
import { NavLink } from "react-router-dom";

// react hashed link
import { HashLink } from "react-router-hash-link";

// components
import MobileMenuCloseBtn from "../MobileMenuCloseBtn/MobileMenuCloseBtn";
import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn";
import ButtonBtn from "./../ButtonBtn/ButtonBtn";

// hook
import useDashboardMobileNav from "../../../hooks/useDashboardMobileNav";
import useEscapeClose from "../../../hooks/useEscapeClose";
import useAuth from "../../../hooks/useAuth";

const DashboardMobileNav = ({
  navOptions,
  modifyClasses = "",
  MenuBtnModifyClasses = "",
}) => {
  // extract mobile nav functionality
  const {
    dashboardMobileNavOpen,
    openDashboardMobileNav,
    closeDashboardMobileNav,
  } = useDashboardMobileNav();
  const { profileData, logout } = useAuth();

  // add escape key close functionality
  useEscapeClose(closeDashboardMobileNav);

  // one single place for the link classes
  const linkClasses =
    "leading-[normal] px-2 py-1 rounded-default text-white hover:text-primaryLightest font-medium transition-all duration-200";

  return (
    //  mobile nav starts here
    <div className={`${modifyClasses}`}>
      <MobileMenuBtn
        modifyClasses={MenuBtnModifyClasses}
        openNavFunction={openDashboardMobileNav}
      />

      <nav
        className={`block h-screen fixed top-0 left-0 w-full sm:w-[50%] md:w-[40%] lg:w-[35%] 2xl:w-[20%] -translate-x-full origin-center transition-all duration-default z-40 ${
          dashboardMobileNavOpen ? "!translate-x-0" : ""
        } p-8 bg-blackLight`}
      >
        {/* X cross button to close nav */}
        <MobileMenuCloseBtn clickHandler={closeDashboardMobileNav} />

        {/* heading */}
        <h2 className="text-lg md:text-3xl text-white font-semibold">
          Welcome {profileData?.name}
        </h2>

        {/* regular part */}
        <ul className="flex flex-col gap-3">
          {/* this part will be always shown */}
          {navOptions &&
            navOptions.map((option) => {
              // if hashed link present then return this part, if not then return the next part

              // hashed link
              if (option.hashed) {
                return (
                  <li key={option.id} onClick={closeDashboardMobileNav}>
                    <HashLink className={linkClasses} to={option.url}>
                      {option.text}
                    </HashLink>
                  </li>
                );
              }

              // normal link
              return (
                <li key={option.id} onClick={closeDashboardMobileNav}>
                  <NavLink className={linkClasses} to={option.url}>
                    {option.text}
                  </NavLink>
                </li>
              );
            })}
        </ul>
        {profileData && (
          <ButtonBtn
            text="Sign Out"
            colorTheme="outlined"
            onClickFunction={() => {
              logout();
              closeDashboardMobileNav();
            }}
            modifyClasses="mt-elementGapSm"
          />
        )}
      </nav>
    </div>
  );
};

DashboardMobileNav.propTypes = {
  navOptions: PropTypes.array,
  modifyClasses: PropTypes.string,
  MenuBtnModifyClasses: PropTypes.string,
};

export default DashboardMobileNav;
