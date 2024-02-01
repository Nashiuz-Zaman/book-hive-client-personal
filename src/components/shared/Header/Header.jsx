// react
import PropTypes from "prop-types";

// react router
import { Link } from "react-router-dom";

// components
import BrandLogo from "./../BrandLogo/BrandLogo";
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import MobileNav from "./../MobileNav/MobileNav";
// import LinkBtn from "../LinkBtn/LinkBtn";
// import LoadingSpinner from "./../LoadingSpinner/LoadingSpinner";
import LargeScreenNav from "../LargeScreenNav/LargeScreenNav";
import Searchbox from "../Searchbox/Searchbox";

// hooks
// import useAuth from "./../../../hooks/useAuth";

// data
import logoPrimary from "./../../../assets/websiteLogo/logo-primary.webp";
import { navOptions } from "../../../uiData/navigationOptions";

const Header = ({ modifyClasses = "" }) => {
  // extra user from auth
  // const { profileData, appLoading } = useAuth();

  return (
    <header className={`pt-4 pb-elementGapMd ${modifyClasses}`}>
      <InnerContainer>
        <div className="flex justify-end mb-4 gap-4">
          <Link className="hover:text-black hover:underline" to={"/login"}>
            Login
          </Link>
          |
          <Link
            className="hover:text-black hover:underline"
            to={"/registration"}
          >
            Register Account
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-elementGapMd sm:gap-0 sm:grid-cols-2 items-center">
          {/* website logo */}
          <div className="justify-self-center sm:justify-self-start flex items-center gap-12">
            {/* mobile nav button and mobile nav menu */}
            <MobileNav />
            <BrandLogo
              imageSource={logoPrimary}
              imageModifyClasses="h-[3rem]"
            />
            <LargeScreenNav navOptions={navOptions} />
          </div>

          {/* auth related options login/logout etc */}
          <div className="justify-self-end">
            {/* loading Spinner */}
            {/* {appLoading && (
              <LoadingSpinner
                text="Checking User"
                modifyClasses="text-2xl pr-4 text-primary"
                modifyInnerContainerClasses="!flex-row"
              />
            )}

            {!appLoading && !profileData && (
              <LinkBtn text="Sign In" url="/login" />
            )} */}

            {/* if app is finished loading and user is truthy, show the userprofile */}
            {/* {!appLoading && profileData && (
              <LinkBtn text="Go to Dashboard" url="#" />
            )} */}

            <Searchbox placeholder="Search for books by title" />
          </div>
        </div>
      </InnerContainer>
    </header>
  );
};

Header.propTypes = {
  modifyClasses: PropTypes.string,
};

export default Header;
