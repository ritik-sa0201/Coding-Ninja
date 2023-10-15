import React from "react";
import style from "./Events.module.css"
import { DecoderText } from "../DecoderText/DecoderText";
import { Tiles } from "../Tiles/Tiles";

export default function Events() {
    return (
        <div className="mt-[10vh]">
            
            <Tiles />

            <div id="events">
                <div
                    className={`md:text-7xl text-5xl text-transparent bg-clip-text text-center font-extrabold md:mb-10 mb-5 pb-2 md:pt-20 pt-10 mt-10 ${style.heading}`}
                >
                    <DecoderText
                        text="EVENTS"
                        start={true}
                    />
                </div>
                
            </div>

            <div className="pb-5">
                <div className="text-white text-center md:text-xl pb-10">
                    Stay tuned new Events loading...
                </div>
                <div className="absolute right-0 bg-black">
                    <img loading="lazy" alt="" />
                </div>
            </div>

        </div>
    );
}
