import { useInView } from "framer-motion";
import React, {useRef} from "react";
import ParticleBG from "../../Components/ParticleBG/ParticleBG";
import {DecoderText} from "../../Components/DecoderText/DecoderText";
import style from "./Landing.module.css";
import DotLottie from "../../Components/DotLottie/DotLottie";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"

function Landing() {
    const aboutRef = useRef(null);
    const aboutInView = useInView(aboutRef);
    return (
        <>
            <div id="top" className={"h-[90vh] w-full -z-10 top-0 relative "+style.bottom}>
                <ParticleBG />
            </div>
            <main className={"absolute pt-[13vh] z-10 "+style.bottom}>
                <div className={style.anime}>
                    <DotLottie className={style.lottie} src="/ninja.lottie" />
                    <Link className={style.events+" bg-gray-800"} to="/events">OUR UPCOMMING EVENTS <FaArrowRight className={style.arro} /> </Link>
                </div>
            </main>

            <div className={`bg-gray-900 relative ${style.about}`} id="about" name="about">
                <div className="grid grid-cols-1 gap-5 py-8 px-3 xl:grid-cols-2 pb-20">
                    <div>
                        <div
                            className={`xl:text-7xl md:text-6xl text-5xl text-transparent bg-clip-text xl:text-left text-center xl:pl-5 xl:ml-7 font-extrabold xl:mb-10 mb-5 xl:pb-12 pb-2 xl:pt-20 pt-10 bg-gray-200`}
                            ref={aboutRef}
                        >
                            <DecoderText
                                text="CN IIIT-BBSR"
                                start={aboutInView}
                            />
                        </div>
                        <p className="text-gray-300 text-justify mx-2 md:pl-5 md:ml-7 pl-3 pr-3 md:text-2xl text-1 md:pb-20 mb-10 tracking-wider leading-7">
                            Welcome to Coding Ninja @IIIT BBSR!!Coding is not just about algorithms and syntax; it goes beyond that, becoming a form of artistic expression. Coding Ninja Students Chapter offers coding workshops and hackathons for students to enhance their skills and learn from industry experts. These events serve as platforms to explore new technologies, solve real-world problems, and showcase talents. By pushing the boundaries of innovation, students bring their unique ideas to life in the digital landscape. Join us on this journey of exploration!
                        </p>
                    </div>
                    <div className="hidden xl:flex pl-20 pr-0 items-center justify-center">
                        <img
                        loading="lazy"
                        src="https://files.codingninjas.in/pl-ninja-16706.svg"
                        className="md:w-2/3 ml-10 pb-5 pt-20"
                        alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;
