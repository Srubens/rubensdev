"use client"
import CardDifferentials from "../CardDifferentials";
import ContainerGrid from "../ContainerGrid";
import TitleParagrap from "../TitleParagrap";
import { TfiWorld } from "react-icons/tfi";
import { IoTrophySharp } from "react-icons/io5";
import { MdAnalytics } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function Differentials() {

    const textTitleRef = useRef(null)
    const cardsRef = useRef([]);

    useEffect(()=>{
        const textTitle = textTitleRef.current
        const cardRotate = cardsRef.current
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:textTitle,
                // markers:true,
                start:'-=10% center',
                scrub:true
            }
        })
        
        tl.fromTo(textTitle,{
            opacity:0,
            y:20
        },{
            opacity:1,
            y:0
        }).fromTo(cardRotate,{
            rotateY: 180, // Começa virado
            opacity: 0,
            transformPerspective: 1000, // Define a perspectiva correta
        },{
            rotateY: 0, // Fica de frente
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
            stagger: 0.3, // Anima os elementos um por um
            scrollTrigger: {
            trigger: ".cards",
            start: "top-=70% center",
            end:"15%",
            scrub: true,
            // markers: true,
            },
        })
    },[])

    const tagsCards =[
        {
            title:'Presença Online',
            subtitle:'Estar sempre disponível, permitindo que clientes ou visitantes te encontrem a qualquer hora.',
            component:TfiWorld,
        },
        {
            title:'Credibilidade e Profissionalismo',
            subtitle:'Ter um site bem estruturado transmite mais confiança do que apenas um perfil em rede sociais.',
            component:IoTrophySharp,
        },
        {
            title:'Controle Total do Conteúdo',
            subtitle:'No seu site, você define o design, estrutura e conteúdo sem restrições.',
            component:MdAnalytics,
        },
        {
            title:'Melhor Posicionamento no Google (SEO)',
            subtitle:'Com técnicas de SEO para aparecer nas buscas do Google, para atrair tráfego orgânico.',
            component:IoSearchOutline,
        },
        {
            title:'Vantagem no Mercado',
            subtitle:'Diferencie-se ao oferecer produtos e serviços que sejam diferentes dos demais, bem mais otimizado e profissional.',
            component:IoRocketOutline,
        },
        {
            title:'Criação de campanhas',
            subtitle:'Você pode criar uma campanha de marketing personalizada de novos clientes potenciais, aumentando suas vendas ou audiência',
            component:MdMarkEmailRead,
        },
    ]

    return (
        <section className="p-5 @laptop:p-20 bg-white" >
            <ContainerGrid>
                <div ref={textTitleRef} >
                    <TitleParagrap
                        
                        title="Diferenciais para ter um protudo digital">
                        <p className="text-base text-gray-600" ><strong className="text-gray-900" >Transformando design</strong> em página para a web com agilidade, qualidade e <strong className="text-gray-900" >alta perfomance</strong>.</p>
                    </TitleParagrap>
                </div>
            </ContainerGrid>
            <div className="cards mt-16 perspective-1000">
                <ContainerGrid className="grid @tablet:grid-cols-2 @tablet:gap-4 @laptop:grid-cols-3 @laptop:gap-8 perspective-1200" >
                    {tagsCards.map(({title, subtitle, component, ref}, index)=>{
                        const IconComponent = component
                        return(
                            <CardDifferentials
                                key={index}
                                title={title}
                                subtitle={subtitle}
                                ref={(el) => (cardsRef.current[index] = el)}
                                className="backface-hidden transform rotate-y-180"
                            >
                                <IconComponent
                                    color="#000"
                                    size={24}
                                />
                            </CardDifferentials>
                        )
                    }) }
                </ContainerGrid>
            </div>
        </section>
    );
}

export default Differentials;