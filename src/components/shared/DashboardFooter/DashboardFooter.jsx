import PropTypes from "prop-types";

const curYear = new Date().getFullYear();

const DashboardFooter = ({ modifyClasses = "" }) => {
  return (
    <footer className={`mt-auto p-elementGapSm bg-blackLight ${modifyClasses}`}>
      <small className="text-right block text-lg font-medium text-white">
        &copy; {curYear} BookHive, All rights reserved
      </small>
    </footer>
  );
};

DashboardFooter.propTypes = {
  modifyClasses: PropTypes.string,
};

export default DashboardFooter;
