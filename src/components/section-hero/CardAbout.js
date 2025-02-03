"use client"
import Image from "next/image";
import ContainerGrid from "../ContainerGrid";
import iconLogo from '@/assets/icon-logo1.png'
import figureAbout from '@/assets/figure-about.png'
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import MiniTag from "../MiniTag";

gsap.registerPlugin(ScrollTrigger)

function CardAbount() {
    const tags = [
        {
            title:"Github",
            icon:FaGithub
        },
        {
            title:"Linkedin",
            icon:FaLinkedin
        },
    ]
    /**
   * GSAP
   */
  const textLeftRef = useRef(null)
  const textRightRef = useRef(null)

  useEffect(()=>{
    const textLeft = textLeftRef.current
    const textRight = textRightRef.current
    
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:textLeft,
            // markers:true,
            start:'-=40% center',
            end:"60%",
            scrub:true
        }
    })
    tl.fromTo(textLeft,{
        opacity:0,
        x:-35
    },{
       opacity:1,
       x:0,
       duration:1
    }).fromTo(textRight,{
        opacity:0,
        x:35
    },{
       opacity:1,
       x:0,
       duration:1
    },">-1")
  },[])

    return (
        <section className="about @laptop:p-20 bg-white" >
            <ContainerGrid className="flex flex-col @tablet:flex-row @laptop:justify-between items-start @laptop:gap-20" >
                <div
                  ref={textLeftRef}
                  className="relative @laptop:w-aboutImage m-auto m-full" >
                    <Image
                        src={figureAbout}
                        alt="image"
                        className="w-full object-cover"
                    />
                    <div className="opacity-0 @tablet:opacity-100 box w-20 h-20 bg-purple-primary absolute top-1/2 flex justify-center items-center left-48 @desktop:left-[28.25rem] @laptop:left-[15.25rem] ">
                        <Image
                            src={iconLogo}
                            alt="image logo"
                            className="w-14 h-14"
                        />
                    </div>
                </div>
                <div 
                  ref={textRightRef}
                className="@laptop:w-cardabout mt-14 mb-6 font-semibold font-inter flex flex-col items-center @laptop:items-start @tablet:w-96 @tablet:items-start" >
                    <h5 className="text-gray-900 text-xl sm:text-sm" >Hi, I'm Rubens Filipe 👋🏻</h5>
                    <h3 className="text-gray-900 font-inter text-4xl font-bold mb-1 sm:text-2xl" >Rubens Filipe</h3>
                    <p className="text-gray-900 text-xl mb-10 sm:text-sm" >Desenvolvedor</p>
                    <p className="text-gray-600 text-xl font-inter mb-6 sm:text-sm" >Sou formado em Sistema de Informação e venho me desenvolvendo na area a longo deste tempo. Meus projetos na área de programação me fazem evoluir cada vez mais, e como consequência do amor pelo que faço, desenvolver se tornou meu hobby favorito.</p>
                    <div className="flex flex-wrap gap-4" >
                        { tags.map(({title, icon},index)=>(
                            <Link href="#" target="_blank" className="text-gray-900 text-sm" key={index} >
                                <MiniTag
                                    title={title}
                                    icon={icon}
                                />
                            </Link>

                        )) }
                    </div>
                </div>
            </ContainerGrid>
        </section>
    );
}

export default CardAbount;