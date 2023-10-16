import React from "react";
import { Link } from "react-router-dom";

export default function EventCard({src, id, href}) {
    return (
            <div id={"event"+id} class="my-[5vh] mx-auto flex flex-col w-full bg-gray-800 rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
                <div
                    class="h-[min(50vh,50vw)] bg-top bg-cover rounded-t"
                    style={{backgroundImage:`url(${src})`, backgroundPosition: "center"}}
                ></div>
                <div class="flex flex-col w-full md:flex-row">
                    <div class="flex flex-row justify-around p-4 font-bold leading-none text-gray-200 uppercase bg-gray-700 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                        <div class="md:text-6xl">13</div>
                        <div class="md:text-3xl">Jan</div>
                        <div class="md:text-xl">5:30 pm</div>
                        <div class="md:text-xl">CG07</div>
                    </div>
                    <div class="p-4 font-normal text-gray-200 md:w-3/4">
                        <h1 class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-200">
                            2020 National Championship
                        </h1>
                        <p class="leading-normal">
                            The College Football Playoff (CFP) determines the
                            national champion of the top division of college
                            football. The format fits within the academic
                            calendar and preserves the sport's unique and
                            compelling regular season.
                        </p>
                        <div class="flex items-center justify-end mt-4 text-gray-300">
                            <Link to={href} className="h-11 rounded w-26 py-2 px-5 bg-gray-300 text-gray-900 font-bold ">Register</Link>                            
                        </div>
                    </div>
                </div>
            </div>
    );
}
