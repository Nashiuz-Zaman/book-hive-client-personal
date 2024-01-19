// components
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import BestsellingBooks from "./BestsellingBooks/BestsellingBooks";
import DealsOfTheWeekCarousel from "./dealsOfTheWeekCarousel/dealsOfTheWeekCarousel";
import FeaturedBooks from "./FeaturedBooks/FeaturedBooks";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";

const Home = () => {
  return (
    <div className="space-y-sectionGapMd mb-sectionGapMd">
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
