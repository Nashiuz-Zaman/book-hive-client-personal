// react
import PropTypes from "prop-types";

const UserRow = ({ data, serial, modifyClasses = "" }) => {
  const { fullName, imageSource, role } = data;

  const textClasses = "font-semibold text-lg";

  return (
    <div className={`flex items-center ${modifyClasses}`}>
      <p className={textClasses}>{serial}</p>
      <img className="block" src={imageSource} alt="User profile picture" />
      <p className={textClasses}>{fullName}</p>
      <p className={textClasses}>{role}</p>
    </div>
  );
};

UserRow.propTypes = {
  data: PropTypes.object,
  serial: PropTypes.number,
  modifyClasses: PropTypes.string,
};

export default UserRow;
