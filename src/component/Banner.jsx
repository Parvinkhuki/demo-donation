import CatagoryDetails from "./CatagoryDetails";
 import { useEffect, useState } from 'react';
import banner from '../assets/image/banner.jpg';
import Category from "./Category";
const Banner = () => {
  const divStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover', 
  };


const [donation,setDonation]=useState([])
const[ displayDonation, setDisplayDonatitons]=useState([])
const [clicked, setclicked]= useState(false)
useEffect(()=>{
  fetch('donated.json')
.then(res=>res.json())
.then (data=>setDonation(data))


},[donation])

  const hendleSerchbtn=(e)=>{
    e.preventDefault()
    // const data= e.target.text.value
    if(e.target.text.value === 'Health'){
      const serchDonation = donation.filter(card => card.Category === 'Health');
      setDisplayDonatitons(serchDonation);
  }
  else if (e.target.text.value === 'Education'){
      const serchDonation = donation.filter(card => card.Category === 'Education');
      setDisplayDonatitons(serchDonation);
  }
  else if(e.target.text.value=== 'Charity'){
      const serchDonation = donation.filter(card => card.Category === 'Charity');
      setDisplayDonatitons(serchDonation);
  }
  else if(e.target.text.value=== 'Food'){
     const serchDonation = donation.filter(card => card.Category === 'Food');
     setDisplayDonatitons(serchDonation);
   setclicked(true)
   console.log(clicked)
}

  }
    return (<>
        <div className="hero min-h-screen bg-white" style={divStyle}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="">
            <h1 className="mb-5 text-2xl md:text-6xl font-bold">I Grow By Helping People In Need</h1>
          <form action="" onSubmit={hendleSerchbtn}>
          <input type="text" placeholder="search here..." name='text' className=" w-[60%] px-5 text-3xl py-5 rounded mt-7 text-black" />
            <button className="bg-[#FF444A] py-6 px-5 text-2xl font-bold"onClick={()=>hendleSerchbtn(true)} >search</button>
           
          </form>
          </div>
        </div>
      
      </div>

       <div>

       </div>
       <div>
            {clicked===false?<Category></Category>:
 <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 my-20 max-w-screen-2xl mx-auto p-5">
        {
              displayDonation.map(category=><CatagoryDetails key={category.id} category={category}></CatagoryDetails>)
          }
        </div>

            }

        </div>
        </>
    );
};

export default Banner;