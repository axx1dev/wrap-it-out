import React, { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCreative, Navigation, Lazy } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "swiper/css/lazy";
import { useSelector } from "react-redux";
import SliderBackground from "./SliderBackground";

const MainSlider = () => {
    const imagesMainSlider = useSelector(state => state.mainSlider)

    return (
        <div>
            <Swiper
                onSlideChange={(slide) => console.log({slide})}
                onSwiper={(swiper) => console.log(swiper)}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                    },
                    next: {
                    translate: ["100%", 0, 0],
                    },
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                grabCursor={true}
                modules={[EffectCreative, Pagination, Navigation, Lazy]}
                className="mySwiper"
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                lazy={true}
            >
                {imagesMainSlider.map(item => <SwiperSlide key={item.id}><SliderBackground urlImage={item.image} title={item?.title} description={item?.description}/></SwiperSlide>)}
            </Swiper>
        </div>
    )
}

export default MainSlider