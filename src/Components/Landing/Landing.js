import { motion,useInView } from "framer-motion";
import React, {useRef} from "react";
import ParticleBGLanding from "../ParticleBG/ParticleBGLanding";
// import "react-multi-carousel/lib/styles.css";
import {DecoderText} from "../DecoderText/DecoderText";
import style from "./Landing.module.css";
import DotLottie from "../DotLottie/DotLottie";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"

function Landing() {
    const aboutRef = useRef(null);
    const aboutInView = useInView(aboutRef);
    return (
        <>
            <div id="top" className="h-screen w-full -z-10 top-0 relative">
                <ParticleBGLanding />
            </div>
            <main className="absolute pt-[13vh] z-10">
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
                                text="ABOUT CN"
                                start={aboutInView}
                            />
                        </div>
                        <p className="text-gray-300 xl:text-left text-center mx-2 md:pl-5 md:ml-7 pl-3 pr-3 md:text-2xl text-1 md:pb-20 mb-10 tracking-wider leading-7">
                            Welcome to Coding Ninjas Club SRM! We are a
                            community of passionate coders and executives who
                            love to explore the world of technology and push our
                            limits to create innovative solutions. Our club is
                            designed to provide a platform for students to
                            learn, share, and grow their technical skills.We
                            organize a variety of events throughout the year,
                            from Hackathons and Workshops to amazing Gaming
                            Events.At Coding Ninjas Club SRM, we believe that
                            technology can be a force for good in the
                            world.That's why we encourage our members to use
                            their skills to solve real-world problems and make a
                            positive impact on the society.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;
