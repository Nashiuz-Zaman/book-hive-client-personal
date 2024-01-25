/* eslint-disable react/prop-types */

const PopularAutherCard = ({ auther }) => {
    return (
        <div className="max-w-xs mx-auto hover:scale-125 transition-transform duration-300 hover:text-[#f84555]">
            <img src={auther.photo} className="w-32 h-32 rounded-full mx-auto [#f84555]" alt={auther.name} />
            <div className="text-center ">
                <h3>{auther.name}</h3>
                <p className="text-xs">
                    {auther.publishedBooks} Published Books
                </p>
            </div>
        </div>
    );
};

export default PopularAutherCard;