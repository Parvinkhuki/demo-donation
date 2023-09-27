import { NavLink } from "react-router-dom";
import Logo from '../assets/image/Logo.png';
const Nav = () => {
   
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

        
       <div className="md:flex  p-8 justify-between items-center">
  <div >
    <a ><img src={Logo} alt="" /></a>
  </div>
  <div >
    <ul className="text-center mt-4 md:mt-0 flex items-center justify-center text-xl lg:gap-10 gap-3 lg:text-2xl font-bold">
    
    <li> <NavLink to={'/'} style={style}>HOME</NavLink></li>
      <li> <NavLink to={'/donations'} style={style}>DONATION</NavLink></li>
         <li><NavLink to={'/statistics'} style={style}>STATISTICS</NavLink></li>
        
      
    </ul>
  </div>
</div>
 </div>   );
};

export default Nav;
