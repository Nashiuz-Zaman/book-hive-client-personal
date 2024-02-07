// react
import PropTypes from "prop-types";

// react router
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const DashboardNav = ({ navOptions, modifyClasses = "" }) => {
  return (
    <div className={`px-elementGapMd py-elementGapSm ${modifyClasses}`}>
      <h2 className="text-xl font-bold mb-12">Dashboard</h2>

      <ul className={`space-y-3`}>
        {navOptions?.length > 0 &&
          navOptions.map((option) => {
            // if hashed link present then return this part, if not then return the next part

            // hashed link
            if (option.hashed) {
              return (
                <li key={option.id}>
                  <HashLink className={null} to={option.url}>
                    {option.text}
                  </HashLink>
                </li>
              );
            }

            // normal link
            return (
              <li key={option.id}>
                <NavLink className={null} to={option.url}>
                  {option.text}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

DashboardNav.propTypes = {
  navOptions: PropTypes.array,
  modifyClasses: PropTypes.string,
};

export default DashboardNav;
