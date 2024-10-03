import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomeDashbord from "./pages/HomeDashbord";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {index:true,element:<HomeDashbord/>}
        ]
    }
])

export default routes;