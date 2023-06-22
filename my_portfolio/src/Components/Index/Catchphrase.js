import React, {useState} from "react";
import Carousel from "./Carousel";
export default function Catchphrase ()
{

    const [state, setState] = useState(null)

    setTimeout(() => {
        setState('ready')
    }, 1000);

    return (
        state 
        ?
        <div className="catch">
            <div className="border w-3/4 lg:w-1/2 mx-auto p-4 rounded-3xl bg-stone-400 text-stone-800 mb-8">
                <p className="w-fit m-auto text-xl lg:text-3xl font-PlayFair text-center">Bienvenue</p>
                <p className="w-fit m-auto text-xl lg:text-3xl font-PlayFair mt-10 text-center">Sur le portfolio de Quentin Guidez</p>
            </div>
            <Carousel />
        </div>
        :
        <div></div>
    )
}