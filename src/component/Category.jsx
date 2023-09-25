import { useState,useEffect } from "react";
import CatagoryDetails from "./CatagoryDetails";

const Category = () => {

        const [categorys, setcategorys]= useState([])
      
        useEffect(()=>{
            fetch('donated.json')
         .then(res=>res.json())
         .then (data=>setcategorys(data))
        
    
        },[categorys])
        
   
    return (
        <div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 my-20 max-w-screen-2xl mx-auto p-5">
          {
                categorys.map(category=><CatagoryDetails key={category.id} category={category}></CatagoryDetails>)
            }
          </div>

        </div>
    );
};

export default Category;