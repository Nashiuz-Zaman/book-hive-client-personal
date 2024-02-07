// react
import PropTypes from "prop-types";

// components
import MobileNav from "./../MobileNav/MobileNav";
import UserProfile from "./../UserProfile/UserProfile";

// hooks
import useAuth from "./../../../hooks/useAuth";

const AdminDashboardHeader = ({ modifyClasses = "" }) => {
  // extra user from auth
  const { profileData, appLoading, logout } = useAuth();

  return (
    <header
      className={`px-elementGapMd py-elementGapSm bg-blackLight ${modifyClasses}`}
    >
      <div className="flex items-center justify-between">
        {/* website logo */}
        <div className="flex gap-4 items-center sm:flex-row sm:gap-6">
          <MobileNav modifyClasses="block xl:hidden" />

          <h1 className="text-lg md:text-3xl text-white font-semibold">
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
