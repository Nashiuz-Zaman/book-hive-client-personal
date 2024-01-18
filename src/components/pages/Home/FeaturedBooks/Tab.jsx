// react
import PropTypes from "prop-types";

const Tab = ({ label, isActive, onClick }) => {
  return (
    <div>
      <h3
        className={`tab ${
          isActive
            ? " border-b border-black pb-4 font-semibold"
            : " text-gray-500"
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
};

export default Tab;
