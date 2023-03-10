import React, { useContext } from 'react'
import lampWall from './../../assets/contourfloorLamp.jpg'
import CampaniesLogos from './CampaniesLogos'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { navbarContext } from '../../App'
import Products from './Products'
import Container from './ParallaxBg'
export default function HomePgae() {
  const menuShowed=useContext(navbarContext)
  return (
    <>
    <div className='w-full h-[630px]'>
        <img src={lampWall} alt="" className='w-full absolute brightness-75 object-cover -z-20 h-[630px] '/>
        <div className='flex justify-center'>
            <div className={` ${menuShowed[0] && "-z-20" } mt-[230px]`}>
            <p className='text-4xl ml-3 lg:text-[70px] text-center font-WorkSans  lg:w-[700px] w-[340px] text-white' >Stylish modern </p>
            <p className='text-4xl ml-3 lg:text-[70px] text-center font-WorkSans  lg:w-[700px] w-[340px] text-white lg:pt-12'>Lighting options</p>
            <div className='group'>
            <button className='bg-white text-lg w-[300px] lg:w-[340px] py-4 lg:pl-5 pl-5  mx-auto mt-[30px] lg:mt-[60px] uppercase font-WorkSans font-[500] lg:text-xl flex '>shop the fall collection <HiOutlineArrowNarrowRight className=' group-hover:ml-4 group-active:ml-4 transition-all duration-500 mt-[4px] ml-2 ' /> </button>
            </div>
            </div>
        </div>
        
    </div>
    <CampaniesLogos/>
    <Products/>
    <Container/>
    </>
  )
}
