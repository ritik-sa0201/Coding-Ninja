import React from "react";

export default function EventCard({src}) {
    return (
            <div class="my-[5vh] flex flex-col w-full bg-gray-800 rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
                <div
                    class="w-full h-64 bg-top bg-cover rounded-t"
                    style={{backgroundImage: `url(${src})`}}
                ></div>
                <div class="flex flex-col w-full md:flex-row">
                    <div class="flex flex-row justify-around p-4 font-bold leading-none text-gray-200 uppercase bg-gray-700 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                        <div class="md:text-3xl">Jan</div>
                        <div class="md:text-6xl">13</div>
                        <div class="md:text-xl">7 pm</div>
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
                        <div class="flex flex-row items-center mt-4 text-gray-300">
                            <div class="w-1/2">Mercedes-Benz Superdome</div>
                            <div class="w-1/2 flex justify-end">
                                <img
                                    src="https://collegefootballplayoff.com/images/section_logo.png"
                                    alt=""
                                    class="w-8"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
