import img1 from '../../assets/Partners/unimart.jpg'
import img2 from '../../assets/Partners/shopno.jpg'
import img3 from '../../assets/Partners/kids.jpg'
import img4 from '../../assets/Partners/well.jpg'
import img5 from '../../assets/Partners/lavender.jpg'
import img6 from '../../assets/Partners/extra-Section.jpg'
const Partners = () => {
    return (
        <div className="mt-16">
            <h1 className="fontTitle text-red-500 text-center">Retail Partners</h1>

            <div className='lg:flex mt-8 px-16 justify-between'>
                <img className='w-[9rem]' src={img1} alt="" />
                <img className='w-[9rem]' src={img2} alt="" />
                <img className='w-[9rem]' src={img3} alt="" />
                <img className='w-[9rem]' src={img4} alt="" />
                <img className='w-[9rem]' src={img5} alt="" />
            </div>

            <div className='mt-20'>
            <h1 className="fontTitle text-red-500 text-center">Online Partners</h1>
                <img src={img6} alt="" />
            </div>
        </div>
    );
};

export default Partners;