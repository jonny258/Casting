import React from "react";
import SidebarListItem from "./sidebarListItem";

const Sidebar = () => {
  return (
    <div className="h-full bg-gray-800 h-full text-white w-96">
      <h1 className="px-3 py-1 text-sm font-semibold">RECOMMENDED CHANNELS</h1>
      <nav>
        <ul className="">
          <SidebarListItem />
          <SidebarListItem />
          <SidebarListItem />
          <SidebarListItem />
          <SidebarListItem />
          <SidebarListItem />
          <SidebarListItem />
          <SidebarListItem />
          <SidebarListItem />
          <SidebarListItem />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
