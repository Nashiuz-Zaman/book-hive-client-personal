// react
import PropTypes from "prop-types";

// react icon
import { HiMagnifyingGlass } from "react-icons/hi2";

const Searchbox = ({ placeholder = "" }) => {
  return (
    <div className="flex items-center gap-4 bg-lightGray px-5 py-4 rounded-default">
      <HiMagnifyingGlass className="text-2xl text-textPrimary" />

      <input
        className="block w-[25rem] bg-lightGray placeholder:text-textPrimary placeholder:capitalize placeholder:font-medium focus:outline-none"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

Searchbox.propTypes = {
  placeholder: PropTypes.string,
};

export default Searchbox;
