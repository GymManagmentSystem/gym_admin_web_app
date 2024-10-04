import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomeDashbord from "./pages/HomeDashbordPage";
import MembersPage from "./pages/MembersPage";
import StaffMembersPage from "./pages/StaffMembersPage";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {index:true,element:<HomeDashbord/>},
            {path:'members',element:<MembersPage/>},
            {path:'staff',element:<StaffMembersPage/>}
        ]
    }
])

export default routes;