import { Link, useRouteError } from "react-router-dom";

import Lottie from "lottie-react";
import animation from '../assets/error/error-404.json'

const ErrorElement = () => {
    const { error} = useRouteError()
    return (
        <div className="flex flex-col items-center justify-center">
            <Lottie className="w-[40rem] h-[35rem]" animationData={animation} loop={true} />
            <div>
                <p className="text-red-500 text-xl">{error?.message}</p>
                <Link to='/'><button className="btn-red">Back To Home Page</button></Link>
            </div>
        </div>
    );
};

export default ErrorElement;