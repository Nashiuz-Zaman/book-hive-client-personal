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

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  // const [tabData, setTabData] = useState([]);
  const [data, setData] = useState([]);
  const { axiosCustom } = useAxios();
  const [tabName, setTabName] = useState('featured')

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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/featuredBooks.json');
  //       const data = await response.json();
  //       setData(data);
  //       console.log(data);
  //       setTabData(data.filter((item) => item.bookCharacteristics.includes("featured")))
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    axiosCustom
      .post("/books?limit=8&skip=0", { categories: [`${tabName}`] })
      .then((res) => {
        setData(res.data.books);
      });
  }, [axiosCustom, tabName]);
  console.log(data);

  // const handleTabClick = (tabIndex) => {
  //   setActiveTab(tabIndex);
  //   if (tabIndex === 0) {
  //     setTabData(data.filter((item) => item.bookCharacteristics.includes("featured")));
  //   }
  //   if (tabIndex === 1) {
  //     setTabData(data.filter((item) => item.bookCharacteristics.includes('onSale')));
  //   }
  //   else if (tabIndex === 2) {
  //     setTabData(data.filter((item) => item.bookCharacteristics.includes("mostViewed")));
  //   }
  // };
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    if (tabIndex === 0) {
      setTabName("featured");
    }
    else if (tabIndex === 1) {
      setTabName("onSale");
    }
    else if (tabIndex === 2) {
      setTabName("mostViewed");
    }
  };
  return (
    <div>
      <div className=" flex flex-row gap-5 justify-center my-4">
        {/* tabs */}
        <Tab
          label={'Featured'}
          isActive={activeTab === 0}
          onClick={() => handleTabClick(0)}
        ></Tab>
        <Tab
          label={'On Sale'}
          isActive={activeTab === 1}
          onClick={() => handleTabClick(1)}
        ></Tab>
        <Tab
          label={'Most Viewed'}
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
            bookName={item.bookName} j
            author={item.author}
            price={item.price}
            rating={<Rating
              placeholderRating={item.rating}
              emptySymbol={<FaRegStar className="mask mask-star-2 text-gray-400 " />}
              placeholderSymbol={
                <FaRegStar className="mask mask-star-2 text-orange-500" />
              }
              fullSymbol={<FaRegStar className="mask mask-star-2 text-orange-500" />}
            />}
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
