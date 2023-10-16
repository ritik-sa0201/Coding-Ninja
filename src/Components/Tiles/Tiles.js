import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/autoplay";

export const Tiles = ({slides}) => {
    function goToTop(id) {
        const elementToScrollTo = document.getElementById(id);
        const container = document.getElementById('root');
        container.scrollTop = elementToScrollTo.offsetTop - container.offsetTop + (elementToScrollTo.offsetHeight/2);
    };
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
            {slides.map((slide, i) => (
                <SwiperSlide>
                    <img onClick={()=>goToTop("event"+i)} src={slide} className="imgMain" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
