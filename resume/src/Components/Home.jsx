import React from "react";
import Typewriter from "typewriter-effect";
import { FaFacebookSquare, FaLine, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Home = () => {
  return (
    <div className="flex w-auto h-full rounded-lg justify-center items-center mx-auto my-20 p-8 flex-col">
      <img
        class="w-36 h-36 rounded-full bg-white shadow-lg p-0 mb-5"
        src="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
        alt="image description"
      />
      <p className=" text-white text-6xl font-mono py-3 text-center items-center justify-center">Hello!</p>
      <p className=" text-white text-4xl font-mono py-2 text-center items-center justify-center">
        My Name Is Kunanon Chairerk
      </p>
      <div className="text-white text-3xl font-mono py-0.5 text-center items-center justify-center">
        <Typewriter
          options={{
            strings: ["Software Engineer", "Fontend Developer", "UI Designer"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <div class="flex flex-cols-4 w-auto gap-6 py-10">
        <div className="rounded-full bg-blue-600 shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaFacebookSquare size={25} color="white"/>
        </div>
        <div className="rounded-full bg-green-600 shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaLine size={25} color="white"/>
        </div>
        <div className="rounded-full bg-white shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300">
          <BiLogoGmail size={25} color="red"/>
        </div>
        <div className="rounded-full bg-white shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaGithub size={25}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
