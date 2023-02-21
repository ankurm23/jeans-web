import React from 'react'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
function home() {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
     
      </div>
  )
}

export default home