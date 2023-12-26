import React from 'react'
import NavBar from "../components/navbar";
import Sidebar from "../components/sidebar";
import ImageSlider from "../components/imageslider";

function Home() {
  const mapArray = [1,2,3,4,5]
  return (
    <div className="flex flex-col h-screen">
    <NavBar />
    <div className="flex flex-1 overflow-hidden">
      <Sidebar />
      <div className="flex-1 p-4 overflow-auto">
      {mapArray.map((item, index) => {
        return (
          <ImageSlider key={index} streamNum={item}/>
        )
      } )}
      </div>
    </div>
  </div>
  )
}

export default Home