// react
import { useEffect, useState } from "react";

// Import Swiper related
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

// react icons
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { FaAnglesRight } from "react-icons/fa6";

const DealsOfTheWeekCarousel = () => {
      const [books, setBooks] = useState([]);
      console.log(books);
      useEffect(() => {
            fetch("/data.json")
                  .then((res) => res.json())
                  .then((data) => setBooks(data));
      }, []);

      return (
            <div className="bg-[#FFF6F7] p-3 py-20 ">

                  <div className=" md:flex md:justify-between md:items-center mb-10">
                        <h1 className="text-2xl font-semibold">Deals of the week</h1>
                        <button className="text-base   hover:bg-[#F85455] hover:text-white py-2 px-3 hover:rounded-3xl">
                              View All
                              <FaAnglesRight className="inline-block ml-2" />
                        </button>
                  </div>

                  <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        keyboard={{
                              enabled: true,
                        }}
                        pagination={{
                              clickable: true,
                        }}
                        navigation={true}
                        modules={[Keyboard, Pagination, Navigation]}
                        className="mySwiper"
                  >
                        {books.map((book) => (
                              <SwiperSlide key={book.id}>
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
                                                            <p className=" text-sm text-[#373739]">
                                                                  {book.author}
                                                            </p>
                                                            <p className=" text-base font-bold text-[#1E1E1E]">
                                                                  $ {book.price}
                                                            </p>
                                                            <p className=" text-yellow-300 flex">
                                                                  <IoMdStar /> <IoMdStar /> <IoMdStar /> <IoMdStarHalf />{" "}
                                                            </p>
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
                                                <div className="grid grid-cols-2 md:grid-cols-4 divide-x gap-2  items-center justify-center ">
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
            </div>
      );
};

export default DealsOfTheWeekCarousel;
