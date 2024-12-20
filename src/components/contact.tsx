import { FaRegEnvelope } from "react-icons/fa6";
import { RiGithubFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
// import { WordPullUp } from "./animated-components/pull-up-animate";
import { VelocityScroll } from "./animated-components/velocity-scoll";

function Contact({}: { img?: any }) {
  // const imagePath = "../../public/36.png";
  // const myImage = import(imagePath);
  return (
    <>
      <div
        id="contact"
        className="px-10 min-h-[40dvh] lg:min-h-[80dvh] bg-white flex justify-center lgs:px-20  items-center flex-col  pys-10 md:pys-12 overflow-hidden"
      >
        <main>
          <div className="text-center group">
            <p className="text-gray-500 group-hover: motion-preset-typewriter mt-2 md:text-lg lg:text-xl mb-1">
              Wanna build stuffs?{" "}
            </p>

            <a
              href="mailto:m.mail.com"
              className=" 
    text-3xl group-hover:motion-preset-confetti  !cursor-pointer group-hover:underline lg:!text-6xl font-bold"
            >
              Let's Collaborate{" "}
            </a>
            <img
              className="   motion-preset-seesaw 
    mx-auto mt-3 md:mt-6 lg:mt-20  w-[10rem] h-32 md:w-[12rem] sm:h-36 md:h-44"
              src={"../../36.png"}
              // src={handShake as any}
              alt="let Collaborate"
            />
          </div>
        </main>
      </div>
      <div className=" flex -mt-8 ">
        <VelocityScroll
          text="I Build Researched Based Project That The Market Needs."
          default_velocity={4}
          className="font-display !text-gray-800 text-center  text-3xl w-full  tracking-[-0.02em]  drop-shadow-sm text0 md:text-7xl md:leading-[5rem]"
        />
      </div>

      <footer className="lg:px-20 p-6 px-8 sm:px-10 mt-8 flex justify-between">
        <div className="!font-medium motion-preset-typewriter-[19] motion-duration-10000 motion-rep">
          <span className="text-slate-500">© 2024</span> Idongesit Ntuk
        </div>

        {/* <div> */}
        <div className="flex flex-row gap-x-2 items-center   :*:size-7 *:text-gray-600  md:gap-x-4 lg:gap-x-6 xl:gap-x-7 ">
          <a href="" target="_blank" className="!cursor-pointer">
            <FaRegEnvelope className="hover:text-red-700 size-5 cursor-pointer" />
          </a>
          <a href="https://github.com/idlatest" target="blank">
            <RiGithubFill className="cursor-pointer size-5 hover:text-gray-900 " />{" "}
          </a>

          <a
            href="https://x.com/idlatest"
            target="_blank"
            className="cursor-wait"
          >
            <FaXTwitter className="cursor-pointer  size-5 hover:text-gray-900" />
          </a>
          <a href="https://www.linkedin.com/in/idlatest/" target="_blank">
            {" "}
            <IoLogoLinkedin className="hover:text-blue-700 size-5 cursor-pointer" />
          </a>
        </div>
        {/* </div> */}
      </footer>
    </>
  );
}

export default Contact;
