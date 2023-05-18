import Banner from "../../Components/Banner";
import GallerySection from "./GallerySection";
import ShopByCategory from "./ShopByCategory";
import es1 from '../../assets/Banner/extra-Section.jpg'

import es3 from '../../assets/Banner/es-3.jpg'


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <GallerySection></GallerySection>
            <ShopByCategory></ShopByCategory>
            <img className="mt-5" src={es1} alt="" />
            
            <img className="mt-5" src={es3} alt="" />
        </div>
    );
};

export default Home;