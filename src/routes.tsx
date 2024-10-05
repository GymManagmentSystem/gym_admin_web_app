import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomeDashbord from "./pages/HomeDashbordPage";
import MembersPage from "./pages/MembersPage";
import StaffMembersPage from "./pages/StaffMembersPage";
import MemberDetailsPage from "./pages/MemberDetailsPage";
import StaffMemberDetails from "./pages/StaffMemberDetails";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {index:true,element:<HomeDashbord/>},
            {path:'members',element:<MembersPage/>},
            {path:'members/:id',element:<MemberDetailsPage/>},
            {path:'staff',element:<StaffMembersPage/>},
            {path:'staff/:id',element:<StaffMemberDetails/>}
        ]
    }
])

export default routes;