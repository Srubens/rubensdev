"use client"
import Link from "next/link";
import ContainerGrid from "../ContainerGrid";
import Image from "next/image";
import figure from "@/assets/figure.png"
import figureText from "@/assets/figure-text.png"
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function CardHero() {

    const url = "https://wa.me/5581985349872?text=Olá%20Rubens,%20eu%20gostaria%20de:%20"

  const texts = ["Front-End", "Desenvolvimento", "Web Designer"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deleteSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {

    const currentText = texts[index];

    if (!isDeleting && charIndex < currentText.length) {
      // Adicionando caracteres um por um
      const timeout = setTimeout(() => {
        setText(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === currentText.length) {
      // Aguarda antes de começar a apagar
      setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex > 0) {
      // Removendo caracteres um por um
      const timeout = setTimeout(() => {
        setText(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, deleteSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      // Quando terminar de apagar, troca para o próximo texto
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }
  }, [charIndex, isDeleting, index, texts]);

  /**
   * GSAP
   */
  const textLeftRef = useRef(null)
  const textRightRef = useRef(null)

  useEffect(()=>{
    const textLeft = textLeftRef.current
    const textRight = textRightRef.current
    
    const tl = gsap.timeline()
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
        <section className="card_hero p-4 text-center @laptop:p-20 @laptop:text-left ">
            <ContainerGrid className="flex flex-col @laptop:justify-between @laptop:flex-row items-start" >
                <div 
                  ref={textLeftRef}
                className="relative w-4/5 m-auto @laptop:w-2/4 @laptop:mt0 @desktop:w-cardhero @desktop:mt-24 mt-10" >
                    <h5 className="text-xl mb-6 font-poppins" ><span className="text-gray-500" >Hi, I'm</span> Rubens Filipe 👋🏻</h5>
                    <h1 className=" text-3xl @desktop:text-5xl font-bold @desktop:leading-[120%] mb-5" >
                    Especialista &nbsp;
                    <Image
                        src={figureText}
                        alt="figura com texto"
                        className="object-cover w-24 h-14 @laptop:mr-4"
                    />
                    em <br/> 
                    {text}
                    <span className="animate-blink">|</span>
                    </h1>
                    <p className="text-lg mb-16 @laptop:w-90 @desktop:w-cardtext mt-7 @laptop:mt-0" >
                    Trabalho com projetos front-end, websites e aplicações web.
                    Em constante aprendizado desenvolvendo minhas habilidades para criar soluções eficientes.
                    </p>
                    <div className="flex gap-4 items-center mb-8 justify-center @laptop:justify-start" >
                        <Link href={url} target="_blank" className="underline underline-offset-4" >Comçar um projeto
                        </Link>
                        <FaLongArrowAltRight
                            className="opacity-0 @laptop:opacity-100"
                        />
                    </div>
                </div>
                <div 
                  ref={textRightRef}
                className="flex mx-auto @laptop:ml-8 @laptop:mx-0 @laptop:items-end" >
                    <Image
                        src={figure}
                        alt="figure"
                        className="w-full object-cover"
                    />
                </div>
            </ContainerGrid>
        </section>
    );
}

export default CardHero;