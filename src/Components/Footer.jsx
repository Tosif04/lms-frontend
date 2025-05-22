import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <>
      <footer className="absolute w-full left-0 bottom-0 h-[8vh] flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20 ">
        <section className="text-lg">
          Copyright 2025 | All rights reserved.
        </section>
        <section className="flex items-center justify-center gap-5 text-2xl text-white ">
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsFacebook />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsInstagram />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsTwitter />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsLinkedin />
          </a>
        </section>
      </footer>
    </>
  );
}

export default Footer;
