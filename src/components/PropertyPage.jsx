import React from "react";
import { Link, useParams } from "react-router-dom";
import Data from '../dataset/Data.json'
import PropertyCard from "./Card";

const PropertyPage = () => {

  const{title}=useParams()
 
  
  
  const getCar=(item) => {
    return item.title === title
  
  }

const res=Data.filter(getCar)

console.log(res[0])



  return (
    <>
      <div className="flex flex-row justify-center">
        {/* individual Card*/}
        { res[0] ?   //if res exists  or if it ot undefined
          <div className="basis-1/3  mb-6" >
            <Link to="/">
              <PropertyCard data={res[0]} />
            </Link>
          </div>:

          <h1 className="font-bold"> Not Found or Does not exist </h1>
        }


      </div>
    </> //closing
  );
};

export default PropertyPage;
