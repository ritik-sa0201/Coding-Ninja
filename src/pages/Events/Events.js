import React, { useState } from "react";
import { DecoderText } from "../../Components/DecoderText/DecoderText";
import { Tiles } from "../../Components/Tiles/Tiles";
import EventCard from "../../Components/EventCard/EventCard";
// import ParticleBG from "../ParticleBG/ParticleBG";
import upcommingEvents from "./upcommingEvents";
import pastEvents from "./pastEvents"

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
            {upcommingEvents && <div>
                <Tiles slides={upcommingEvents} />
            </div>}

            <div class="mx-auto flex flex-col items-center justify-center bg-gray-900 px-0 pb-[20vh]">

                <div id="events" className="bg-gray-800 w-screen">
                    <div
                        className={`md:text-7xl text-5xl text-white bg-clip-text text-center font-extrabold md:mb-10 mb-5 pb-2 md:pt-20 mt-10`}
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

                {/* <div className="flex flex-col flex-wrap justify-center items-center w-screen lg:flex-row lg:gap-14"> */}
                    {active ? pastEvents.map((slide, i) => <EventCard key={i} {...slide} />) :
                    upcommingEvents.map((slide, i) => <EventCard key={i+6} {...slide} />)}
                {/* </div> */}

            </div>

        </>
    );
}
