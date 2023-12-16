// Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-full bg-gray-700 h-full text-white w-64 space-y-6 py-7 px-2">
      <nav>
        <ul className="space-y-2">
          <li><a href="#item1" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600">Item 1</a></li>
          <li><a href="#item2" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600">Item 2</a></li>
          <li><a href="#item3" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600">Item 3</a></li>
          {/* Add additional items here */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
