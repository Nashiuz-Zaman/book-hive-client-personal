// components
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import DealsOfTheWeekCarousel from "./dealsOfTheWeekCarousel/dealsOfTheWeekCarousel";
import FeaturedBooks from "./FeaturedBooks/FeaturedBooks";

const Home = () => {
  return (
    <div>
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
