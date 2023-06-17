import React, { useEffect } from 'react'
import { LeftNavbar } from './LeftNavbar'
import { useContext } from 'react'
import { ApiContext } from '../context/AppContextProvider'
import { VedioCard } from './VedioCard'

export const Feed = () => {
  const {loading,searchResults}=useContext(ApiContext)
  useEffect(()=>{
    document.getElementById('root').classList.remove('custom-h')
  },[])
  return (
    <div className='flex flex-row h-[calc(100%-56)]'> 
      <LeftNavbar/>
      <div className='grow w-[calc(100%-24px)] h-full overflow-auto bg-black' >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
        {
          !loading && searchResults&& searchResults.map((el)=>{
            if(el.type!=="video") return false
            return (
            <VedioCard key={el?.video?.videoId}
            video={el?.video}
            />
            )
          })
        }
        </div>
      </div>
    </div>
  )
}
