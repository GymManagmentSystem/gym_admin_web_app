import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomeDashbord from "./pages/HomeDashbordPage";
import MembersPage from "./pages/MembersPage";
import StaffMembersPage from "./pages/StaffMembersPage";
import MemberDetailsPage from "./pages/MemberDetailsPage";
import StaffMemberDetails from "./pages/StaffMemberDetails";
import SchedulePage from "./pages/SchedulePage";
import CurrentSchedulePage from "./pages/CurrentSchedulePage";
import HistorySchedulePage from "./pages/HistorySchedulePage";
import AddMemberPage from "./pages/AddMemberPage";
import AddPaymentPage from "./pages/AddPaymentPage";
import AddStaffMemberPage from "./pages/AddStaffMemberPage";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {index:true,element:<HomeDashbord/>},
            {path:'members',element:<MembersPage/>},
            {path:'members/:id',element:<MemberDetailsPage/>},
            {path:'members/addMember',element:<AddMemberPage/>},
            {path:'staff',element:<StaffMembersPage/>},
            {path:'staff/:id',element:<StaffMemberDetails/>},
            {path:'staff/addStaffMember',element:<AddStaffMemberPage/>},
            {path:'schedule',element:<SchedulePage/>},
            {path:'schedule/:id',element:<CurrentSchedulePage/>},
            {path:'schedule/historySchedule/:id',element:<HistorySchedulePage/>},
            {path:'addPayment/:id',element:<AddPaymentPage/>}
        ]
    }
])

export default routes;