
import Image from "next/image";
import bgCases from '@/assets/bg-cases.png'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaGulp } from "react-icons/fa";
import MiniTag from "./MiniTag";

function Card({title,children, paragrafo, url, img}) {


    return (
        <div className=" flex gap-10 @laptop:gap-28 flex-col @laptop:items-center overflow-hidden justify-center @laptop:p-5 @laptop:flex-row " >
            <div className="overflow-hidden rounded-md @laptop:rounded-md" >
                <Image 
                    src={img}
                    alt="bg-cases"
                    className="w-full object-cover rounded-md @laptop:rounded-md @laptop:w-cardslide transition-transform duration-300 hover:scale-110" 
                />
            </div>
            <div className="max-w-96 w-full" >
               <h5 className="text-2xl text-black mb-6" >{title}</h5>
               <p className="text-base mt-8 mb-8 text-black" >
                {paragrafo}
               </p> 
               <div className="flex flex-col @laptop:flex-row gap-4 text-black mb-16" >
                   {children}
               </div>
               
               <a href={url} target="_blank" className="text-purple-primary uppercase text-base font-normal tracking-[3px]" >ver projeto</a>
            </div>
        </div>
    );
}

export default Card;