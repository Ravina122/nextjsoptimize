import { useState } from 'react';
import { ClipLoader } from "react-spinners";

const Loader = ({
    size = 75,
    verticalPosition,
    horizontalPosition,
    fullpage=true
}) => {
    let [color, setColor] = useState("#000");
    return (
        <div className={`mx-auto text-lg justify-center ${fullpage ? "z-[1000000] bg-white-color w-[100vw] h-[100vh] fixed" : ''} flex items-center  top-0 left-0 ${verticalPosition} ${horizontalPosition}`}>
            <ClipLoader color={color}
                // loading={loading}
                size={size}
                aria-label="Loading Spinner"
                data-testid="loader"

            />
        </div>
    )
}

export default Loader