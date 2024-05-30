import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Main from "../layout/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signUp',
          element:<Register></Register>
        }
      ]
    },
  ]);


  export default router;