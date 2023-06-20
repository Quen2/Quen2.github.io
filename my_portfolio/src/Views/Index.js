import React, {useState} from "react";
import TableOfContent from "./TableOfContent";
import pp from "../Assets/pp.jpg"
import '../Scripts/imgManager.script'

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
            <div className=" m-auto self-center w-1/2 h-1/2 bg-stone-600 rounded-3xl border border-stone-900">
                <h1 className="text-center mt-5 text-white title">Bonjour</h1>
                <img src={pp} className="w-1/4 h-1/2 rounded-full mx-auto my-5 object-cover anim imgMaker" alt="profilePicture"></img>
                <p className="text-3xl text-white text-center">Ouais, c'est <span className="title">G</span>reg</p>
                <button className="w-fit h-auto  bg-stone-400 text-white" onClick={handleClick}>Me découvrir</button>
            </div>
        </div>
        :
        <div className="flex flex-col background animate-fade w-screen h-screen bg-stone-800">
            <TableOfContent />
        </div>
    )    
}

