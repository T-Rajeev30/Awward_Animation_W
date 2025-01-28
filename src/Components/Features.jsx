import React from "react";
import BentoCard from "./BentoCard";
import { TiLocationArrow } from "react-icons/ti";
import BentoTilt from "./BentoTilt";
const Features = () => {
  return (
    <section className="bg-black  pb-52">
      <div className=" container mx-auto px-3 md:px-10">
        <div className="px-5 py-32 ">
          <p className="font-circular-web text-lg text-blue-50">
            Into the metagame Layer
          </p>
          <p className=" max-w-md font-circular-web text-lg text-blue-50 opacity-50 ">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into a interconnected overlay
            experience on your world.
          </p>
        </div>
        <BentoTilt className="border-hsla relative  mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ">
          <BentoCard
            src="Videos/feature-1.mp4"
            title={
              <>
                randi<b>n</b>
              </>
            }
            description="A cross-platform metagame app, turning your activities across the Web2 and Web3 games into a rewarding adventure."
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1   md:col-span-1 md:row-span-2 ">
            <BentoCard
              src="Videos/feature-2.mp4"
              title={
                <>
                  <b>
                    zig<b>m</b>a
                  </b>
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="Videos/feature-3.mp4"
              title={
                <>
                  N<b>e</b>
                  xus
                </>
              }
              description="A community-driven NFT collection, where the community decides the future of the project."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1  md:me-0">
            <BentoCard
              src="Videos/feature-4.mp4"
              title={
                <>
                  Az<b>u</b>l
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive. "
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font m-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <video
              src="Videos/feature-5.mp4 "
              loop
              muted
              autoPlay
              className="size-full object-cover object-center "
            ></video>
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
