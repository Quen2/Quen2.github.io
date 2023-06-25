import React, {useState} from "react";
import pp from "../Assets/pp.jpg"
import '../Scripts/Img.script'
import Navbar from "../Components/Widget/Navbar";
import Catchphrase from "../Components/Index/Catchphrase";
import MainContent from "../Components/AboutMe/Maincontent";
import Projects from "../Components/AboutMe/Projects";
import Hobbies from "../Components/AboutMe/Hobbies";
import Contact from "../Components/AboutMe/Contact";
import Footer from "../Components/AboutMe/Footer";

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
                <div className="bg-stone-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a8a29e" fillOpacity="1" d="M0,160L80,181.3C160,203,320,245,480,245.3C640,245,800,203,960,181.3C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
                <MainContent />
                <div className="bg-stone-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#57534e" fillOpacity="1" d="M0,160L80,181.3C160,203,320,245,480,245.3C640,245,800,203,960,181.3C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
                <Projects />
                <div className="bg-stone-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a8a29e" fillOpacity="1" d="M0,160L80,181.3C160,203,320,245,480,245.3C640,245,800,203,960,181.3C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
                <Hobbies />
                <div className="bg-stone-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e7e5e4" fillOpacity="1" d="M0,160L80,181.3C160,203,320,245,480,245.3C640,245,800,203,960,181.3C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
                <Contact />
                <div className="bg-stone-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,160L80,181.3C160,203,320,245,480,245.3C640,245,800,203,960,181.3C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
                <Footer />
                <div className="w-full my-5">
                    <p className="text-center">© 2023 Quentin Guidez. Tous droits réservés. </p>
                </div>
            </div>
        </div>
    )    
}

