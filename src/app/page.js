import CardAbount from "@/components/section-hero/CardAbout";
import CardHero from "@/components/section-hero/CardHero";
import CardSlide from "@/components/section-hero/CardSlide";
import Differentials from "@/components/section-hero/Differentials";
import SlideTags from "@/components/section-hero/SlideTags";


function Home() {
  return (
    <>
      <CardHero/>
      <SlideTags/>
      <Differentials/>
      <CardAbount/>
      <CardSlide/>
    </>
  );
}

export default Home;