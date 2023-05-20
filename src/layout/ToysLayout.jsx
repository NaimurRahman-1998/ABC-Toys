import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeaderLine from "../Components/HeaderLine";

const ToysLayout = () => {
    return (
        <div>
            <HeaderLine></HeaderLine>
            <div className="mx-40">
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ToysLayout;