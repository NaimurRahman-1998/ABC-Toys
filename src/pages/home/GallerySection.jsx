import img1 from '../../assets/Gallery/01.jpg'
import img2 from '../../assets/Gallery/02.jpg'
import img3 from '../../assets/Gallery/3.jpg'
import img4 from '../../assets/Gallery/4.jpg'
import img5 from '../../assets/Gallery/5.jpg'
import img6 from '../../assets/Gallery/6.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css'

const GallerySection = () => {
    AOS.init();
    return (
        <div className="mt-14 flex flex-col items-center">
            <h1 className="text-red-600 fontTitle text-center ">Our Collections</h1>

            <div className='lg:grid lg:grid-cols-3 gap-4 mt-5 '>

                <div data-aos="fade-right" data-aos-duration="700"> 
                    <div className='w-[20rem] h-[20rem] relative hover:-translate-y-2 duration-300 rounded-xl'>
                        <img className='object-cover h-full rounded-2xl' src={img1} alt="" />
                        <div className='bg-gradient-to-b from-zinc-500 to-blue-500 rounded-2xl text-white absolute inset-0 opacity-0 hover:opacity-70 '>
                        <h1 className='text-center mt-40 font-extrabold text-2xl'>MARVEL Action Figures</h1>
                        </div>
                    </div> 
                </div>

                <div data-aos="fade-down" data-aos-duration="700"> <div className='w-[20rem] h-[20rem] relative hover:-translate-y-2 duration-300 rounded-xl'>
                    <img className='object-cover h-full rounded-2xl' src={img2} alt="" />
                    <div className='bg-gradient-to-b from-zinc-500 to-purple-500 rounded-2xl text-white absolute inset-0 opacity-0 hover:opacity-70 '>
                        <h1 className='text-center mt-40 font-extrabold text-2xl'>DC Action Figures</h1>
                    </div>
                </div>  </div>

                <div data-aos="fade-left" data-aos-duration="700"> <div className='w-[20rem] h-[20rem] relative hover:-translate-y-2 duration-300 rounded-xl'>
                    <img className='object-cover h-full rounded-2xl' src={img3} alt="" />
                    <div className='bg-gradient-to-b from-zinc-500 to-pink-600 rounded-2xl text-white absolute inset-0 opacity-0 hover:opacity-70 '>
                        <h1 className='text-center mt-40 font-extrabold text-2xl'>Barbie Action Figures</h1>
                    </div>
                </div> </div>

                <div data-aos="fade-right " data-aos-duration="700"> <div className='w-[20rem] h-[20rem] relative hover:-translate-y-2 duration-300 rounded-xl'>
                    <img className='object-cover h-full rounded-2xl' src={img4} alt="" />
                    <div className='bg-gradient-to-b from-red-500 to-blue-500 rounded-2xl text-white absolute inset-0 opacity-0 hover:opacity-70 '>
                        <h1 className='text-center mt-40 font-extrabold text-2xl'>Dragon Ball Z Action Figures</h1>
                    </div>
                </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="700"> <div className='w-[20rem] h-[20rem] relative hover:-translate-y-2 duration-300 rounded-xl'>
                    <img className='object-cover h-full rounded-2xl' src={img5} alt="" />
                    <div className='bg-gradient-to-b from-white to-orange-500 rounded-2xl text-white absolute inset-0 opacity-0 hover:opacity-70 '>
                        <h1 className='text-center mt-40 font-extrabold text-2xl'>Naruto Action Figures</h1>
                    </div>
                </div>  </div>


                <div data-aos="fade-left" data-aos-duration="700"> <div className='w-[20rem] h-[20rem] relative hover:-translate-y-2 duration-300 rounded-xl'>
                    <img className='object-cover h-full rounded-2xl' src={img6} alt="" />
                    <div className='bg-gradient-to-b from-red-500 to-yellow-500 rounded-2xl text-white absolute inset-0 opacity-0 hover:opacity-70 '>
                        <h1 className='text-center mt-40 font-extrabold text-2xl'>MARVEL Action Figures</h1>
                    </div>
                </div> </div>

            </div>

        </div>
    );
};

export default GallerySection;