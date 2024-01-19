// react
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// component
import Tab from "./Tab";
import SmallBookCard from "../../../shared/SmallBookCard/SmallBookCard";

// react rating
import Rating from "react-rating";

// react icons
import { FaRegStar } from "react-icons/fa";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabData, setTabData] = useState([]);
  const ratingComponent = (
    <Rating
      placeholderRating={2}
      emptySymbol={<FaRegStar className="mask mask-star-2 text-gray-400 " />}
      placeholderSymbol={
        <FaRegStar className="mask mask-star-2 text-orange-500" />
      }
      fullSymbol={<FaRegStar className="mask mask-star-2 text-orange-500" />}
    />
  );
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(tabs[activeTab].url);
        const data = await response.json();
        setTabData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [activeTab, tabs]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <div className=" flex flex-row gap-5 justify-center my-4">
        {tabs.map((tab, idx) => (
          <Tab
            key={idx}
            label={tab.label}
            isActive={idx === activeTab}
            onClick={() => handleTabClick(idx)}
          ></Tab>
        ))}
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 items-center justify-evenly">
        {tabData.map((item) => (
          <SmallBookCard
            key={item.id}
            image={item.image}
            edition={item.edition}
            bookName={item.bookName}
            author={item.author}
            price={item.price}
            rating={ratingComponent}
          ></SmallBookCard>
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
};

export default Tabs;
