// react
import PropTypes from "prop-types";

// react router
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const ListOfLinks = ({
  linksData = null,
  modifyClasses = "",
  linksModifyClasses = "",
}) => {
  const linkClasses = `transition all duration-200  hover:underline ${linksModifyClasses}`;

  return (
    <ul className={`flex flex-col gap-1 ${modifyClasses}`}>
      {/* these links will always be here */}
      {linksData &&
        linksData.map((option, i) => {
          // if hashed link present then return this part, if not then return the next part

          // hashed link
          if (option.hashed) {
            return (
              <li key={i}>
                <HashLink className={linkClasses} to={option.url}>
                  {option.text}
                </HashLink>
              </li>
            );
          }

          // normal link
          return (
            <li key={i}>
              <Link className={linkClasses} to={option.url}>
                {option.text}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

ListOfLinks.propTypes = {
  linksData: PropTypes.array,
  linksModifyClasses: PropTypes.string,
  modifyClasses: PropTypes.string,
};

export default ListOfLinks;
