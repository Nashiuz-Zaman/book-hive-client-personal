// components
import BannerText from "../../../shared/BannerText/BannerText";
import InnerContainer from "./../../../containers/InnerContainer/InnerContainer";
import Carousel1 from "./../../../shared/Carousel1/Carousel1";

// data
import { homeTopBannerTextContent } from "../../../../uiData/homeUiContent";

const Banner = () => {
  // extract data
  const { heading, images } = homeTopBannerTextContent;

  return (
    <div className="bg-primaryLightest py-sectionGapSm  md:py-sectionGapMd">
      <InnerContainer>
        <div className="grid grid-cols-1 gap-sectionGapSm lg:grid-cols-2 md:gap-sectionGapMd lg:gap-sectionGapSm items-center">
          {/* banner text part */}
          <div>
            <BannerText heading={heading} />
          </div>

          {/* banner image part */}
          <div>
            <Carousel1 imagesData={images} background={false} />
          </div>
        </div>
      </InnerContainer>
    </div>
  );
};

export default Banner;
