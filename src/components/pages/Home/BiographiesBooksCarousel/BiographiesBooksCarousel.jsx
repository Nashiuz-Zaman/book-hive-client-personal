// react
import { useEffect, useState } from "react";

// component
import BiographiesSlideCard from "./BiographiesSlideCard";

// Import Swiper related
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination } from "swiper/modules";

//axios
import useAxios from "../../../../hooks/useAxios";

//icons
import { FaAnglesRight } from "react-icons/fa6";

const BiographiesBooksCarousel = () => {
    const [books, setBooks] = useState([]);
    const { axiosCustom } = useAxios();

    useEffect(() => {
        axiosCustom
            .post("/books?limit=8&skip=0", { categories: ["biography"] })
            .then((res) => {
                setBooks(res.data.books);
            });
    }, [axiosCustom]);
    // console.log(books);

    return (
        <div>
            {/* section header */}
            <div className=" md:flex md:justify-between md:items-center mb-10">
                <h1 className="text-2xl font-semibold">Biographies Books</h1>
                <button className="text-base hover:bg-[#F85455] hover:text-white py-2 px-3 hover:rounded-3xl">
                    View All
                    <FaAnglesRight className="inline-block ml-2" />
                </button>
            </div>
            {/* books carousel */}
            <Swiper
                slidesPerView={3}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
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
                    <SwiperSlide key={book._id} className="mb-10">
                        <BiographiesSlideCard book={book} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default BiographiesBooksCarousel;