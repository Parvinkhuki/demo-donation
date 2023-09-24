import { Outlet, useNavigation } from "react-router-dom";
import Nav from "./Nav";


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
        </div>
    );
};

export default Root;