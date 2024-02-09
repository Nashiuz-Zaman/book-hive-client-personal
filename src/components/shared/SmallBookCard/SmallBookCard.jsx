import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { add } from "../../../features/cart/cartSlice";
import useToast from "../../../hooks/useToast";

const SmallBookCard = ({
  image,
  edition,
  bookName,
  author,
  price,
  rating,
  item,
}) => {
  const { showToast} = useToast();
  const dispatch = useDispatch();
  const addToCart = (item) => {
    // dispatch an add action
    dispatch(add(item));
    //show message
    showToast("Book added to shopping cart.", "success");
  };
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
        <button
          onClick={() => addToCart(item)}
          className="bg-blackLight border border-blackLight hover:bg-textPrimary hover:border-textPrimary text-white  w-max transition-all duration-default rounded-default text-center px-6 py-3 3xl:text-xl 2xl:py-3"
        >
          Add to Cart
        </button>
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
