"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper/modules'
import Card from "./Card";
import 'swiper/css'
import ContainerGrid from "./ContainerGrid";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useRef } from "react";

import MiniTag from "./MiniTag";



function CarrouselCard({data}) {
    const swiperRef = useRef()

    return (
        <>
          <div >
          <ContainerGrid className="overflow-hidden" >
            <Swiper
              modules={[Navigation]}
              loop={true}
              onBeforeInit={((swiper) => swiperRef.current = swiper)}
              breakpoints={{ 
                    320:{
                        slidesPerView:1,
                        spaceBetween:24
                    },
                    640:{
                        slidesPerView:1,
                        spaceBetween:24
                    },
                    1024:{
                        slidesPerView:1,
                    },
                    1250:{
                        slidesPerView:1,
                    },
                 }}
            >
                {data.map(({title, paragrafo, url, img,tags}, index) =>{
                return(
                    <SwiperSlide key={index}>
                        <Card
                            title={title}
                            paragrafo={paragrafo}
                            url={url}
                            img={img}
                        >
                        <div className="flex flex-wrap gap-2">
                            {tags.map(({ component: Icon, label }, tagIndex) => (
                                <MiniTag key={tagIndex} title={label} icon={Icon} />
                            ))}

                        </div>
                        </Card>
                    </SwiperSlide>
                )})}
            </Swiper>
            </ContainerGrid>
            <ContainerGrid>
                <div className="mt-10 flex justify-end gap-6 opacity-0 @laptop:opacity-100" >
                    <button 
                      onClick={(() =>swiperRef.current?.slidePrev())}
                    >
                        <FaLongArrowAltLeft 
                            color="#653DF5"
                        />
                    </button>
                    <button 
                      onClick={(() =>swiperRef.current?.slideNext())}
                    >
                        <FaLongArrowAltRight 
                            color="#653DF5"
                        />
                    </button>
                </div>
            </ContainerGrid>
          </div>
        </>
    );
}

export default CarrouselCard;