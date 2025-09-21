import { useState } from "react";

const CustomDropdown = ({ options, active, setActive }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full max-w-[150px] sm:hidden">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full border border-[#1ed5a9] rounded-tr-lg font-semibold rounded-tl-lg px-8 py-2 bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] text-black flex justify-between items-center"
      >
        {active}
        <span className="ml-2"><svg className="w-[20px] h-[20px] text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
</svg></span>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute top-full -mt-2 pl-5 font-semibold  w-full border border-[#1ed5a9] rounded-br-lg rounded-bl-lg bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] text-black shadow-lg z-50">
          {options.filter((opt) => opt !== active).map((opt) => (
            <div
              key={opt}
              onClick={() => {
                setActive(opt);
                setOpen(false); // close dropdown after click
              }}
              className={`px-3 py-2 cursor-pointer hover:bg-[#1ed5a9] hover:text-[#032541] ${
                active === opt ? "bg-[#1ed5a9] text-[#032541]" : ""
              }`}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
