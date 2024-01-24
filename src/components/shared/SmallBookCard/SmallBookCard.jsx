import PropTypes from "prop-types";

const SmallBookCard = ({ image, edition, bookName, author, price, rating }) => {
  return (
    <div>
      <div className=" border p-5 space-y-5 h-[500px] flex flex-col ">
        <div>
          <img
            className=" h-[250px] w-[150px] rounded-md mx-auto transition ease-in-out delay-100  hover:-translate-y-.3 hover:scale-110 duration-300"
            src={image}
            alt=""
          />
        </div>
        <div className=" flex flex-col justify-evenly items-centerpx-50 grow">
          <h4 className=" font-medium text-xs text-pink-500">{edition}</h4>
          <h4 className=" font-semibold">{bookName}</h4>
          <h4 className=" text-xs text-gray-400">{author}</h4>
          <h4 className=" font-semibold">$ {price}</h4>
          {rating}
        </div>
      </div>
    </div>
  );
};

SmallBookCard.propTypes = {
  image: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.number,
  edition: PropTypes.string,
  bookName: PropTypes.string,
  rating: PropTypes.any,
};

export default SmallBookCard;
