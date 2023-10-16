import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import "swiper/css/autoplay";

export const Tiles = ({slides}) => {
    return (
        <Swiper
        pagination={{
          type: "bullets",
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        speed={1000}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
      >
            {slides.map((slide) => (
                <SwiperSlide>
                    <img src={slide} className="imgMain" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
