import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeinAnimation from "./animated-components/fadein-animation";
import { WordPullUp } from "./animated-components/pull-up-animate";

function Hero() {
  return (
    <div className="px-10 flex jdustify-center lg:px-20  border-t-8 border-x-8 border-gray-300 items-cen/ter flex-col min-h-screen overflow-hidden">
    <main className="pt-[16rem] mb-[6rem]">
        {/* <motion.div
          variants={FadeinAnimation("down", 0.2)}
          initial="hidden"
          viewport={{ once: false, amount: 0.8 }}
          whileInView={"show"}
        >
        
        </motion.div> */}
    <motion.div
    variants={FadeinAnimation("right", 0.1)}
    initial="hidden"
    viewport={{ once: true, amount: 0.7 }}
    whileInView={"show"}
    >
    <WordPullUp
    className="text-lg md:text-xl flex-start flex !text-/left lg:text-2xl font-medium mb-2 md:mb-3"
    words="Hi there, I'm Id"
    />

          {/* line */}

    <p className="text-gray-900 text-4xl md:text-5xl lg:max-w-6xl xl:max-w-[86rem] xl:text-[5rem] lg:text-7xl font-bold">
    I'm , a Block Chain Developer living in Nigeria, and{" "}
    <span className="text-gray-500">
    I focus on making digital experiences that are easy to use.
    </span>
    </p>

    <p className="mt-2 md:text-lg lg:text-xl xl:text-3xl hidden md:mt-3">
    I just get the <strong>hard</strong> stuff <strong>done</strong> to
    make you happi, and make money in the <strong>web3 space.</strong>
    </p>
    </motion.div>
    </main>
    </div>
    );
}

export default Hero;
