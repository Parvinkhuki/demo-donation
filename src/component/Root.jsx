import { Outlet, useNavigation } from "react-router-dom";
import Nav from "./Nav";
import { ToastContainer } from 'react-toastify'

const Root = () => {
    const navigation=useNavigation()
    return (
    
             <div>
           <Nav></Nav>
             <div> 
                 {navigation.state === "loading" ? 
                <p className="text-3xl text-center">loading........</p>: 
               <Outlet></Outlet>
            }</div>
            <ToastContainer />
        </div>
        
    );
};

export default Root;