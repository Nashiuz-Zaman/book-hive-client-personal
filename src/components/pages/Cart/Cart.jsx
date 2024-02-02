import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../../../features/cart/cartSlice";

const Cart = () => {
  const bookCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeToCart = (id) => {
    //dispatch
    dispatch(remove(id));
  };
  const carts = bookCart?.map((cartItems) => (
    <div key={cartItems._id} className=" border p-5 space-y-5  flex  ">
      <div>
        <img
          className=" h-[50px] w-[50px] rounded-md mx-auto transition ease-in-out delay-100  hover:-translate-y-.3 hover:scale-110 duration-300"
          src={cartItems?.imageSource}
          alt=""
        />
      </div>
      <div className=" flex flex-row justify-evenly items-centerpx-50 grow">
        <h4 className=" font-semibold">{cartItems?.bookName}</h4>
        <h4 className=" text-xs text-gray-400">{cartItems.author}</h4>
        <h4 className=" text-xs text-gray-400">{cartItems.author}</h4>
        <h4 className=" font-semibold">$ {cartItems?.price}</h4>
      </div>
      <button
        onClick={() => removeToCart(cartItems._id)}
        className="bg-blackLight border  border-blackLight hover:bg-textPrimary hover:border-textPrimary text-white  w-max transition-all duration-default rounded-default text-center px-6 py-3 "
      >
        Remove
      </button>
    </div>
  ));
  return (
    <div>
      <Link to="/">Home</Link>
      {carts}
      <div className="flex justify-end ">
        <button className="bg-pink-500 border  border-pink-500 hover:bg-textPrimary hover:border-textPrimary text-white  w-max transition-all duration-default rounded-default text-center px-6 py-3 ">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
