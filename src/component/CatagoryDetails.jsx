import { NavLink } from "react-router-dom";


const CatagoryDetails = ({category}) => {
 const   {id,Card_BG_Color,Category,Category_BG_Color,Picture,Text_Button_BG_Color,Title
   }=category
   const categoryStyle = {
    backgroundColor: Category_BG_Color,
    color:Text_Button_BG_Color
   
  };
  const titleStyle = {
   color: Text_Button_BG_Color,
  };
  const cardStyle = {
    backgroundColor: Card_BG_Color,}
    return (
       <NavLink to={`/details/${id}`}>
         <div>
            <div className={`card  bg-base-100 shadow-xl ${Card_BG_Color}`}
            style={cardStyle}>
  <figure><img src={Picture} alt="donation" /></figure>
  <div className="card-body">
  <button style={categoryStyle} className="text-left w-3/5 p-3 text-lg rounded font-bold ">{Category}</button>
    <p style={titleStyle} className="text-2xl font-bold">{Title}</p>
  
     
    </div>
  </div>
</div>
       </NavLink>
      
    );
};

export default CatagoryDetails;