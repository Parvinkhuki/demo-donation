import {Link , useLoaderData, useParams } from "react-router-dom";
import { saveDonatedApplication } from "./function";


const Detail = () => {
    const {id}=useParams()
    const intId=parseInt(id)
     const categorys= useLoaderData()
    const category = categorys.find(category=>category.id===intId)

  console.log(id, categorys, category)

 
const btnColor={
    background:category.Text_Button_BG_Color
}
const handleDonation = () =>{
 saveDonatedApplication(intId)
 
  
}

    return (
      <>
      <div className="card mx-6 my-10 md:m-auto  card-compact max-w-screen-2xl bg-base-100 shadow-xl ">
  <figure><img className="w-full  " src={category.Picture} alt="categorys" /></figure>
  <div className=" -top-[101px] h-[100px] relative p-5 bg-black opacity-60"></div>
  <Link  to={"/donations"}> <button className="btn btn-primary text-white -top-44 m-3  relative
 "style={btnColor} onClick={handleDonation} >Donate $290</button></Link>
  <div className="card-body relative -top-24">
    <h2 className="card-title text-2xl font-bold">{category.Title

}</h2>
    <p>{category.Description
}</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
      </>
    );
};



export default Detail;