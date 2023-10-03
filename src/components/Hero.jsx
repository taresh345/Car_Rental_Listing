import React, { useState } from "react";
import PropertyCard from "./Card";

import Data from "../dataset/Data.json";
// import { Link, useParams } from "react-router-dom";

// __________________structure of dataset__________________
// "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg",
// "title": "Mazda MX-5",
// "start_production": 1989,
// "class": "Sports car Roadster"



const Hero = ({start,visible,id}) => {








  return (
    <>
      <div
        className="flex 
flex-row 
flex-wrap 

ml-16
px-16

"
      >
        {
        
        
        Data.slice(start, visible).map((data, index) => {
          return (
            <div className="basis-1/3  mb-6 " key={index}>
             
                <PropertyCard data={data} />

           
            </div>
          );
        })

        
        
        }
      </div>

  



    </>
  );
};

export default Hero;
