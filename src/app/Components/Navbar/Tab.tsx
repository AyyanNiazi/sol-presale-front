import React, { FC } from "react";
import { tabProps } from "./navbar.type";

const Tab: FC<tabProps> = ({ name, onClick, activeTab }) => {
  return (
    <button
      className={`flex-1 py-2 px-6 rounded-lg ${
        activeTab === name
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-gray-800"
      }`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default Tab;
