// prop type
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, setCurrentPage, numberOfPages }) => {

    const handlePrevButton = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    }

    const handleNextButton = () => {
        if (currentPage < numberOfPages) {
            setCurrentPage(prevPage => prevPage + 1)
        }
    }
    return (
        <div className="text-center my-6">
            <button className="p-4 border mr-4" onClick={handlePrevButton}>Prev</button>
            <button className="p-4 border" onClick={handleNextButton}>Next</button>
            <p>Page {currentPage} of {numberOfPages}</p>
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number,
    setCurrentPage: PropTypes.func,
    numberOfPages: PropTypes.number
}

export default Pagination;