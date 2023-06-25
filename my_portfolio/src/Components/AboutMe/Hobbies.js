import React from "react";
import { Element } from "react-scroll";

export default function Hobbies ()
{
    return (
        <Element name="contact" className="bg-stone-400">
            <h2 className="text-white text-center text-3xl font-PlayFair p-2 border w-fit mx-auto rounded-3xl mb-10">Mes activités</h2>
            <div className="flex flex-col lg:flex-row lg:justify-evenly gap-8">
                <div className="border  rounded-3xl flex-col p-4 card mx-4 lg:w-1/4"> 
                    <h2 className="text-center text-white font-Indie text-3xl">Les jeux vidéos</h2>
                    <p className="text-center text-white my-2 text-lg lg:text-xl font-PlayFair">Final Fantaisy XIV</p>
                    <p className="text-stone-200 font-PlayFair text-center">MMO (Massively Multiplayer Online) qui m'a pas mal accompagné, pendant 2 ans. J'y ai joué avec des joueurs que je ne connaissais pas, et j'ai évolué avec eux pendant cette période. Nous avons traversé de nombreuses épreuves, demandant une grande concentration, une stratégie efficace mais également une cohésion d'équipe. </p>
                </div> 
                <div className="border rounded-3xl flex-col p-4 card mx-4 lg:w-1/4"> 
                    <h2 className="text-center text-white font-Indie text-3xl">La lecture</h2>
                    <p className="text-center text-white my-2 text-lg lg:text-xl font-PlayFair">Manga & Manhwa</p>
                    <p className="text-stone-200 font-PlayFair text-center">Grand fan de ces univers, je suis devenu un grand lecteur. Mon genre préféré reste tout de même les mangas et les manhwa (manga mais coréen) sur l'univers du sport : (Hajime no Ippo, Ace no Diamond, The Boxer). Je trouve que se plonger dans un univers, voir le personnage principal évolué apporte une source de satisfaction et tranquilité d'esprit inégalée</p>
                </div>
                <div className="border rounded-3xl flex-col p-4 card mx-4 lg:w-1/4"> 
                    <h2 className="text-center text-white font-Indie text-3xl">La musique</h2>
                    <p className="text-center text-white my-2 text-lg lg:text-xl font-PlayFair">Tous les genres</p>
                    <p className="text-stone-200 font-PlayFair text-center">Passionné par cet univers, que ce soit dans mon travail ou chez moi, j'écoute constamment de la musique en tout genre. Passant par du rap Fr (Nekfeu, Jazzy Bazz) jusqu'à du Grunge (Nirvana) ou bien de la pop (Queen) et même du metal (Slipknot), je trouve que la musique est un lieu de relaxation, permettant une grande concentration dans n'importe quelle activité </p>
                </div> 
                <div className="border rounded-3xl flex-col p-4 card mx-4 lg:w-1/4"> 
                    <h2 className="text-center text-white font-Indie text-3xl">Langue parlée</h2>
                    <p className="text-center text-white my-2 text-lg lg:text-xl font-PlayFair">Anglais</p>
                    <p className="text-stone-200 font-PlayFair text-center">Ayant l'habitude de lire les mangas & manhwa en anglais (car la parution est plus rapide) je n'ai pas trop de difficulté à comprendre l'anglais. De plus, mon expérience dans les jeux me permet également de pouvoir échanger avec une personne</p>
                    <p className="text-stone-200 font-PlayFair text-center mt-2">Ainsi, je situerais mon niveau vers B2</p>
                </div> 
            </div>
        </Element>
    )
}