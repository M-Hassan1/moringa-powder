

import React from 'react';
import AboutPhoto from '@/Components/assets/images/AbouPhoto.png';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="flex flex-col mt-32 md:flex-row  ">
      <div className="w-full md:w-1/2">
      <div className="p-4">
          <h1 className="text-2xl font-oswald justify-center md:text-3xl font-bold mb-4">About Us</h1>
          <p className="text-sm font-oswald md:text-base lg:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor ullamcorper malesuada. In maximus sem sed orci aliquam efficitur. Vivamus pellentesque magna a lorem lobortis, in pretium risus condimentum. Morbi vestibulum enim sit amet sem cursus, non mollis risus vestibulum.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="p-4">
          <Image src={AboutPhoto} alt="About Photo" className="rounded-lg w-full hover:scale-105 shadow-md shadow-black duration-700  " />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
