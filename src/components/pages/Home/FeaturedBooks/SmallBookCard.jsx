import PropTypes from 'prop-types';

const SmallBookCard = ({ image, edition, bookName, author, price, children }) => {
    return (
        <div>

            <div className=" border p-5 space-y-5 h-[500px] ">
                <img className=" h-[250px] w-[150px] rounded-md mx-auto" src={image} alt="" />
                <div className=" justify-items-start px-50">
                    <h4 className=" font-medium text-xs text-pink-500">{edition}</h4>
                    <h4 className=" font-semibold">{bookName}</h4>
                    <h4 className=" text-xs text-gray-400">{author}</h4>
                    <h4 className=" font-semibold">$ {price}</h4>
                    {children}
                </div>
            </div>

        </div>
    );
};

SmallBookCard.propTypes = {
    image: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.number,
    edition: PropTypes.string,
    bookName: PropTypes.string,
    children: PropTypes.any
}
export default SmallBookCard;