import HandShake from "../../public/36.png";
import { FaRegEnvelope } from "react-icons/fa6";
import { RiGithubFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

function Contact() {
  return (
    <>
      <div className="px-10 h-[40dvh] lg:h-[80dvh] bg-white flex justify-center lgs:px-20  items-center flex-col  pys-10 md:pys-12 overflow-hidden">
        <main>
          <div className="text-center group">
            <p className="text-gray-500 mt-2 md:text-lg lg:text-xl mb-1">
              Wanna build stuffs?{" "}
            </p>
            <a
              href="mailto:m.mail.com"
              className=" text-3xl  group-hover:underline lg:text-6xl font-bold"
            >
              Let's Collaborate{" "}
            </a>
            <img
              className="mx-auto mt-3 md:mt-6 w-max h-36 md:h-44"
              src={"../../public/36.png"}
              alt="let Collaborate"
            />
          </div>
        </main>
      </div>
      <footer className="lg:px-20 p-6 px-10 flex justify-between">
        <div className="!font-medium">
          <span className="text-slate-500">© 2024</span> Idongesit Ntuk
        </div>

        <div>
          <div className="flex flex-row *:size-6 items-center md:gap-x-4 lg:gap-x-6 xl:gap-x-7 ">
            <a href="" target="_blank">
              {" "}
              <FaRegEnvelope className="cursor-pointer" />
            </a>
            <a href="https://github.com/idlatest" target="blank">
              {" "}
              <RiGithubFill className="cursor-pointer" />{" "}
            </a>

            <a href="https://x.com/idlatest" target="_blank">
              <FaXTwitter className="cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/idlatest/" target="_blank">
              {" "}
              <IoLogoLinkedin className="cursor-pointer" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
