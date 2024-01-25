// react
import PropTypes from "prop-types";

// icon
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const MobileMenuBtn = ({ openNavFunction, modifyClasses = "" }) => {
  return (
    <button
      className={`block w-max  ${modifyClasses}`}
      onClick={openNavFunction}
    >
      <HiOutlineMenuAlt1 className="text-4xl text-black"></HiOutlineMenuAlt1>
    </button>
  );
};

MobileMenuBtn.propTypes = {
  openNavFunction: PropTypes.func,
  modifyClasses: PropTypes.string,
};
export default MobileMenuBtn;
