// react
import PropTypes from "prop-types";

// react icon
import { FaTrashAlt } from "react-icons/fa";

const UserRow = ({ data, serial, modifyClasses = "" }) => {
  const { name, imageSource, role } = data;

  const textClasses = "text-left truncate font-medium px-4 text-xsm capitalize";

  return (
    <tr
      className={`w-full grid grid-cols-[3.375rem_0.85fr_0.5fr_2.625rem] sm:grid-cols-[4rem_4rem_1.5fr_1fr_1fr] lg:grid-cols-[4rem_4rem_1fr_1fr_1fr] items-center py-2 ${modifyClasses}`}>
      <td className={`${textClasses} !font-bold`}>{serial}</td>
      <td className={`hidden sm:block ${textClasses}`}>
        <img
          className="block w-[2.5rem] aspect-square rounded-full object-cover mx-auto"
          src={imageSource}
          alt="User profile picture"
        />
      </td>

      <td className={textClasses}>{name}</td>
      <td className={textClasses}>{role}</td>
      <button
        title="Delete User"
        className="border w-max bg-red-600 rounded-[8px] text-white py-2 px-3 font-medium flex gap-2 items-center">
        <span>
          <FaTrashAlt />
        </span>
        <span className="hidden sm:block">Delete</span>
      </button>
    </tr>
  );
};

UserRow.propTypes = {
  data: PropTypes.object,
  serial: PropTypes.number,
  modifyClasses: PropTypes.string,
};

export default UserRow;
