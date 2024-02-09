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
import useAuth from "./../../../hooks/useAuth";

// data
import logoPrimary from "./../../../assets/websiteLogo/logo-primary.webp";
import { navOptions } from "../../../uiData/navigationOptions";

//cart icon
import { FiShoppingCart } from "react-icons/fi";

// redux
import { useSelector } from "react-redux";

const Header = ({ modifyClasses = "" }) => {
  const cartBooks = useSelector((state) => state.cart.addedItems);
  const { profileData } = useAuth();

  return (
    <header className={`pt-4 pb-elementGapMd ${modifyClasses}`}>
      <InnerContainer>
        <div className="flex justify-end mb-4 gap-4">
          {!profileData ? (
            <>
              {" "}
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
            </>
          ) : (
            <p>
              Logged in as{" "}
              <Link
                className="underline hover:text-black"
                to={profileData.role === "admin" ? "/admin/home" : "/user/home"}
              >
                {profileData.name}
              </Link>
            </p>
          )}
          |
          <Link className="hover:text-black hover:underline flex" to={"/cart"}>
            <FiShoppingCart />
            {cartBooks.length}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-elementGapMd sm:gap-0 sm:grid-cols-2 items-center">
          {/* website logo */}
          <div className="justify-self-center sm:justify-self-start flex items-center gap-12">
            {/* mobile nav button and mobile nav menu */}
            <MobileNav navOptions={navOptions} />
            <BrandLogo
              imageSource={logoPrimary}
              imageModifyClasses="h-[3rem]"
            />
            <LargeScreenNav navOptions={navOptions} />
          </div>

          <Searchbox placeholder="Search for books by title" />
        </div>
      </InnerContainer>
    </header>
  );
};

Header.propTypes = {
  modifyClasses: PropTypes.string,
};

export default Header;
