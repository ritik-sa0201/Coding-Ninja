import React from "react";

const months = ["JAN", "FAB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

export default function EventCard({link, image, time, venu, title, description, isOver}) {
    const t = new Date(time);
    const date = t.getDate();
    const month = months[t.getMonth()];
    const hr = t.getHours();
    const a = hr>12 ? "PM" : "AM";
    const tm = hr%12 + ":" + t.getMinutes() + a;
    return (
            <div className="my-[5vh] mx-auto flex flex-col w-[90vw] bg-gray-800 rounded shadow-lg sm:w-3/4 lg:w-3/5">
                <div className="relative overflow-hidden">
                <img
                    className="h-[80vw] lg:h-96 w-full object-contain bg-top bg-cover rounded-t blur-lg"
                    style={{backgroundImage: `url(${image})`}}
                    />
                <img
                    className="h-[90vw] top-0 lg:h-96 absolute left-1/2 -translate-x-1/2 object-contain bg-transparent rounded-t"
                    src={image}
                    />
                </div>
                <div className="flex flex-col w-full md:flex-row">
                    <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-200 uppercase bg-gray-700 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                        <div className="md:text-6xl">{date}</div>
                        <div className="md:text-3xl">{month}</div>
                        <div className="md:text-xl">{tm}</div>
                        <div className="md:text-xl">{venu}</div>
                    </div>
                    <div className="p-4 font-normal text-gray-200 md:w-3/4">
                        <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-200">
                            {title}
                        </h1>
                        <pre className="leading-normal whitespace-pre-wrap text-justify">
                            {description}
                        </pre>
                        {isOver || <div className="flex items-center justify-end mt-4 text-gray-300">
                            <a target="_blank" href={link} className="h-11 rounded w-26 py-2 px-5 bg-gray-100 duration-200 hover:bg-gray-300 text-gray-900 font-bold ">Register</a>                            
                        </div>}
                    </div>
                </div>
            </div>
    );
}
