// components
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import DealsOfTheWeekCarousel from "./DealsOfTheWeekCarousel/DealsOfTheWeekCarousel";
import FeaturedBooks from "./FeaturedBooks/FeaturedBooks";
import Banner from "./Banner/Banner";
import BestsellingBooks from "./BestsellingBooks/BestsellingBooks";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";

const Home = () => {
  return (
    <div className="space-y-sectionGapMd mb-sectionGapMd">
      <section>
        <Banner />
      </section>

      <section>
        <InnerContainer>
          <FeaturedCategories />
        </InnerContainer>
      </section>

      <section>
        <InnerContainer>
          <BestsellingBooks />
        </InnerContainer>
      </section>

      <section>
        <InnerContainer>
          <FeaturedCategories/>
        </InnerContainer>
      </section>
      <section>
        <InnerContainer>
          <BestsellingBooks />
        </InnerContainer>
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
