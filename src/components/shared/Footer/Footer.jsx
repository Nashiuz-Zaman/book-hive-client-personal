// react
import PropTypes from "prop-types";

// react router imports
import { Link } from "react-router-dom";

// components
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import BrandLogo from "../BrandLogo/BrandLogo";
import ListOfLinks from "../ListOfLinks/ListOfLinks";

// react icons
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

// data
import logoPrimary from "./../../../assets/websiteLogo/logo-primary.webp";
import { footerOptions, currentYear } from "../../../uiData/footerData";
import { addressData } from "../../../uiData/addressData";

const Footer = () => {
  const socialLinksClasses =
    "text-xl hover:text-primary transition-all duration-150 cursor-pointer";
  const paymentMethodClasses =
    "text-primary hover:text-primary transition-all duration-150 cursor-pointer";

  return (
    <footer className="mt-auto pt-sectionGapMd border-t border-lightBorder">
      <InnerContainer>
        {/* Join Our Newsletter */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl text-center">Join Our Newsletter</h1>
            <p className="text-red-400 text-center">
              Signup to be the first hear about exclusive deal special offers
              and upcoming collections
            </p>
          </div>

          <form className="space-x-4 text-center">
            <input
              className="border-[1px] border-blackLight rounded-default p-4 w-[250px]  md:w-1/4 lg:w-1/4 py-3"
              id="newsletter"
              type="text"
              placeholder="Enter email for weekly newsLetter"
            />
            <button className="bg-blackLight border border-blackLight hover:bg-textPrimary hover:border-textPrimary text-white  w-max transition-all duration-default rounded-default text-center px-6 py-3 3xl:text-xl 2xl:py-3 ">
              Subscribe
            </button>
          </form>
        </div>

        <div className="mb-14 grid grid-cols-1 text-center lg:text-justify md:grid-cols-5 pt-sectionGapMd ">
          <div>
            {/* website logo */}
            <BrandLogo
              imageSource={logoPrimary}
              modifyClasses="mb-6 w-full mx-auto lg:mx-0  "
            />

            {/* address and links */}
            {addressData.addressDetails.map((data, i) => {
              return <h1 key={i}>{data}</h1>;
            })}
            <div className="mt-2">
              <h1>{addressData.phone}</h1>
              <h1>{addressData.email}</h1>
            </div>
            {/* social media icons */}
            <div>
              {/* social media icons */}
              <div className="text-2xl flex justify-center lg:justify-start items-center   text-center  gap-4 mt-6">
                <a
                  className={socialLinksClasses}
                  href="https://www.facebook.com"
                >
                  <FaFacebook />
                </a>
                <a
                  className={socialLinksClasses}
                  href="https://www.twitter.com"
                >
                  <FaXTwitter />
                </a>
                <a
                  className={socialLinksClasses}
                  href="https://www.instagram.com"
                >
                  <FaInstagram />
                </a>
                <a
                  className={socialLinksClasses}
                  href="https://www.youtube.com"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* list of links */}
          {footerOptions?.map((option) => {
            return (
              <div key={option.id}>
                <h3 className="mb-6 mt-3 font-bold">{option.headingText}</h3>
                <ListOfLinks
                  modifyClasses="gap-2 lg:gap-0"
                  linksData={option.options}
                />
              </div>
            );
          })}
        </div>
      </InnerContainer>
      {/* divider */}

      <hr />
      {/* copyright part */}
      <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center text-center ">
        <div>
          <small className="2xl:text-lg">
            &copy; {currentYear} Bookhive, All rights reserved
          </small>
        </div>

        <div className="text-2xl flex items-center gap-4 mt-2">
          <Link className={paymentMethodClasses}>
            <img src="https://i.ibb.co/X3Y21Vs/Discover-logo.png" />
          </Link>
          <Link className={paymentMethodClasses}>
            <img src="https://i.ibb.co/g6WjCNK/maste-Card.png" />
          </Link>
          <Link className={paymentMethodClasses}>
            <img src="https://i.ibb.co/7r1P1PL/paypal.png" />
          </Link>
          <Link className={paymentMethodClasses}>
            <img src="https://i.ibb.co/Jcjs9hh/skrill.png" />
          </Link>
          <Link className={paymentMethodClasses}>
            <img src="https://i.ibb.co/x1d7dPy/visa.png" />
          </Link>
        </div>

        <div>
          <select className="border py-2 mt-2 lg:mt-0">
            <option value="English">English (United States)</option>
            <option value="Bangla">Bangla</option>
          </select>
        </div>
        <div className="mt-2 lg:mt-0">
          <select className="border py-2 px-[62px] lg:px-0">
            <option value="USD">USD</option>
            <option value="BDT">BDT</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  addressData: PropTypes.object,
};

export default Footer;
