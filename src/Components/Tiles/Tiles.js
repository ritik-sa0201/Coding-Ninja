import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import "swiper/css/autoplay";

const image1 = "/logo512.png";
const image2 = "/logo512.png";
const image3 = "/logo512.png";
const image4 = "/logo512.png";
const image5 = "/logo512.png";

const slides = [image1, image2, image3, image4, image5];

export const Tiles = () => {
    return (
        <Swiper
        pagination={{
          type: "bullets",
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        loop={true}
        speed={1000}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
      >
            {slides.map((slide) => (
                <SwiperSlide className="slides">
                    <img src={slide} className="imgMain" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
