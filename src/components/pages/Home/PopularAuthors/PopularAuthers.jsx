//data
import { popularAuthers } from "../../../../uiData/PopularAuthorsData";
//component
import PopularAutherCard from "./PopularAutherCard";

const PopularAuthers = () => {
  return (
    <div className="mx-auto bg-[#fff6f7] px-3 py-20">
      <h2 className="font-semibold text-2xl mb-10 ">Popular Authors</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 font-medium">
        {popularAuthers.map((auther, i) => (
          <PopularAutherCard key={i} auther={auther}></PopularAutherCard>
        ))}
      </div>
    </div>
  );
};

export default PopularAuthers;
