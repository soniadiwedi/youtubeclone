import React, { useContext, useState } from 'react'
import { ApiContext } from '../context/AppContextProvider'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Loader } from '../shared/Loader'


import ytLogo from "../image/images/yt-logo.png";
import ytLogoMobile from "../image/images/yt-logo-mobile.png";


import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

export const Header = () => {
  const[searchquery,setSearchquery]=useState("")
  const {loading,setLoading,searchResults,selectedCategory,setSelectedCategory,mobileMenu,setMobileMenu}=useContext(ApiContext)
  const navigate=useNavigate()
  const {pathname}=useLocation()
  const searchQueryHandler=(e)=>{
    if((e?.key=="Enter" || e==="searchButton") && searchquery?.length>0){
      navigate(`/searchResult/:${searchquery}`)
    }
  }

  const mobileMenuToggle=()=>{
    setMobileMenu(!mobileMenu);
  }

  const pageName=pathname?.split("/")?.filter(Boolean)?.[0]
  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 md:bg-black bg-black">
            {loading && <Loader />} 
    <div className="flex h-5 items-center">
                {pageName !== "video" && (
                    <div
                        className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
                        onClick={mobileMenuToggle}
                    >
                        {mobileMenu ? (
                            <CgClose className="text-white text-xl" />
                        ) : (
                            <SlMenu className="text-white text-xl" />
                        )}
                    </div>
                )}
                <Link to="/" className="flex h-5 items-center">
                    <img
                        className="h-full hidden md:block"
                        src={ytLogo}
                        alt="Youtube"
                    />
                    <img
                        className="h-full md:hidden"
                        src={ytLogoMobile}
                        alt="Youtube"
                    />
                </Link>
                
            </div>
            <div className='group flex items-center'>
                          <div className='flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0'>
                            <div className='w-10 items-center justify-center hidden group-focus-within:md:flex'>
                              <IoIosSearch className='text-white text-xl'/>
                            </div>
                            <input type='text' onChange={(e)=>setSearchquery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                            value={searchquery}
                            className='bg-transparent out text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]'
                            />
                            
                          </div>
                          <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]">
                            <IoIosSearch className='text-white text-xl'/>

                            </button>
                </div>

                <div className="flex items-center">
                  <div className='hidden md:flex'>
                          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                          <RiVideoAddLine className="text-white text-xl cursor-pointer" />
                          </div>
                          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                        <FiBell className="text-white text-xl cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
                    <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-cute-girl-avatar-material-png-image_4023832.jpg" />
                </div>
                </div>
            </div>
  )
}
