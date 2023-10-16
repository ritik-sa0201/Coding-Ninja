import React from "react";
import style from "./Events.module.css"
import { DecoderText } from "../DecoderText/DecoderText";
import { Tiles } from "../Tiles/Tiles";
import EventCard from "../EventCard/EventCard";

const image1 = "https://pbs.twimg.com/media/F3PioN_WoAA9Qdj?format=jpg&name=medium";
const image2 = "https://pbs.twimg.com/media/EuCnGnLVEAMShfA?format=jpg&name=medium";
const image3 = "https://pbs.twimg.com/media/EuCnGnMVgAE4FD7?format=jpg&name=medium";
const image4 = "https://pbs.twimg.com/media/EuCnOAjVoAE5RQe?format=jpg&name=medium";
const image5 = "https://pbs.twimg.com/media/F4YOCnYXMAA1L8s?format=jpg&name=large";

const slides = [image1, image2, image3, image4, image5];

export default function Events() {
    return (
        <div>
            
            <Tiles slides={slides} />

            <div class="mx-auto bg-gray-900 flex flex-col items-center justify-center px-8 pb-[20vh]">

            <div id="events">
                <div
                    className={`md:text-7xl text-5xl text-transparent bg-clip-text text-center font-extrabold md:mb-10 mb-5 pb-2 md:pt-20 mt-10 ${style.heading}`}
                >
                    <DecoderText
                        text="EVENTS"
                        start={true}
                    />
                </div>
                
            </div>

            <div className="pb-5">
                <div className="text-white text-center md:text-xl">
                    Stay tuned new Events loading...
                </div>
                <div className="absolute right-0 bg-black">
                    <img loading="lazy" alt="" />
                </div>
            </div>

            
            {slides.map(slide => <EventCard src={slide} />)}

        </div>

        </div>
    );
}
