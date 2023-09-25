import { Link } from "react-router-dom";


const DonationDetails = ({donate}) => {
    const {id,Card_BG_Color,Category,Category_BG_Color,Picture,Text_Button_BG_Color,Title, Price}=donate
    const categoryStyle = {
        backgroundColor: Category_BG_Color,
        color:Text_Button_BG_Color
       
      };
      const btnStyle={
        backgroundColor:Text_Button_BG_Color
      }
      const titleStyle = {
       color: Text_Button_BG_Color,
      };
      const cardStyle = {
        backgroundColor: Card_BG_Color,}
        

        







    return (
        <div className="grid grid-cols-3 shadow-2xl my-11  mx-7 " style={cardStyle}>
         <div><img className="h-full" src={Picture} alt="" /></div>
         <div className="col-span-2 p-8">
            <button className="btn border-0" style={categoryStyle}>{Category}</button>
            <h1 className="text-3xl font-bold ">{Title}</h1>
            <h3 className="text-xl font-bold" style={titleStyle}>{Price}</h3>
          <Link to={`/details/${id}`}>  <button className="btn btn-primary" style={btnStyle}> see details</button></Link>
         </div>
        </div>
    );
};

export default DonationDetails;