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
import ExercisePage from "./pages/ExercisePage";
import AddExercisePage from "./pages/AddExercisePage";
import Login from "./pages/Login";
import AddNewSchedule from "./pages/AddNewSchedule";
import AddWorkOut from "./pages/AddWorkOut";
import PackagesPage from "./pages/PackagesPage";
import AddPackagePage from "./pages/AddPackagePage";
import PaymentHistoryPage from "./pages/PaymentHistoryPage";
import PaymentsPage from "./pages/PaymentsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />, // LoginPage as the default entry point
    index: true,
  },

  {
    path: "/app",
    element: <Layout />,
    children: [
      { path: "dashbord", element: <HomeDashbord /> },
      
      { path: "members", element: <MembersPage /> },
      { path: "members/:id", element: <MemberDetailsPage /> },
      { path: "members/addMember", element: <AddMemberPage /> },

      { path: "staff", element: <StaffMembersPage /> },
      { path: "staff/:id", element: <StaffMemberDetails /> },
      { path: "staff/addStaffMember", element: <AddStaffMemberPage /> },

      { path: "schedule", element: <SchedulePage /> },
      { path: "schedule/addSchedule/:id", element: <AddNewSchedule /> },
      { path: "schedule/addSchedule/addWorkout", element: <AddWorkOut /> },
      { path: "schedule/:id", element: <CurrentSchedulePage /> },
      {
        path: "schedule/historySchedule/:id",
        element: <HistorySchedulePage />,
      },

      { path: "addPayment/:id", element: <AddPaymentPage/> },
      { path: "paymentHistory/:id", element: <PaymentHistoryPage/> },
      {path:"payments",element:<PaymentsPage/>},

      { path: "exercises", element: <ExercisePage /> },
      { path: "exercises/addExercise", element: <AddExercisePage /> },

      { path: "packages", element: <PackagesPage /> },
      { path: "packages/addPackage", element: <AddPackagePage /> }
    ],
  },
]);

export default routes;
