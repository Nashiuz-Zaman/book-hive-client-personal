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
import useAxios from "../../../../hooks/useAxios";

//dispatch
import { useDispatch } from "react-redux";
import { add } from "../../../../features/cart/cartSlice";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  // const [tabData, setTabData] = useState([]);
  const [data, setData] = useState([]);
  const { axiosCustom } = useAxios();
  const [tabName, setTabName] = useState("featured");

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
    axiosCustom
      .post("/books?limit=8&skip=0", { categories: [`${tabName}`] })
      .then((res) => {
        setData(res.data.books);
      });
  }, [axiosCustom, tabName]);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    if (tabIndex === 0) {
      setTabName("featured");
    } else if (tabIndex === 1) {
      setTabName("onSale");
    } else if (tabIndex === 2) {
      setTabName("mostViewed");
    }
  };

  return (
    <div>
      <div className=" flex flex-row gap-5 justify-center my-4">
        {/* tabs */}
        <Tab
          label={"Featured"}
          isActive={activeTab === 0}
          onClick={() => handleTabClick(0)}
        ></Tab>
        <Tab
          label={"On Sale"}
          isActive={activeTab === 1}
          onClick={() => handleTabClick(1)}
        ></Tab>
        <Tab
          label={"Most Viewed"}
          isActive={activeTab === 2}
          onClick={() => handleTabClick(2)}
        ></Tab>
      </div>
      {/* tabs cards */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-evenly">
        {data.map((item, index) => (
          <SmallBookCard
            key={index}
            image={item.imageSource}
            edition={item.edition}
            bookName={item.bookName}
            j
            author={item.author}
            price={item.price}
            rating={
              <Rating
                placeholderRating={item.rating}
                emptySymbol={
                  <FaRegStar className="mask mask-star-2 text-gray-400 " />
                }
                placeholderSymbol={
                  <FaRegStar className="mask mask-star-2 text-orange-500" />
                }
                fullSymbol={
                  <FaRegStar className="mask mask-star-2 text-orange-500" />
                }
              />
            }
            // addToCart={addToCart}
            item={item}
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
