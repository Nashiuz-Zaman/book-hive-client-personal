// eslint
import PropTypes from "prop-types";

import { IoMdImages } from "react-icons/io";
import { BiDish } from "react-icons/bi";
import { RiHeartsLine } from "react-icons/ri";
import { LuSwords } from "react-icons/lu";
import { GiMaterialsScience } from "react-icons/gi";


const CategoryCard = ({ card }) => {

    const { title, icon, bg_color, icon_color } = card;
    // console.log(typeof Icon);

    const IconComponent = icon;
    // console.log(IconComponent);


    return (
        <div className={`p-12`} style={{backgroundColor: bg_color}}>
            <div>
                {/* <IconComponent style={{ color: icon_color }} size={60} className={`${icon_color} transform -scale-x-100`} /> */}
                <IconComponent size={60} style={{color: icon_color}}></IconComponent>
            </div>
            <div className="mt-6 text-gray-500">
                <h3 className="text-2xl mb-3">{title}</h3>
                <div>
                    <button className="hover:underline">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

CategoryCard.propTypes = {
    card: PropTypes.object,
    title: PropTypes.string,
    bg_color: PropTypes.string,
    icon_color: PropTypes.string,
};


export default CategoryCard;