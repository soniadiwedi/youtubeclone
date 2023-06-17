import React, { useContext } from 'react'
import { ApiContext } from '../context/AppContextProvider';
import { categories } from '../utilities/constants';
import { LeftNavMenuItem } from './LeftNavMenuItem';
import { useNavigate } from 'react-router-dom';
export const LeftNavbar = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } =
        useContext(ApiContext);
  const navigate=useNavigate()
   const clickHandler=(name,type)=>{
    switch(type){
      case "category":
        return setSelectedCategory(name)
      case "home":
        return setSelectedCategory(name)
      case "menu":
        return false

      default:
        break
    }
   }     
  return (
    <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
      mobileMenu ? "translate-x-0" : ""
  }`}>
    <div className='flex px-5 flex-col'>
      {categories.map((el)=>{
        return(
         <div key={el.name}>
            <LeftNavMenuItem text={el.type=="home"?"Home": el.name}
            icon={el.icon}
            action={()=>{clickHandler(el.name,el.type)}}
            className={`${selectedCategory==el.name?"bg-white/[0.15]":""}`}/>
             {el.divider &&(
            <hr className='my-5 border-white/[0.2]'/>
          )}

          </div>
         
        )
      })}
            <hr className='my-5 border-white/[0.2]'/>
            <div className="text-white/[0.5] text-[12px]">
                    Clone by: Sonia Diwedi
                </div>         
    </div>

  </div>
  )
}
