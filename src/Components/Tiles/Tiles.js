import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export const Tiles = ({ slides }) => {
    return (
        <Swiper
            pagination = {{ type: "bullets" }}
            navigation = { true }
            modules    = {[ Pagination, Navigation, Autoplay ]}
            loop       = { true }
            speed      = { 1000 }
            autoplay   = {{ disableOnInteraction: false }}
        >
            {slides.map(({image}, i) => (
                <SwiperSlide key={i}>
                    <img src={image} className="imgMain" alt="" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
