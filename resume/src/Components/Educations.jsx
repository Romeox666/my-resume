import React from "react";
import Typewriter from "typewriter-effect";

const Educations = () => {
  return (
    <div className="my-8">
        <div class="font-mono text-white text-5xl text-center justify-center items-center mt-9">
        <Typewriter
          options={{
            strings: ["EDUCATIONS"],
            autoStart: true,
            loop: true,
          }}
        />
          </div>
      <div className="flex w-auto h-full rounded-lg justify-center items-center -mt-2 mb-8 p-8 flex-col mx-auto lg:flex-row">
        <div class="bg-white max-w-sm rounded-lg overflow-hidden shadow-lg mx-3 my-3 cursor-pointer hover:scale-110 ease-in duration-300">
          <img
            class="w-full h-72 rounded-t-md"
            src="https://lh3.googleusercontent.com/p/AF1QipOS7SLUljn0NycN1dDgQgQlBZCqap9YQfeW4kU=s1360-w1360-h1020"
            alt="Senior High School"
          />
          <div class="px-6 py-4">
            <div class="text-xl mb-2 font-mono">
              Senior High School (2016-2018)
            </div>
            <p class="text-gray-700 text-base font-mono">
              Thungyaichalearmratanusorn Ratchamuangkalapisek (Thailand)
            </p>
            <p class="text-gray-700 text-base pt-3 pb-6 font-mono">Science Major.</p>
          </div>
        </div>

        <div class="bg-white max-w-sm rounded-lg overflow-hidden shadow-lg mx-3 my-3 cursor-pointer hover:scale-110 ease-in duration-300">
          <img
            class="w-full h-72 rounded-t-md"
            src="https://www.phuket.psu.ac.th/wp-content/uploads/2019/01/DSC_8815-squoosh-res.jpg"
            alt="University"
          />
          <div class="px-6 py-4">
            <div class="text-xl mb-2 font-mono">University (2018-2022)</div>
            <p class="text-gray-700 text-base font-mono">
              Prince of Songkla University Phuket Campus (Thailand)
            </p>
            <p class="text-gray-700 text-base pt-3 font-mono">Bachelor of Science.</p>
            <p class="text-gray-700 text-base font-mono">Major in Software Engineering.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educations;
