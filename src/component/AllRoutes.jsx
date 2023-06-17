import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SearchResult } from './SearchResult'
import { VideoDetails } from './VideoDetails'
import { Feed } from './Feed'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' exact element={<Feed/>}/>
        <Route path="/searchResult/:searchQuery" element={<SearchResult/>}/>
        <Route path="/video/:id" element={<VideoDetails/>}/> 
    </Routes>
  )
}
