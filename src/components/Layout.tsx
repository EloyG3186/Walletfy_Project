import { Outlet } from "react-router-dom";

const Layout = () =>{
    return(
        <div className="cd-mt-5 cd-ml-5 cd-mr-5 cd-border cd-border-gray-300 cd-rounded-md cd-p-5 cd-bg-gray-200">
            <Outlet/>
        </div>
    );
};

export default Layout;