import { useEffect, useState } from "react";
import { getStoredDonatedApplication } from "./function";
import { useLoaderData } from "react-router-dom";
import DonationDetails from "./DonationDetails"


const Donation = () => {
    
    const danotions = useLoaderData();

    const [donatitons, setdonatitons] = useState([]);
    const [displayDonatitons, setDisplayDonatitons] = useState([]);
    const [dataLength, setDataLength]=useState([4])
    const hendleShowBttn=()=>{
        setDataLength(donatitons.length)
    }
  

   

    useEffect(() => {
        const storedDonationIds = getStoredDonatedApplication();
        if (danotions.length > 0) {
            const danotionsGive = [];
            for (const id of storedDonationIds) {
                const danotion = danotions.find(donate => donate.id === id);
                if (danotion) {
                    danotionsGive.push(danotion)
                }
            }
            setdonatitons(danotionsGive);
            setDisplayDonatitons(danotionsGive);
          
            console.log(donatitons)
        }
    }, [danotions])
   
   
    return (
        <div>
           
             <div className="grid lg:grid-cols-2 gap-5 mx-7">
             {
                   displayDonatitons.slice(0,dataLength). map(donate => <DonationDetails key={donate.id} donate={donate}></DonationDetails>
                    )
                }
             </div>
             <div className={displayDonatitons.length === 4 && 'hidden' || dataLength===displayDonatitons.length && 'hidden'}>
              <div className="w-full flex mx-auto justify-center my-7">
              <button className="btn bg-green-500 " onClick={hendleShowBttn}>show All </button>
              </div>

             </div>

           
       </div>
    );
};


export default Donation;