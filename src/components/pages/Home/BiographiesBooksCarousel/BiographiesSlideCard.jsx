/* eslint-disable react/prop-types */
// related to rating 
import Rating from "react-rating";
// icons
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";




const BiographiesSlideCard = ({ book }) => {
    return (
        <div className="bg-[#FFFFFF]  flex gap-5  items-center border p-6">
            {/* image part */}
            <div className="w-[180px] h-[190px] border">
                <img
                    className="object-cover"
                    src={book.imageSource}
                    alt={book.bookName}
                />
            </div>
            {/* text part */}
            <div className=" w-full">
                <div className="flex justify-between ">
                    <div className="flex flex-col space-y-3">
                        <p className="text-[#F85455]">{book.edition}</p>
                        <p className=" text-sm text-[#1E1E1E] font-bold">{book.bookName}</p>
                        <p className=" text-sm text-[#373739]">{book.author}</p>
                        <p className=" text-base font-bold text-[#1E1E1E]">
                            $ {book.price}
                        </p>
                        {/* rating */}
                        <Rating start={0}
                            stop={5}
                            step={1}
                            emptySymbol={<FaRegStar />}
                            fullSymbol={<FaStar />}
                            initialRating={book.rating}
                            readonly 
                            className="text-yellow-300"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BiographiesSlideCard;