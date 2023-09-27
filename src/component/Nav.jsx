import { NavLink } from "react-router-dom";
import Logo from '../assets/image/Logo.png'
import { AiOutlineMenu,AiFillCloseCircle } from 'react-icons/ai';
import { useState } from "react";
const Nav = () => {
    const [open ,setOpen]=useState(false)
    const style=
    ({ isActive}) => {
        return {
          backgroundColor: isActive ? "transparent"  : "",
          fontWeight: isActive ? "bold" : "",
          color:isActive? "#FF444A":"",
          textDecoration:isActive? 'underline':''
     
        };
      }

    return ( 
        <div>

        
       <div className="flex  p-8 justify-between items-center">
  <div >
    <a ><img src={Logo} alt="" /></a>
  </div>
  <div >
  <div className="md:hidden text-2xl text-right" onClick={()=>setOpen(!true)}>
         {
        open===true? <AiFillCloseCircle/>:<AiOutlineMenu/>
         }
        </div>
    <ul className={`absolute md:static md:flex md:items-center md:justify-center text-xl lg:gap-10 md:gap-3 lg:text-2xl md:bg-transparent font-bold p-4 border-orange-500 border-1 ${open? 'top-20 left-60':'-top-72'}  bg-white  rounded-xl`}>
    
    <li> <NavLink to={'/'} style={style}>HOME</NavLink></li>
      <li> <NavLink to={'/donations'} style={style}>DONATION</NavLink></li>
         <li><NavLink to={'/statistics'} style={style}>STATISTICS</NavLink></li>
        
      
    </ul>
  </div>
</div>
 </div>   );
};

export default Nav;
