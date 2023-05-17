import img1 from '../assets/Banner/1.jpg'


const Banner = () => {
    return (
        <div>
            <div className="carousel h-[30rem] w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className='bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0) text-white w-[80%] h-full  absolute space-y-6 pt-16 pl-10 '>
                        <h1 className='font-bold text-6xl '>Best Action <br /> Figures Are  <br /> Near You</h1>
                        <p>Welcome to our enchanting toy web page, where imagination comes to life! <br /> Discover a captivating collection of toys that <br /> inspire creativity, joy, and endless fun for children of all ages.</p>
                        <button className="btn btn-error">DIscover More</button> <button className="btn btn-outline btn-error">Latest Project</button>
                    </div>

                </div>

            </div>

            <div className='text-center mt-10'>
                <h1 className='text-red-600  font-bold text-2xl'>Experience the Ultimate online toy shopping brought to you by ABC toys.</h1>
                <p className='mt-4 text-xl font-medium text-gray-400'>Official Distributor of Mattel, Funskool, Winfun, Frank & Zephyr Toy Brands in Bangladesh! <br />
Authorized Licensee of Hot Wheels & Barbie Apparel (2022)!</p>
<button className='mt-3 bg-red-500 rounded-full border-b-8 text-white hover:translate-y-2 hover:bg-red-600 duration-300 border-red-600 p-3'>Download Our App</button>
            </div>
        </div>
    );
};

export default Banner;