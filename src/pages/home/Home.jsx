import Banner from "../../Components/Banner";
import GallerySection from "./GallerySection";
import ShopByCategory from "./ShopByCategory";
import Partners from "./Partners";
import Support from "./Support";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <GallerySection></GallerySection>
            <ShopByCategory></ShopByCategory>
            <Partners></Partners>
            <Support></Support>
        </div>
    );
};

export default Home;