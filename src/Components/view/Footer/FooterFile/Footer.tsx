
import React from 'react'

import Wrapper from '../../NavBer/NavBar-For-Pc/wrapper'
import SecondMenu from '../FooterData/SecondMenu'
import FDataPage from '../FooterData/FDataPage'
import ThirdPage from '../FooterData/ThirdPage'
const Footer  = () => {

  return (
    <div className='bg-[#090303] text-white  pt-14 pb-3'>
      <Wrapper className='flex justify-between flex-col md:flex-row gap-12 md:gap-0' >

      {/* Left Side */}
      <div className='flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row'>
        {/* Start */}
        <FDataPage />
      {/* Menu End */}

      {/* Second Menu Start */}
      <div className='flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0 ' >
        {/* Next Menu Start */}
        <SecondMenu />
      </div>
              {/* First MENU ENDDED */}
            </div>
            {/* First LEFT END */}

            {/* RIGHT START */}
            <ThirdPage />     
        {/* End */}
      </Wrapper>
      <Wrapper className='flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0 ' >
      <div className='text-[15px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left'>
        CopyRight © 2023 Muhammad Hassan, All Rights Reserved
       </div>
       {/* Left Side Complete End */}

      </Wrapper>
    </div>
  )
}

export default Footer;