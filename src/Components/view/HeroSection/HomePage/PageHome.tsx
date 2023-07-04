import React from 'react';
import { RiArrowDownLine } from 'react-icons/ri';

const PageHome = () => {
  return (
    <div className="h-screen -mt-16 flex bg-black">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      >
        <source
          src="https://player.vimeo.com/external/357396260.sd.mp4?s=7900df824bf68682a805c54fa049cf53db5a49f4&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>

      <div className="max-w-[800px] mx-auto text-white w-full mt-4 px-4 sm:px-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="text-center sm:text-right">
            <p className="text-lg font-oswald sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
              Science-Based Health Benefits of Moringa oleifera
            </p>
          </div>
          <div>
            <p className="text-xs font-urbanist sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              Moringa oleifera is a plant that has been praised for its health benefits for thousands of years. It is very
              rich in healthy antioxidants and bioactive plant compounds.
            </p>
          </div>
        </div>

        <div className="text-pink-400 mt-4 sm:mt-6 md:mt-8 flex font-extrabold items-center text-xs sm:text-sm md:text-base">
          Scroll Down For More Info
          <RiArrowDownLine className="ml-2" />
        </div>
      </div>
    </div>
  );
};

export default PageHome;