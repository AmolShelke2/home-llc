// DropdownMenu.js
import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ dropdownItems }) => {
  return (
    <ul className="hidden group-hover:block absolute left-0 w-48 z-20 bg-white shadow-md mt-0.5 rounded-md overflow-hidden">
      {dropdownItems.map((item, index) => (
        <li key={index} className="px-4 py-2 hover:bg-gray-100">
          <Link to={item.path} className="block text-sm text-gray-700">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
