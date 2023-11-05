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
                        <p className="text-gray-300 xl:text-left text-center mx-2 md:pl-5 md:ml-7 pl-3 pr-3 md:text-2xl text-1 md:pb-20 mb-10 tracking-wider leading-7">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laudantium doloribus eligendi alias aut deserunt, id autem asperiores accusantium facilis magnam ipsum, quae, ex eos fugit cum dicta voluptas cumque? Eveniet minima corporis, recusandae accusamus placeat impedit veritatis repudiandae obcaecati rem alias earum voluptates perferendis qui quia ipsa tenetur tempore harum iusto porro dignissimos! Dolore libero totam minima debitis laudantium ipsum doloribus perspiciatis, reprehenderit, porro sit molestias magnam quae repellendus doloremque velit veniam repudiandae voluptatum quasi laborum distinctio nihil mollitia?
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
