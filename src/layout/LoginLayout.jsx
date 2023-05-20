import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeaderLine from "../Components/HeaderLine";


const LoginLayout = () => {
    return (
        <div>
            <HeaderLine></HeaderLine>
            <div className="mx-48">
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default LoginLayout;