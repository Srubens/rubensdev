"use client"
import CardAbout from "@/components/section-hero/CardAbout";
import CardHero from "@/components/section-hero/CardHero";
import CardSlide from "@/components/section-hero/CardSlide";
import Differentials from "@/components/section-hero/Differentials";
import Footer from "@/components/section-hero/Footer";
import Header from "@/components/section-hero/Header";
import SlideTags from "@/components/section-hero/SlideTags";
import { useRef } from "react";


function Home() {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  return (
    <>
      <Header sectionRefs={sectionRefs} />
      <CardHero/>
      <SlideTags/>
      <Differentials/>
      <CardAbout 
        sectionRefs={sectionRefs[1]}
      />
      <CardSlide />
      <Footer/>
    </>
  );
}

export default Home;