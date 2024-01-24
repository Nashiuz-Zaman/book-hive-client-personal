import axios from "axios";
import { useEffect, useState } from "react";
import SmallBookCard from "../../shared/SmallBookCard/SmallBookCard";

const AllBooks = () => {
    const [checkedGenres, setCheckedGenres] = useState([]);
    const [bookData, setBookData] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);
    const genres = ["Romance", "Mystery", "Classics", "Dystopian", "Trending", "Fantasy"];

    useEffect(() => {
        axios.get('/viewed.json')
            .then(res => {
                setBookData(res.data);
                setDisplayBooks(res.data);
            })
    }, [])



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

        const filteredBooks = bookData.filter(book => checkedGenres.includes(book.category));
        console.log(filteredBooks);
        setDisplayBooks(filteredBooks);
    }


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
                    <div className="col-span-3 rounded-md bg-gray-800 text-white  border-b-4 border-b-pink-800 mx-auto px-6 py-2 mt-5">
                        <input type="submit" value="Search" />
                    </div>
                </div>
            </form>
            {/* all data section */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
                {
                    displayBooks.map(book =>
                        <SmallBookCard
                            key={book.id}
                            image={book.image}
                            edition={book.edition}
                            bookName={book.bookName}
                            author={book.author}
                            price={book.price}
                        >
                        </SmallBookCard>)
                }
            </div>
        </div>
    );
};

export default AllBooks;