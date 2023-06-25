import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../Scripts/Scroll.script"
import webAc from "../../Assets/webAca.png"
import e2c from "../../Assets/e2c.png"
import nurserie from "../../Assets/nurserie.png"
import design from "../../Assets/logo_lignes.svg"

export default function MainContent ()
{


    return (
        <div className="pt-10 bg-stone-400">
            <h2 className="text-white text-center text-3xl font-PlayFair p-2 border w-fit mx-auto rounded-3xl mb-10">A propos de moi</h2>
            

                <div className="flex flex-col elements p-10">
                    
                <Carousel showThumbs={false}>

                    <div className="flex flex-col lg:flex-row m-5 gap-4 ">
                        
                        <div className="border flex flex-col lg:w-3/4">
                            
                            <div className="border md:border-none">
                                <div className="flex gap-8 p-2 text-base lg:text-2xl text-stone-700 font-Indie">
                                    <p className="self-center">Novembre 2022 - Novembre 2024</p>
                                    <h3>Web@cadémie par Epitech</h3>
                                </div>
                                <div className="p-2 text-sm lg:text-lg mb-2 font-PlayFair">
                                    <p>-Formation concentrée sur le développement Web. </p>
                                    <p>-Pédagogie par projet : résolution de problèmes, de cahier des charges, afin de produire un projet concret </p>
                                    <p>Exemples de projet : My_twitter : reproduire les fonctionnalités de base de Twitter (tweet, retweet, follow...) par groupe de 4 en php + utilisation de Tailwind</p>
                                </div>
                            </div>

                            <div className="border md:border-none">
                                <div className="flex gap-8 p-2 text-lg lg:text-2xl text-stone-700 font-Indie">
                                    <p className="self-center">Mai 2022 - Septembre 2022</p>
                                    <h3>Ecole de la 2ème chance à Roubaix</h3>
                                </div>
                                <div className="p-2 text-sm lg:text-lg mb-2 font-PlayFair">
                                    <p>-Initiation aux métiers du numériques (développeur web, mais aussi monteur vidéo, développeur de jeux vidéos, ingénieur électronique ) </p>
                                </div>
                            </div>

                            <div className="border md:border-none">
                                <div className="flex gap-8 p-2 text-lg lg:text-2xl text-stone-700 font-Indie">
                                    <p className="self-center">Avril 2022 - Mai 2022 </p>
                                    <h3>Nurserie Numérique à Lomme</h3>
                                </div>
                                <div className="p-2 text-sm lg:text-lg mb-2 font-PlayFair">
                                    <p>-Initiation au métier de développeur web : Découverte de méthode agile (la méthode Scrum), utilisation de Figma et Miro pour l'UX,ainsi que Trello afin de s'organiser</p>
                                    <p>-Initiation aux bases du développement : HTML, CSS, JS, SQL,  début d'un workflow Git avec 10 participants (afin de gérer les conflits)</p>
                                </div>
                            </div>

                            <div className="border md:border-none">                    
                                <div className="flex gap-8 p-2 text-lg lg:text-2xl text-stone-700 font-Indie">
                                    <p className="self-center">Octobre 2020 - Octobre 2021</p>
                                    <h3>Formation de Design en distanciel </h3>
                                </div>
                                <div className="p-2 text-sm lg:text-lg mb-2 font-PlayFair">
                                    <p>-Découverte de la perspective avec projet (comme par exemple devoir dessiner l'intérieur d'une chambre)</p>
                                    <p>-Découverte de l'Histoire de l'Art, basé sur le système de MOOC (Massive open online course)</p>
                                </div>
                            </div>

                            <div className="flex gap-8 p-2 text-lg lg:text-2xl text-stone-700 font-Indie border md:border-none">
                                <p className="self-center">Septembre 2018 - Juillet 2019</p>
                                <h3>Bac Scientifique mention Assez bien</h3>
                            </div>
                            
                        </div>
                        
                        <div className="border lg:w-1/4 text-center flex flex-col justify-evenly">
                            <img className="aboutImg mb-2 p-2" src={webAc} alt="logo-webacademie"></img>
                            <img className="aboutImg w-28 mx-auto p-2" src={e2c} alt="logo-e2c"></img>
                            <img className="aboutImg p-2 h-28 mx-auto" src={nurserie} alt="logo-nurserie"></img>
                            <img className="aboutImg p-2 h-28 mx-auto" src={design} alt="logo-formation"></img>
                        </div>

                    </div>
                    
                    <div className="flex flex-col lg:flex-row m-5 gap-4">

                        <div className="border flex flex-col lg:w-1/4">
                            <h1>Compétences</h1>
                        </div>
                        <div className="border lg:w-3/4">
                            <h2>Mes compétences</h2>
                        </div>

                    </div>

                    <div className="flex flex-col lg:flex-row m-5 gap-4">

                        <div className="border flex flex-col lg:w-3/4">
                            <h1>Info 1</h1>
                        </div>
                        <div className="border lg:w-1/4">
                            <h2>Content 1</h2>
                        </div>
                    
                    </div>

                </Carousel>
                
            </div>
        
        </div>
    )
}