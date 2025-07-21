import React from 'react'
import Image from 'next/image'
import HrLogo from './../../../public/logo/hrone-logo.svg'

const Logo = () => {
  return (
    <div className='relative xl:w-[150px]  lg:w-[120px]  md:w-[115px] md:h-[30px]  h-[28px] w-[105px] '>
    <Image src={HrLogo} alt='logo' className='absolute object-contain'  priority/>
    </div>
  )
}

export default Logo