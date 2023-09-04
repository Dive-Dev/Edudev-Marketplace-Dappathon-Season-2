import { useState } from "react";

const ToggleAppearance = ({ darkMode, setDarkMode }) => {
  return (
    <button onClick={() => setDarkMode(!darkMode)} className="bg-[#E7E7E7] w-[60px] h-[30px] rounded-full">
      <div className={`bg-[#fff] w-[25px] h-[25px] rounded-full mx-[2.5px] p-[2px] duration-500 ${darkMode ? "translate-x-[30px] transition-all duration-500" : ""}`}>
        <div className={`bg-[#ffcf3f] w-[21px] h-[21px] rounded-full duration-500 ${darkMode ? "bg-[#353535] duration-500" : ""}`}></div>
      </div>
    </button>
  );
};

export default ToggleAppearance;
