import React from "react";
import "../style/sidebarListItem.css";

function SidebarListItem() {
  return (
    <div className="flex items-center justify-between px-2 my-1 hover:bg-gray-700 hover:text-white hover:shadow-lg">
      <div className="flex items-center">
        <img
          src="https://assets-global.website-files.com/5fac161927bf86485ba43fd0/64705ebab37828940373a617_How-to-stream-to-Twitch-(1)-(1).png"
          className="w-8 h-8 rounded-full object-cover m-1"
        />
        <div>
          <h4 className="text-gray-100 font-semibold">NickEh 30</h4>
          <p className="text-sm text-gray-200">Fortnite</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="live-indicator"></div>
        <p className="text-sm text-gray-200 mx-1">16.3K</p>
      </div>
    </div>
  );
}

export default SidebarListItem;
