// components
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import DealsOfTheWeekCarousel from "./DealsOfTheWeekCarousel/DealsOfTheWeekCarousel";
import FeaturedBooks from "./FeaturedBooks/FeaturedBooks";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="space-y-sectionGapMd mb-sectionGapMd">
      <section>
        <Banner />
      </section>

      <section>
        <InnerContainer>
          <FeaturedBooks />
        </InnerContainer>
      </section>

      <section>
        <InnerContainer>
          <DealsOfTheWeekCarousel />
        </InnerContainer>
      </section>
    </div>
  );
};

export default Home;
