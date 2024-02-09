import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../../../features/cart/cartSlice";
import useToast from "../../../hooks/useToast";

const Cart = () => {
  const { showToast } = useToast();
  const bookCart = useSelector((state) => state.cart.addedItems);
  const dispatch = useDispatch();
  // Function to calculate the total price
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    bookCart.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice.toFixed(2);
  };
  const removeToCart = (id) => {
    //dispatch
    dispatch(remove(id));
    //delete massage
    showToast("Book Deleted from shopping cart.", "success");
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
    <div className="flex">
      <div className="flex-1">{carts}</div>
      <div>
        <h3>Order Summary</h3>
        <p>Total Price: ${calculateTotalPrice()}</p>
        <button className="bg-[#F85454]  hover:bg-textPrimary hover:border-textPrimary text-white  w-max transition-all duration-default rounded-default text-center px-6 py-3 ">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
