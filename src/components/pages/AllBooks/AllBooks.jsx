// axios
import useAxios from "../../../hooks/useAxios";
// react
import { useEffect, useState } from "react";

// components
import SmallBookCard from "../../shared/SmallBookCard/SmallBookCard";
import Pagination from "../../shared/Pagination/Pagination";


const AllBooks = () => {
    const { axiosCustom } = useAxios();
    const [currentPage, setCurrentPage] = useState(1);
    const [booksCount, setBooksCount] = useState(0);
    const [checkedGenres, setCheckedGenres] = useState([]);
    const [categoryData, setCategoryData] = useState({ categories: [] });
    const [displayBooks, setDisplayBooks] = useState([]);
    const genres = ["romance", "comedy", "tragedy", "history", "biography", "fantasy", "onSale", "mostViewed", "featured"];

    // for pagination
    const booksPerPage = 12;
    const numberOfPages = Math.ceil(booksCount / booksPerPage);
    console.log('Total pages: ', numberOfPages);

    useEffect(() => {
        axiosCustom.post(`/books?limit=${booksPerPage}&skip=${currentPage}`, categoryData)
            .then(res => {
                console.log(res.data);
                setBooksCount(res.data.count);
                setDisplayBooks(res.data.books);
                console.log(res.data.books);
            })
    }, [axiosCustom, categoryData, booksPerPage, currentPage])


    const handleChecked = (event) => {
        const { value, checked } = event.target;

        // Update the state based on the checkbox status
        if (checked) {
            setCheckedGenres((prevGenres) => [...prevGenres, value]);
        } else {
            setCheckedGenres((prevGenres) => prevGenres.filter((genre) => genre !== value));
        }
    }

    const handleFilter = async (e) => {
        e.preventDefault();
        console.log("Checked Genres:", checkedGenres);

        setCategoryData({ categories: checkedGenres })

        // const filteredBooks = bookData.filter(book => checkedGenres.includes(book.category));
        // console.log(filteredBooks);
        // setDisplayBooks(filteredBooks);
    }

    // pagination function
    // const handlePrevButton = () =>{
    //     if(currentPage > 0){
    //         setCurrentPage(prevPage => prevPage - 1);
    //     }
    // }

    // const handleNextButton = () =>{
    //     if(currentPage < numberOfPages){
    //         setCurrentPage(prevPage => prevPage + 1)
    //     }
    // }


    return (
        <div>
            {/* checkbox filter section */}
            <form onSubmit={handleFilter}>
                <div className="max-w-lg mx-auto grid grid-cols-3 ">
                    {
                        genres.map((genre, index) => {
                            return (
                                <div className="p-2 flex justify-center gap-2 group" key={index}>
                                    <input
                                        type="checkbox"
                                        value={genre}
                                        name="checkbox"
                                        className="cursor-pointer accent-primary md:h-6 md:w-6"
                                        onChange={handleChecked}
                                        checked={checkedGenres.includes(genre)} />
                                    <label className="group-hover:text-primary">{genre}</label>
                                </div>)
                        })
                    }
                    <div className="col-span-3 rounded-default bg-primary text-white mx-auto px-6 py-2 mt-5">
                        <input type="submit" value="Search" />
                    </div>
                </div>
            </form>
            {/* all data section */}
            <div className="mt-16">
                <h2 className="text-center mb-6 text-primary text-4xl">Books Found: ({booksCount})</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {
                        displayBooks && displayBooks.length > 0 && displayBooks.map(book => {
                            return (
                                <SmallBookCard
                                    key={book?._id}
                                    image={book?.imageSource}
                                    edition={book?.edition}
                                    bookName={book?.bookName}
                                    author={book?.author}
                                    price={book?.price}
                                >
                                </SmallBookCard>)
                        })
                    }
                </div>
            </div>

            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                numberOfPages={numberOfPages}
            ></Pagination>
        </div>
    );
};

export default AllBooks;