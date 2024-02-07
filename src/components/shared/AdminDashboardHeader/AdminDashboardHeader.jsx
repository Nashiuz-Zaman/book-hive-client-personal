// react
import PropTypes from "prop-types";

// components
import DashboardMobileNav from "../DashboardMobileNav/DashboardMobileNav";
import UserProfile from "./../UserProfile/UserProfile";

// hooks
import useAuth from "./../../../hooks/useAuth";

// data
import { adminDashboardNavOptions } from "../../../uiData/navigationOptions";

const AdminDashboardHeader = ({ modifyClasses = "" }) => {
  // extra user from auth
  const { profileData, appLoading, logout } = useAuth();

  return (
    <header
      className={`px-elementGapSm xsm:px-elementGapMd py-elementGapSm bg-blackLight ${modifyClasses}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center sm:flex-row sm:gap-6">
          <DashboardMobileNav
            navOptions={adminDashboardNavOptions}
            modifyClasses="block xl:hidden"
            MenuBtnModifyClasses="text-white"
          />

          <h1 className="text-lg xsm:text-2xl md:text-3xl text-white font-semibold">
            Welcome {profileData?.name}
          </h1>
        </div>

        {/* if app is finished loading and user is truthy, show the userprofile */}
        {!appLoading && profileData && (
          <UserProfile profile={profileData} logoutFunction={logout} />
        )}
      </div>
    </header>
  );
};

AdminDashboardHeader.propTypes = {
  modifyClasses: PropTypes.string,
};

export default AdminDashboardHeader;
