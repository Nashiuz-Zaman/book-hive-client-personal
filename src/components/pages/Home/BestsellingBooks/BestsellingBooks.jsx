// react
import { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// swiper modules
import { Navigation } from 'swiper/modules';

// axios
import axios from 'axios';

// component
import SmallBookCard from '../../../shared/SmallBookCard/SmallBookCard';

// react rating
import Rating from "react-rating";

// react icons
import { FaRegStar } from "react-icons/fa";
import { FaAnglesRight } from 'react-icons/fa6';


const BestsellingBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/data.json')
      .then(res => setBooks(res.data))
  }, []);

  console.log(books);

  const ratingComponent = (
    <Rating
      placeholderRating={2}
      emptySymbol={<FaRegStar className="mask mask-star-2 " />}
      placeholderSymbol={
        <FaRegStar className="mask mask-star-2 " />
      }
      fullSymbol={<FaRegStar className="mask mask-star-2 " />}
    />
  );

  return (
    <div>
      <div className='flex justify-between mb-10'>
        <h2 className='text-2xl font-semibold'>Bestselling Books</h2>
        <div>
          <button className="text-base  hover:bg-[#F85455] hover:text-white py-2 px-3 hover:rounded-3xl">
            View All
            <FaAnglesRight className="inline-block ml-2" />
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper p-2"
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <SmallBookCard
              key={book.id}
              image={book.image}
              edition={book.edition}
              bookName={book.bookName}
              author={book.author}
              price={book.price}
            >
              {ratingComponent}
            </SmallBookCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestsellingBooks;