// react
import PropTypes from "prop-types";

// component
import LinkBtn from "../LinkBtn/LinkBtn";

function BannerText({ heading }) {
  return (
    <div className="w-full h-full flex items-center text-center lg:text-left">
      <div className="w-full">
        {/* welcome text */}
        <p className="text-sm xsm:w-[80%] md:w-[60%] lg:w-full mx-auto font-bold text-gray-400 uppercase mb-2">
          The BookHive Editors&apos;
        </p>

        {/* heading */}
        <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl 3xl:text-6xl mb-6">
          {heading}
        </h1>

        {/* button */}
        <div className="flex flex-col sm:flex-row gap-2 justify-center items-center lg:flex-col lg:items-start xl:flex-row xl:justify-start lg:gap-2 3xl:gap-3">
          <LinkBtn colorTheme="black" text="See More" url="/task-management" />
        </div>
      </div>
    </div>
  );
}

BannerText.propTypes = {
  heading: PropTypes.node,
};

export default BannerText;
