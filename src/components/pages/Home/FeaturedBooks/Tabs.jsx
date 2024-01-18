import { useEffect, useState } from "react";
import Tab from "./Tab";
import Shared from "./SmallBookCard";
import Rating from "react-rating";
import { FaRegStar } from "react-icons/fa";
import SmallBookCard from "./SmallBookCard";
const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [tabData, setTabData] = useState([]);
    const ratingComponent = (
        <Rating placeholderRating={2}
            emptySymbol={<FaRegStar className="mask mask-star-2 bg-gray-400" />
            }
            placeholderSymbol={<FaRegStar className="mask mask-star-2 bg-orange-400" />}
            fullSymbol={<FaRegStar className="mask mask-star-2 bg-orange-400" />} />
    )
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(tabs[activeTab].url);
                const data = await response.json();
                setTabData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [activeTab, tabs]);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <div>
            <div className=' flex flex-row gap-5 justify-center my-4'>
                {
                    tabs.map((tab, idx) => <Tab
                        key={idx}
                        label={tab.label}
                        isActive={idx === activeTab}
                        onClick={() => handleTabClick(idx)}
                    ></Tab>)
                }
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 items-center justify-evenly">
                {tabData.map((item) => (<SmallBookCard
                    key={item.id}
                    image={item.image}
                    edition={item.edition}
                    bookName={item.bookName}
                    author={item.author}
                    price={item.price}
                >{ratingComponent}</SmallBookCard>
                ))}
            </div>
        </div>
    );
};

export default Tabs;