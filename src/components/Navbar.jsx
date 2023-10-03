import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropertyPage from "./PropertyPage";

const Navbar = () => {
const [srchData, setSrchData] = useState('')




const setData=(val) => {

  setSrchData(val.target.value)
 

}





  return (
    <div
      className="
    w-full
    h-full

    m-14
    mx-32
    
    "
    >
      <nav
        className="relative flex w-[86rem] flex-wrap items-center justify-between   text-neutral-500  hover:text-neutral-700 focus:text-neutral-700 bg-sky-100
      rounded-3xl
      shadow-slate-400
      shadow-lg
      py-3
      
      "
      >
        <div className="ml-5 flex w-[30%] items-center justify-between">
          <input
            type="search"
            className="w-full
        h-10
        rounded-3xl
        pl-14
        ml-14
        mr-2
        
        "
            placeholder="Search"

            onChange={setData}
            


          />

{ srchData ? 

<Link to={'/'+srchData}>
  <span
          
            className="input-group-text flex items-center whitespace-nowrap rounded  py-1.5 text-center text-base font-normal  dark:text-neutral-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" />
              </svg>
            </span>
</Link>
:
<span
          
className="input-group-text flex items-center whitespace-nowrap rounded  py-1.5 text-center text-base font-normal  dark:text-neutral-700">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" />
  </svg>
</span>
          
        
        
        
        
        
        }




        








        </div>





        <div className=" text-left mx-10">
          <label
            
            className="flex items-center space-x-1 cursor-pointer"
          >
            <span className="text-lg">Relevance</span>

            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </label>
        </div>


       




      </nav>
    </div>
  );
};

export default Navbar;
