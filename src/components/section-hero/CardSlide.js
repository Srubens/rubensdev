"use client"
import CarrouselCard from "../CarrouselCard";
import ContainerGrid from "../ContainerGrid";
import TitleParagrap from "../TitleParagrap";
import nftboost from '@/assets/nftboost.png'
import godofwar from '@/assets/godofwar.png'
import blizzard from '@/assets/blizzard-page.png'
import bankbookst from '@/assets/bankboost.png'
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { FaGulp } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { useRef } from "react";

function CardSlide() {

    const sectionRef = useRef(null)

    const slide = [
        {
            title:'NFTBoost', 
            paragrafo:'Explore o universo digital de colecionáveis únicos. Projeto desenvolvido com NextJS, tailwindcss, gsap, swiperjs.', 
            url:'https://nftboost-zeta.vercel.app/',
            img:nftboost,
            tags:[
                {

                    component:FaReact, label:'Next JS'
                },
                {

                    component:RiTailwindCssFill, label:'Tailwind CSS'
                },
            ]
        },
        {
            title:'God of War', 
            paragrafo:'Explore o mundo épico de God of War Ragnarök. Descubra a jornada de Kratos e Atreus. Projeto desenvovido com html, scss, gulp, javascript, aos.', 
            url:'https://srubens.github.io/godofwar-codeboost/',
            img:godofwar,
            tags:[
                {

                    component:FaHtml5, label:'html5'
                },
                {

                    component:FaSass, label:'scss'
                },
                {

                    component:FaGulp, label:'gulp'
                },
                {

                    component:DiJavascript, label:'javascript'
                },
            ]
        },
        {
            title:'Blizzard', paragrafo:'Descubra os jogos épicos da Blizzard Entertainment, com novidades, atualizações e acesso aos seus títulos favoritos. Projeto desenvovido com html, scss, gulp, javascript, aos.', url:'https://srubens.github.io/blizzard-page/',
            img:blizzard,
            tags:[
                {

                    component:FaHtml5, label:'html5'
                },
                {

                    component:FaSass, label:'scss'
                },
                {

                    component:FaGulp, label:'gulp'
                },
                {

                    component:DiJavascript, label:'javascript'
                },
            ]
        },
        {
            title:'BankBoost', paragrafo:'Descubra o seu potencial financeiro com o BankBoost  - Abra sua conta agora. Projeto desenvovido com html, scss, gulp, javascript, aos.', url:'https://srubens.github.io/bankboost/',
            img:bankbookst,
            tags:[
                {

                    component:FaHtml5, label:'html5'
                },
                {

                    component:FaSass, label:'scss'
                },
                {

                    component:FaGulp, label:'gulp'
                },
                {

                    component:DiJavascript, label:'javascript'
                },
            ]
        },
    ]
    return (
        <section className="card_slide p-2 bg-white @laptop:p-20" id="section-1" ref={sectionRef} >
            <ContainerGrid>
                <TitleParagrap
                    title="Projetos"

                >
                <div className="flex items-center justify-center @laptop:justify-end">
                    <p className="text-base text-gray-600" >2024-2025</p>
                </div>
                </TitleParagrap>
            </ContainerGrid>
            <div className="mt-28" >
                <CarrouselCard
                    data={slide}
                />
            </div>
        </section>
    );
}

export default CardSlide;