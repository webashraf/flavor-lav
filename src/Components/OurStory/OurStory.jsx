import React from "react";
import { AiTwotoneMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';


const OurStory = () => {
  return (
    <>
      <div className="hero min-h-auto w-[93%] mx-auto py-20 bg-base-200">
        <div className="hero-content mx-w-[90rem] flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/Vg39wgy/pexels-photo-14870607.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="w-2/3 px-10">
            <div className=" border-b-4 w-1/3 border-lime-400  rounded-b-2xl py-4 my-10 ">
              <h1 className="text-5xl text-left uppercase font-bold border border-b-8 border-lime-500 p-5">
                Our Story
              </h1>
            </div>
            <h2 className="text-4xl font-semibold">
              Until I discovered cooking I was never really interested in
              anything
            </h2>
            <p className="py-6">
              Pleased anxious or as in by viewing forbade minutes prevent. Too
              leave had those get being led weeks blind. Had men rose from down
              lady able. Its son him ferrars proceed six parlors. Advanced
              diverted domestic sex repeated bringing you old. Possible procured
              her trifling laughter thoughts property she met way. Companions
              shy had solicitude favourable own. Which could saw guest man now
              heard but. Lasted my coming uneasy marked so should. Gravity
              letters it amongst herself dearest an windows by. Wooded ladies
              she basket.
            </p>
            <div className="flex flex-col w-full lg:flex-row">
              <div className="flex w-full h-24 card bg-base-300 rounded-box flex-row gap-6 items-center pl-5">
                <div>
                    <BsTelephone className="text-lime-500 text-6xl"></BsTelephone>
                </div>
                <div>
                  <h4 className="font-bold text-xl">Phone</h4>
                  <p className="text-gray-800">+88 01954231**</p>
                </div>
              </div>
              <div className="divider lg:divider-horizontal">OR</div>
              <div className="flex w-full h-24 card bg-base-300 rounded-box flex-row gap-6 items-center pl-5">
                <div>
                    <AiTwotoneMail className="text-lime-500 text-6xl"></AiTwotoneMail>
                </div>
                <div>
                  <h4 className="font-bold text-xl">Email</h4>
                  <p className="text-gray-800">aliashraf***@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
