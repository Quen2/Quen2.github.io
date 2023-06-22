import React, {useState} from "react";
import pp from "../Assets/pp.jpg"
import '../Scripts/Img.script'
import Navbar from "../Components/Widget/Navbar";
import Catchphrase from "../Components/Index/Catchphrase";
import MainContent from "../Components/AboutMe/Maincontent";
import TransitionBetweenSection from "../Components/Widget/TransitionBetweenSection";

export default function Index() 
{
    const [state, setState] = useState(null)

    function handleClick(e) 
    {
        e.target.parentNode.classList.add('zoom');
        setTimeout(() => {
            setState('home')
        }, 1500);
    }

    return (
        state === null
        ?
        <div className="w-screen h-screen flex bg-stone-800">
            <div className="m-auto self-center w-1/2 h-1/2 bg-stone-600 rounded-3xl border border-stone-900">
                <h1 className="text-center mt-5 text-white text-3xl font-Indie mb-2">Bonjour</h1>
                <img src={pp} className="w-20 h-20 xl:w-36 xl:h-36 rounded-full mx-auto xl:my-5 object-cover anim imgMaker cursor-pointer" alt="profilePicture"></img>
                <p className="text-lg xl:text-3xl text-white text-center font-Indie"> 
                    <span className="subtitle text-[42px]">Q</span>uentin Guidez
                </p>
                <p className="text-lg xl:text-3xl text-white text-center font-Indie mt-2">
                    <span className="mt-10"> Étudiant à Epitech, fan de design, je souhaiterais m'orienter développement Front-End</span>
                </p>
                <button className="w-3/5 xl:w-2/5 mt-2 mx-auto block rounded-3xl text-center  bg-stone-400 text-white 
                font-Indie" onClick={handleClick}>Me découvrir</button>
            </div>
        </div>
        :
        <div className="bg-stone-600 h-screen">
            <div className="flex flex-col fade relative">
                <Navbar />
                <Catchphrase />
                <TransitionBetweenSection />
                <MainContent />
            </div>
        </div>
    )    
}

