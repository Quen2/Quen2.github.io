import React, {useState} from "react";
import pp from "../Assets/pp.jpg"
import '../Scripts/Img.script'
import Navbar from "../Components/Widget/Navbar";

export default function Index() 
{
    const [state, setState] = useState(null)

    function handleClick(e) 
    {
        e.target.parentNode.classList.add('zoom');
        setTimeout(() => {
            setState('home')
        }, 2000);
    }

    return (
        state === null
        ?
        <div className="w-screen h-screen flex bg-stone-800">
            <div className="m-auto self-center w-1/2 h-1/2 bg-stone-600 rounded-3xl border border-stone-900">
                <h1 className="text-center mt-5 text-white text-3xl font-Indie">Bonjour</h1>
                <img src={pp} className="w-32 h-32 xl:w-48 xl:h-48 rounded-full mx-auto my-5 object-cover anim imgMaker cursor-pointer" alt="profilePicture"></img>
                <p className="text-3xl xl:text-2xl text-white text-center font-Indie">
                    <span className="subtitle">Q</span>uentin Guidez
                    <p className="mt-4">Étudiant à Epitech, fan de design, je souhaiterais m'orienter développement Front-End</p>
                </p>
                <button className="w-3/5 xl:w-2/5 mt-10 mx-auto block rounded-3xl text-center  bg-stone-400 text-white 
                font-Indie" onClick={handleClick}>Me découvrir</button>
            </div>
        </div>
        :
        <div className="flex flex-col background fade w-screen h-screen bg-stone-600">
            <Navbar />
            <p className="text-3xl text-white text-center font-PlayFair">Ouais c'est <span className="subtitle">Greg</span></p>
        </div>
    )    
}

