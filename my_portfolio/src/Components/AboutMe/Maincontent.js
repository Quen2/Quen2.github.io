import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Element } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../Scripts/Scroll.script"
import webAc from "../../Assets/webAca.png"
import nurserie from "../../Assets/nurserie.png"
import design from "../../Assets/logo_lignes.svg"
import html from "../../Assets/html5.svg"
import css from "../../Assets/css.svg"
import js from "../../Assets/js.svg"
import php from "../../Assets/php.svg"
import bootstrap from "../../Assets/bootstrap.svg"
import tailwind from "../../Assets/tailwindcss.svg"
import react from "../../Assets/react.svg"
import reactNative from "../../Assets/react-native.svg"
import angular from "../../Assets/angular.svg"
import postman from "../../Assets/postman.svg"
import symfony from "../../Assets/symfony.svg"
import nodeJs from "../../Assets/nodeJs.svg"
import mongoDb from "../../Assets/mongoDb.svg"
import laravel from "../../Assets/laravel.svg"
import gimp from "../../Assets/gimp.svg"
import sql from "../../Assets/sql.svg"


export default function MainContent ()
{


    return (
        <Element name="aboutMe" className="pt-10 bg-stone-400">
            <h2 className="text-white text-center text-3xl font-PlayFair p-2 border w-fit mx-auto rounded-3xl mb-10">A propos de moi</h2>
            

                <div className="flex flex-col elements p-10">
                    
                <Carousel showThumbs={false}>


                    <div className="flex flex-col lg:flex-row m-5 gap-4 ">
                    
                        <div className="border flex flex-col lg:w-3/4">
                    
                        <h3 className="text-3xl font-PlayFair my-4 text-stone-700">Mon parcours</h3>
                            
                            <div className="border md:border-none">
                                <div className="flex gap-8 p-2 text-base lg:text-2xl text-stone-700 font-Indie">
                                    <p className="self-center">Novembre 2022 - Novembre 2024</p>
                                    <h3>Web@cadémie par Epitech</h3>
                                </div>
                                <div className="p-2 text-xs lg:text-lg mb-2 font-PlayFair">
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
                                <div className="p-2 text-xs lg:text-lg mb-2 font-PlayFair">
                                    <p>-Initiation aux métiers du numériques (développeur web, mais aussi monteur vidéo, développeur de jeux vidéos, ingénieur électronique ) </p>
                                </div>
                            </div>

                            <div className="border md:border-none">
                                <div className="flex gap-8 p-2 text-lg lg:text-2xl text-stone-700 font-Indie">
                                    <p className="self-center">Avril 2022 - Mai 2022 </p>
                                    <h3>Nurserie Numérique à Lomme</h3>
                                </div>
                                <div className="p-2 text-xs lg:text-lg mb-2 font-PlayFair">
                                    <p>-Initiation au métier de développeur web : Découverte de méthode agile (la méthode Scrum), utilisation de Figma et Miro pour l'UX,ainsi que Trello afin de s'organiser</p>
                                    <p>-Initiation aux bases du développement : HTML, CSS, JS, SQL,  début d'un workflow Git avec 10 participants (afin de gérer les conflits)</p>
                                </div>
                            </div>

                            <div className="border md:border-none">                    
                                <div className="flex gap-8 p-2 text-lg lg:text-2xl text-stone-700 font-Indie">
                                    <p className="self-center">Octobre 2020 - Octobre 2021</p>
                                    <h3>Formation de Design en distanciel </h3>
                                </div>
                                <div className="p-2 text-xs lg:text-lg mb-2 font-PlayFair">
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
                            <img className="aboutImg p-2 h-28 mx-auto" src={nurserie} alt="logo-nurserie"></img>
                            <img className="aboutImg p-2 h-28 mx-auto" src={design} alt="logo-formation"></img>
                        </div>

                    </div>
                    
                    <div className="flex flex-col lg:flex-row m-5 gap-4">

                        <div className="border flex flex-col lg:w-1/4">
                            
                        <h3 className="text-3xl font-PlayFair my-4 text-stone-700">Mes compétences</h3>


                            <div className="border md:border-none">
                                <div className="flex gap-8 p-2 text-base lg:text-2xl text-stone-700 font-Indie text-center">
                                    <p>Langages utilisés</p>
                                </div>
                                <div className="p-2 text-sm lg:text-lg mb-2 font-PlayFair">
                                    <p>HTML | CSS & SASS | JS | PHP</p>
                                </div>
                            </div>

                            <div className="border md:border-none">
                                <div className="flex gap-8 p-2 text-lg lg:text-2xl text-stone-700 font-Indie">
                                    <p className="self-center">Frameworks utilisés : </p>
                                </div>
                                <div className="flex gap-8 p-2 text-lg lg:text-2xl text-stone-700 font-Indie">
                                    <p className="self-center">-Frameworks orientés Front-End : </p>
                                </div>
                                <div className="p-2 text-sm lg:text-lg mb-2 font-PlayFair">
                                    <p>Bootstrap | Tailwind | React | React Native | Angular</p>
                                </div>
                                <div className="flex gap-8 p-2 text-lg lg:text-2xl text-stone-700 font-Indie">
                                    <p className="self-center">-Frameworks orientés Back-End : </p>
                                </div>
                                <div className="p-2 text-sm lg:text-lg mb-2 font-PlayFair">
                                    <p>Node.js | Laravel | Symfony</p>
                                </div>
                            </div>

                            <div className="border md:border-none">
                                <div className="flex gap-8 p-2 text-lg lg:text-2xl text-stone-700 font-Indie">
                                    <p className="self-center"> Base de données </p>
                                </div>
                                <div className="p-2 text-sm lg:text-lg mb-2 font-PlayFair">
                                    <p>SQL | MongoDB (dans un contexte full-stack MERN)</p>
                                </div>
                            </div>

                            <div className="border md:border-none">
                                <div className="flex gap-8 p-2 text-lg lg:text-2xl text-stone-700 font-Indie">
                                    <p className="self-center"> Outils Tierces </p>
                                </div>
                                <div className="p-2 text-sm lg:text-lg mb-2 font-PlayFair">
                                    <p>Gimp | Postman</p>
                                </div>
                            </div>

                        </div>
                        <div className="border lg:w-3/4 flex flex-col justify-around gap-4 lg:gap-8">
                            
                            <div className="flex justify-around gap-3 self-center lg:gap-20">
                                <img src={html} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-HTML"></img>
                                <img src={css} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-CSS"></img>
                                <img src={js} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-JS"></img>
                                <img src={php} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-PHP"></img>
                            </div>

                            <div className="flex justify-around self-center lg:gap-20">
                                <img src={bootstrap} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-bootstrap"></img>
                                <img src={tailwind} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-tailwind"></img>
                                <img src={react} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-react"></img>
                                <img src={reactNative} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-react-native"></img>
                                <img src={angular} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-angular"></img>
                            </div>

                            <div className="flex justify-around self-center gap-3 lg:gap-20">
                                <img src={nodeJs} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-NodeJs"></img>
                                <img src={laravel} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-Laravel"></img>
                                <img src={symfony} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-Symfony"></img>
                            </div>

                            <div className="flex justify-around self-center lg:gap-20">
                                <img src={sql} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-SQL"></img>
                                <img src={mongoDb} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-mongoDb"></img>
                            </div>

                            <div className="flex justify-around self-center lg:gap-20">
                                <img src={gimp} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-Gimp"></img>
                                <img src={postman} className="w-10 h-10 lg:w-20 lg:h-20" alt="icon-Postman"></img>
                            </div>

                        </div>

                    </div>

                    <div className="flex flex-col lg:flex-row m-5 gap-4">

                        <div className="border flex flex-col lg:w-full">
                            
                            <h3 className="text-3xl font-PlayFair my-4 text-stone-700">Mes compétences Polyvalentes</h3>

                            <div className="border md:border-none">
                                <div className="flex gap-8 p-2 text-base lg:text-2xl text-stone-700 font-Indie text-center">
                                    <p>Gestion de projet</p>
                                </div>
                                <div className="p-2 text-sm lg:text-lg mb-2 font-PlayFair">
                                    <p>Pédagogie par Projets : Cahier des charges à remplir avec une deadline, points réguliers avec l'avancement du projet. Utilisation de la méthode agile Scrum</p>
                                </div>
                            </div>

                            <div className="border md:border-none">
                                <div className="flex gap-8 p-2 text-base lg:text-2xl text-stone-700 font-Indie text-center">
                                    <p>Résolution de problèmes</p>
                                </div>
                                <div className="p-2 text-sm lg:text-lg mb-2 font-PlayFair">
                                    <p>Résolution des charges demandées par le client, avec parfois des restrictions de techno, de fonctions à utiliser.</p>
                                </div>
                            </div>

                            <div className="border md:border-none">
                                <div className="flex gap-8 p-2 text-base lg:text-2xl text-stone-700 font-Indie text-center">
                                    <p>Collaboration | travail d'équipe & communication</p>
                                </div>
                                <div className="p-2 text-sm lg:text-lg mb-2 font-PlayFair">
                                    <p>Projets collaboratifs : Organisation par Trello, utilisation de Git. Discussions sur d'éventuels problèmes afin de les résoudre ensemble</p>
                                </div>
                            </div>

                            <div className="border md:border-none">
                                <div className="flex gap-8 p-2 text-base lg:text-2xl text-stone-700 font-Indie text-center">
                                    <p>Rigueur & attention aux détails</p>
                                </div>
                                <div className="p-2 text-sm lg:text-lg mb-2 font-PlayFair">
                                    <p>Respect des normes demandées : JsLint, W3C. Tests afin de garantir la fiabilité du projet </p>
                                </div>
                            </div>

                            <div className="border md:border-none">
                                <div className="flex gap-8 p-2 text-base lg:text-2xl text-stone-700 font-Indie text-center">
                                    <p>Création d'une documentation</p>
                                </div>
                                <div className="p-2 text-sm lg:text-lg mb-2 font-PlayFair">
                                    <p>Création de Readme afin de documenter le projet au vu d'un potentiel nouveau développeur</p>
                                </div>
                            </div>

                        </div>
                    
                    </div>

                </Carousel>
                
            </div>
        
        </Element>
    )
}