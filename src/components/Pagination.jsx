// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useState } from 'react';
import { Link } from 'react-router-dom';



// eslint-disable-next-line react/prop-types
const Pagination=({id})=> {
    
    
    


  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-sky-100 px-40 py-3
    
    
    ">

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between 
      
      
      
      ">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{id}</span> of <span className="font-medium">10 Pages</span> 
          </p>
        </div>
        <div>
          <nav className=" inline-flex  rounded-3xl 
           bg-teal-50
         
          gap-10
          
          
          " >


{ id >= 2 ?
            <Link
            
            to={`/page/${Number(id)-1}`}
            
              className="relative inline-flex items-center rounded-xl px-2 py-2 text-gray-700  shadow-slate-900
              ring-1 ring-inset ring-gray-700
             

              shadow-3xl"
            >
              
              < KeyboardBackspaceIcon className="h-5  w-5"  />
            </Link>
            :
            <Link
            
            to={`/page/1`}
            
            className="relative inline-flex items-center rounded-xl px-2 py-2 text-gray-700 
            ring-1 ring-inset ring-gray-700
          
            shadow-slate-900
            shadow-3xl"
            >
              
              < KeyboardBackspaceIcon className="h-5 w-5" aria-hidden="true" />
            </Link>



}






            <Link
            

           
              to='/page/1'
        
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 
              rounded-xl
              focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </Link>
            <Link
             

            
              to='/page/2'
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 
              rounded-xl
            "
            >
              2
            </Link>
            <Link
             

            
              to='/page/3'
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 
              rounded-xl
              md:inline-flex"
            >
              3
            </Link>

            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 
            rounded-xl
            
            focus:outline-offset-0">
              ...
            </span>
            <Link
             

            
              to='/page/8'
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 
              rounded-xl
              
               md:inline-flex"
            >
              8
            </Link>
            <Link
             

            
              to='/page/9'
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300
              rounded-xl
              
              "
            >
              9
            </Link>
            <Link
             

            
              to='/page/10'
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 
              rounded-xl
              
             "
            >
              10
            </Link>


{ id <= 9 ? <Link
            
              to={`/page/${Number(id)+1}`}
              
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-700  
              
              rounded-xl
               "
            >
            
              <ArrowRightAltIcon className="h-5 w-5" aria-hidden="true" />
            </Link>:




<Link
            
            to={`/page/1`}
            
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-700  
            rounded-xl
            "
          >
          
            <ArrowRightAltIcon className="h-5 w-5" aria-hidden="true" />
          </Link>



}



          </nav>
        </div>
      </div>
    </div>
  )
}


export default Pagination 