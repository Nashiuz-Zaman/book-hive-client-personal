import DealsOfTheWeekCarousel from "./dealsOfTheWeekCarousel/dealsOfTheWeekCarousel";
import FeaturedBooks from "./FeaturedBooks/FeaturedBooks";

const Home = () => {
  return (<div>
       <section>
      <FeaturedBooks />
      </section>
  
      <section>
      <DealsOfTheWeekCarousel />
      </section>
      </div>);

  export default Home;
