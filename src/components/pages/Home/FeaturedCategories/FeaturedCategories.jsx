// raw data
import { featuredCategories } from "./../../../../uiData/featuredCategories";

// react icons
import { FaAnglesRight } from "react-icons/fa6";

// component
import CategoryCard from "./CategoryCard";

const FeaturedCategories = () => {
  return (
    <section className="mt-20">
      <div className="flex justify-between mb-10">
        <h2 className="text-2xl font-semibold">Featured Categories</h2>
        <div>
          <button className="text-base  hover:bg-[#F85455] hover:text-white py-2 px-3 hover:rounded-3xl">
            View All
            <FaAnglesRight className="inline-block ml-2" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {featuredCategories.map((card, index) => (
          <CategoryCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
