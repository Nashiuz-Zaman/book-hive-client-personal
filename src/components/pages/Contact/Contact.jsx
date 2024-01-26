
const Contact = () => {
    return (
        <div>
            <h1 id='form' className=" text-2xl md:text-5xl lg:text-7xl text-center font-bold text-red-400 mb-[5rem]">Send us an email and get in
                touch.</h1>
            <section className=" max-w-6xl mx-auto bg-black py-10 my-5 rounded-md">
                <form >
                    <div className="flex flex-col gap-4 justify-center px-5">
                        <div className=' flex flex-col md:flex-row lg:flex-row items-center justify-center gap-5'>
                            <div className='w-full md:w-[30%] lg:w-[30%]'>
                                <label className=" text-white" htmlFor="name">Name</label>
                                <input className="w-full border border-gray px-5 py-2 rounded-md mt-3" name='from_name' placeholder='Name' id="small" type="text" sizing="md" />
                            </div>
                            <div className=' w-full md:w-[30%] lg:w-[30%]'>
                                <label className=" text-white" htmlFor="email">Email</label>
                                <input className="w-full border border-gray px-5 py-2 rounded-md mt-3" name='email' placeholder='Email' id="base" type="email" sizing="md" />
                            </div>
                        </div>
                        <div className=' w-full md:w-[62%] lg:w-[62%] mx-auto'>
                            <label className=" text-white" htmlFor="message">Message</label>
                            <textarea name='message' className='w-full border border-gray px-5 h-[250px] rounded-md mt-3' placeholder='Message' id="large" type="text" sizing="lg" />
                        </div>
                    </div>
                    <div className=" flex justify-center">
                        <button type='submit' className=' mt-5 bg-black py-3 rounded-md border font-semibold border-white w-[15%] text-white'>Send</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Contact;