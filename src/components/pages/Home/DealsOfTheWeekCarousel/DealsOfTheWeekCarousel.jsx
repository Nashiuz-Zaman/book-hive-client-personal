// react
import { useEffect, useState } from "react";

// Import Swiper related
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination } from "swiper/modules";

// component
import InnerContainer from "../../../containers/InnerContainer/InnerContainer";

// react icons
import { FaAnglesRight } from "react-icons/fa6";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const DealsOfTheWeekCarousel = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);


  return (
    <div className="bg-primaryLightest p-3 py-20 ">
      <InnerContainer>
        <div className=" md:flex md:justify-between md:items-center mb-10">
          <h1 className="text-2xl font-semibold">Deals of the week</h1>
          <button className="text-base hover:bg-[#F85455] hover:text-white py-2 px-3 hover:rounded-3xl">
            View All
            <FaAnglesRight className="inline-block ml-2" />
          </button>
        </div>

        <Swiper
          slidesPerView={2}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Pagination]}
          className="mySwiper"
        >
          {books.map((book) => (
            <SwiperSlide key={book.id} className="mb-10">
              <div className="bg-[#FFFFFF]  flex gap-3  items-center border p-6">
                <div className="w-[180px] h-[190px] border">
                  <img
                    className="object-cover"
                    src={book.image}
                    alt={book.bookName}
                  />
                </div>
                <div className=" w-full">
                  <div className="flex  justify-between ">
                    <div className="">
                      <p className="text-[#F85455]">{book.publisher}</p>
                      <p className=" text-sm text-[#373739]">{book.bookName}</p>
                      <p className=" text-sm text-[#373739]">{book.author}</p>
                      <p className=" text-base font-bold text-[#1E1E1E]">
                        $ {book.price}
                      </p>
                      {/* rating */}
                      <Rating
                        start={0}
                        stop={5}
                        step={1}
                        emptySymbol={<FaRegStar />}
                        fullSymbol={<FaStar />}
                        initialRating={book.rating}
                        readonly
                        className="text-yellow-300"
                      />
                      <p>
                        <span className="text-1xl text-[#1E1E1E] font-bold">
                          Hurry Up!
                        </span>{" "}
                        Offer ends in
                      </p>
                    </div>
                    <div className="w-[70px] h-[70px] text-center font-semibold p-2 rounded-full bg-[#F85455]">
                      <p className="text-white">
                        <span>Save</span>
                        <br />$ 50
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4  divide-x gap-2  items-center justify-center ">
                    <div className="bg-[#FFFFFF] ">
                      <h1 className="text-base text-left font-semibold">
                        114 <span className="text-sm text-[#373739]">Days</span>
                      </h1>
                    </div>
                    <div className="bg-[#FFFFFF] p-2">
                      <h1 className="text-base ml-2 text-center font-semibold">
                        04<span className="text-sm text-[#373739]">Hours</span>
                      </h1>
                    </div>
                    <div className="bg-[#FFFFFF] p-2">
                      <h1 className="text-base ml-2 text-center font-semibold">
                        60 <span className="text-sm text-[#373739]">Mins</span>
                      </h1>
                    </div>
                    <div className="bg-[#FFFFFF] p-2">
                      <h1 className="text-base ml-2 text-center font-semibold">
                        25 <span className="text-sm text-[#373739]">Secs</span>
                      </h1>
                    </div>
                  </div>
                  <div className="flex  justify-between w-full mt-1">
                    <p className=" text-sm  text-[#373739]">
                      Already Sold: {book.alreadySold}
                    </p>
                    <p className=" text-sm text-[#373739]">
                      Available: {book.available}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </InnerContainer>
    </div>
  );
};

export default DealsOfTheWeekCarousel;
