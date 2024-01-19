import PropTypes from "prop-types";

// custom hook
import useCarousel1 from "./useCarousel1";

// react icons
import { PiCaretLeftBold } from "react-icons/pi";
import { PiCaretRightBold } from "react-icons/pi";

const Carousel1 = ({ imagesData, background = true, modifyClasses = "" }) => {
  const {
    goNextSlide,
    goPrevSlide,
    curSlide,
    prevSlide,
    nextSlide,
    lastSlide,
  } = useCarousel1(imagesData);

  // common styles
  const buttonStyles =
    "bg-black p-[0.4rem] 2xl:p-2 rounded-full transition-all duration-500";
  const caretStyles = "text-white text-lg 2xl:text-xl";

  return (
    <div
      className={`w-full aspect-[16/10] relative ${modifyClasses}`}
      style={{
        perspective: "1000px",
        perspectiveOrigin: "50% 12rem",
      }}
    >
      {/* background slides */}
      {background &&
        imagesData &&
        imagesData.map((imageData) => {
          const { id, imageSource } = imageData;

          return (
            <div
              key={id}
              style={{ background: `url(${imageSource})` }}
              className={`absolute w-full h-full -z-10 top-0 left-0 !bg-cover !bg-center duration-500 ${
                id === curSlide ? "opacity-100" : "opacity-0"
              }`}
            ></div>
          );
        })}

      {/* blur barrier */}
      {background && (
        <div className="absolute top-0 left-0 w-full h-full backdrop-blur-[8px]"></div>
      )}

      {/* forward slides */}
      {imagesData &&
        imagesData.map((imageData) => {
          const { id, imageSource } = imageData;

          return (
            <div
              key={id}
              style={{
                backfaceVisibility: "hidden",
                MozBackfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: `translateY(-50%) translateX(${
                  id === curSlide
                    ? "50%"
                    : id < curSlide
                    ? "0%"
                    : id > curSlide
                    ? `300%`
                    : "auto"
                }) rotateY(${
                  id === curSlide
                    ? "0deg"
                    : id > curSlide
                    ? "-60deg"
                    : id < curSlide
                    ? "60deg"
                    : "0"
                })`,
              }}
              className={`absolute bg-[rgba(0,0,0,0)] ease-out top-1/2 md:top-[42%] ${
                id === curSlide || id === nextSlide || id === prevSlide
                  ? "transition-all duration-500 opacity-100 visible z-30"
                  : "transition-all duration-500 opacity-0 collapse z-10"
              } ${id === curSlide ? "w-1/2" : "w-1/4"} `}
            >
              <img
                style={{
                  backfaceVisibility: "hidden",
                  MozBackfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
                className="w-max aspect-[16/20] object-contain"
                src={imageSource}
              />
            </div>
          );
        })}

      {/* buttons */}
      <div className="absolute -bottom-6 lg:-bottom-10 left-1/2 -translate-x-1/2 hidden md:flex space-x-5 items-center">
        <button
          onClick={goPrevSlide}
          className={`${buttonStyles} ${
            curSlide === 0 ? "opacity-0 collapse" : "opacity-100 visible"
          }`}
        >
          <PiCaretLeftBold className={caretStyles} />
        </button>

        <button
          onClick={goNextSlide}
          className={`${buttonStyles} ${
            curSlide === lastSlide
              ? "opacity-0 collapse"
              : "opacity-100 visible"
          }`}
        >
          <PiCaretRightBold className={caretStyles} />
        </button>
      </div>
    </div>
  );
};

Carousel1.propTypes = {
  imagesData: PropTypes.array,
  background: PropTypes.bool,
  modifyClasses: PropTypes.string,
};

export default Carousel1;
