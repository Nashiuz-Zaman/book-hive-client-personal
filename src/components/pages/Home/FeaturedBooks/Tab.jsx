// react
import PropTypes from "prop-types";

const Tab = ({ label, isActive, onClick }) => {
  return (
    <div>
      <h3
        className={`tab ${
          isActive
            ? "cursor-pointer border-b border-black pb-4 font-semibold"
            : "cursor-pointer text-gray-500"
        }`}
        onClick={onClick}
      >
        {label}
      </h3>
    </div>
  );
};

Tab.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Tab;
