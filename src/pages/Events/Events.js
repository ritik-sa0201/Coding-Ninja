import React, { useState } from "react";
import style from "./Events.module.css"
import { DecoderText } from "../../Components/DecoderText/DecoderText";
import { Tiles } from "../../Components/Tiles/Tiles";
import EventCard from "../../Components/EventCard/EventCard";
// import ParticleBG from "../ParticleBG/ParticleBG";

const image1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png";
const image2 = "https://pbs.twimg.com/media/EuCnGnLVEAMShfA?format=jpg&name=medium";
const image3 = "https://pbs.twimg.com/media/EuCnGnMVgAE4FD7?format=jpg&name=medium";
const image4 = "https://pbs.twimg.com/media/EuCnOAjVoAE5RQe?format=jpg&name=medium";
const image5 = "https://pbs.twimg.com/media/F4YOCnYXMAA1L8s?format=jpg&name=large";

const slides = [image1, image2, image3, image4, image5];
const slides2 = [image5, image4, image3, image2, image1];

export default function Events() {
    const [active, setactive] = useState(false);
    
    function next() {
        setactive(true);
    }
    function prev() {
        setactive(false);
    }
    return (
        <>
            <div>
                <Tiles slides={slides} />
            </div>

            <div class="mx-auto flex flex-col items-center justify-center bg-gray-900 px-0 pb-[20vh]">

                <div id="events" className="bg-gray-800 w-screen">
                    <div
                        className={`md:text-7xl text-5xl text-white bg-clip-text text-center font-extrabold md:mb-10 mb-5 pb-2 md:pt-20 mt-10 ${style.heading}`}
                    >
                        <DecoderText
                            text="EVENTS"
                            start={true}
                        />
                    </div>
                    
                    <div className="pb-5">
                        <div className="text-white text-center md:text-xl">
                            Stay tuned new Events loading...
                        </div>
                    </div>
                </div>


                <div className="w-full flex items-center justify-center h-16 bg-gray-800">
                    <div onClick={prev} className={"w-1/2 cursor-pointer h-full flex justify-center items-center max-w-sm transition-all text-center text-2xl "+(active ? "text-white" : "text-orange-400")}><span>upcoming</span></div>
                    <div onClick={next} className={"w-1/2 cursor-pointer h-full flex justify-center items-center max-w-sm transition-all text-center text-2xl "+(active ? "text-orange-400" : "text-white")}><span>previous</span></div>
                </div>
                <div className={"h-1 w-1/2 max-w-sm transition-all rounded bg-orange-400 " + (active ? "translate-x-[50%]" : "translate-x-[-50%]")}></div>


                {active ? slides2.map((slide, i) => <EventCard key={i} id={i} src={slide} />) :
                slides.map((slide, i) => <EventCard key={i+6} id={i+6} src={slide} />)}

            </div>

        </>
    );
}
