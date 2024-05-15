import React, { useEffect, useState } from "react";
import { DecoderText } from "../../Components/DecoderText/DecoderText";
import EventCard from "../../Components/EventCard/EventCard";
import eventslist from "./pastEvents";
import { signal } from "@preact/signals-react";

export const active = signal(false);

export default function Events() {
  const [upcommingEvents, setupcommingEvents] = useState([]);
  const [pastEvents, setpastEvents] = useState([]);

  useEffect(() => {
    eventslist.forEach((e) => {
      if (e.time > Date.now()) {
        upcommingEvents.push(e);
      } else {
        e.isOver = true;
        pastEvents.push(e);
      }
    });
    setpastEvents(pastEvents);
    setupcommingEvents(upcommingEvents);
  }, []);

  const activeList = active.value ? pastEvents : upcommingEvents;

  return (
    <>
      <div className="mx-auto flex flex-col items-center justify-center bg-gray-900 px-0 pb-[20vh]">
        <div id="events" className="bg-gray-800 w-screen">
          <div className="md:text-7xl text-5xl text-white bg-clip-text text-center font-extrabold md:mb-10 mb-5 pb-2 md:pt-20 mt-10">
            <DecoderText text="EVENTS" start={true} />
          </div>

          <div className="pb-5">
            <div className="text-white text-center md:text-xl">
              Stay tuned new Events loading...
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center h-16 bg-gray-800">
          <div
            onClick={() => {
              active.value = false;
            }}
            className={
              "w-1/2 cursor-pointer h-full flex justify-center items-center max-w-sm transition-all text-center text-2xl " +
              (active.value ? "text-white" : "text-orange-400")
            }
          >
            <span>upcoming</span>
          </div>
          <div
            onClick={() => {
              active.value = true;
            }}
            className={
              "w-1/2 cursor-pointer h-full flex justify-center items-center max-w-sm transition-all text-center text-2xl " +
              (active.value ? "text-orange-400" : "text-white")
            }
          >
            <span>previous</span>
          </div>
        </div>
        <div
          className={
            "h-1 w-1/2 max-w-sm transition-all rounded bg-orange-400 " +
            (active.value ? "translate-x-[50%]" : "translate-x-[-50%]")
          }
        ></div>

        {/* <div className="flex flex-col flex-wrap justify-center items-center w-screen lg:flex-row lg:gap-14"> */}
        {activeList.length > 0 ? (
          activeList.map((slide) => <EventCard {...slide} key={slide.title} />)
        ) : (
          <div className="my-[5vh] mx-auto flex flex-col w-[90vw] bg-gray-800 rounded shadow-lg sm:w-3/4 lg:w-3/5">
            <img
              src="https://codinex.co.ug/wp-content/uploads/2023/02/no-event-bg-1080x675.png"
              alt=""
            />
          </div>
        )}
        {/* </div> */}
      </div>
    </>
  );
}
