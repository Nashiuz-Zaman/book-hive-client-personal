import InnerContainer from "../../../containers/InnerContainer/InnerContainer";
import { IoMdImages } from "react-icons/io";
import { BiDish } from "react-icons/bi";

const Featured = () => {
    return (
        <section className="mt-20">
            <InnerContainer>
                <div className="grid grid-cols-5 gap-8">
                    {/* feature card-1 */}
                    <div className="p-12 bg-purple-100">
                        <div>
                            <IoMdImages size={60} className="text-purple-500 transform -scale-x-100"></IoMdImages>
                        </div>
                        <div className="mt-6 text-gray-500">
                            <h3 className="text-2xl mb-3">Category</h3>
                            <div>
                                <button className="hover:underline">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    {/* feature card-2 */}
                    <div className="p-12 bg-purple-100">
                        <div>
                            <BiDish size={60} className="text-purple-500 transform -scale-x-100"></BiDish>
                        </div>
                        <div className="mt-6 text-gray-500">
                            <h3 className="text-2xl mb-3">Category</h3>
                            <div>
                                <button className="hover:underline">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    {/* feature card-1 */}
                    <div className="p-12 bg-purple-100">
                        <div>
                            <IoMdImages size={60} className="text-purple-500 transform -scale-x-100"></IoMdImages>
                        </div>
                        <div className="mt-6 text-gray-500">
                            <h3 className="text-2xl mb-3">Category</h3>
                            <div>
                                <button className="hover:underline">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    {/* feature card-1 */}
                    <div className="p-12 bg-purple-100">
                        <div>
                            <IoMdImages size={60} className="text-purple-500 transform -scale-x-100"></IoMdImages>
                        </div>
                        <div className="mt-6 text-gray-500">
                            <h3 className="text-2xl mb-3">Category</h3>
                            <div>
                                <button className="hover:underline">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    {/* feature card-1 */}
                    <div className="p-12 bg-purple-100">
                        <div>
                            <IoMdImages size={60} className="text-purple-500 transform -scale-x-100"></IoMdImages>
                        </div>
                        <div className="mt-6 text-gray-500">
                            <h3 className="text-2xl mb-3">Category</h3>
                            <div>
                                <button className="hover:underline">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </InnerContainer>

        </section>
    );
};

export default Featured;