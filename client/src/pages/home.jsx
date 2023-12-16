import React from 'react'
import NavBar from "../components/navbar";
import Sidebar from "../components/sidebar";
import ImageSlider from "../components/imageslider";

function Home() {
  return (
    <div className="flex flex-col h-screen">
    <NavBar />
    <div className="flex flex-1 overflow-hidden">
      <Sidebar />
      <div className="flex-1 p-4 overflow-auto">
        <ImageSlider />
        <ImageSlider />
        <ImageSlider />
        <ImageSlider />
        <ImageSlider />
      </div>
    </div>
  </div>
  )
}

export default Home