// react
import PropTypes from "prop-types";
import UserRow from "../../../../../shared/UserRow/UserRow";

const UsersTable = ({ users }) => {
  const textClasses = "text-left px-4 py-2 text-xsm";

  return (
    <table className="w-full rounded-default md:rounded-defaultLg bg-lightGray block py-elementGapSm px-2">
      <thead className="block mb-4 border-b border-lightBorder">
        <tr className="grid grid-cols-[3.375rem_0.85fr_0.5fr_2.625rem] sm:grid-cols-[4rem_4rem_1.5fr_1fr_1fr] lg:grid-cols-[4rem_4rem_1fr_1fr_1fr]">
          <th className={textClasses}>ID</th>
          <th className={`${textClasses} hidden sm:block`}></th>
          <th className={textClasses}>Full Name</th>
          <th className={textClasses}>Role</th>
          <th></th>
        </tr>
      </thead>

      <tbody className="block">
        {users?.length > 0 &&
          users.map((user, i) => {
            if (user.role !== "admin") {
              return <UserRow key={user._id} data={user} serial={i + 1} />;
            }
          })}
      </tbody>
    </table>
  );
};

UsersTable.propTypes = {
  users: PropTypes.array,
};

export default UsersTable;
