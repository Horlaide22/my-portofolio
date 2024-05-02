import React from "react";
import { ReactTyped } from "react-typed";
import homeImg from "../../assets/home-img.png";

export const Home = () => {
  return (
    <div className=" px-6 py-5  sm:px-24 md:px-52 sm:py-14 bg-homeBg bg-no-repeat bg-cover h-screen text-white ">
      <div className="flex flex-col gap-4 sm:gap-9  md:flex md:flex-row  md:items-center justify-between ">
        <div className="flex flex-col gap-5 sm:gap-10 text-2xl sm:text-3xl md:text-4xl">
          <p>Hi There !</p>
          <p>
            {" "}
            I AM <span className="text-[#dd90fa]">SEKINAT BASHIR ,</span>
          </p>
          <ReactTyped
            loop={true}
            backSpeed={50}
            onBegin={function noRefCheck() {}}
            onComplete={function noRefCheck() {}}
            onDestroy={function noRefCheck() {}}
            onLastStringBackspaced={function noRefCheck() {}}
            onReset={function noRefCheck() {}}
            onStart={function noRefCheck() {}}
            onStop={function noRefCheck() {}}
            onStringTyped={function noRefCheck() {}}
            onTypingPaused={function noRefCheck() {}}
            onTypingResumed={function noRefCheck() {}}
            className="text-[#dd90fa]"
            strings={[
              "Software Developer",
              "Frontend Developer",
              "Open Source Contributor",
            ]}
            typeSpeed={50}
            typedRef={function noRefCheck() {}}
          />
        </div>
        <div>
          <img src={homeImg} alt="" className="w-[35rem]" />
        </div>
      </div>
    </div>
  );
};
