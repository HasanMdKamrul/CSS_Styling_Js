import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";
import Registration from "../components/Registration/Registration";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children:[
            {
                index: true,
                element: <Registration/>
            },
            {
                path:'/login',
                element: <LoginForm/>
            },
            {
                path:'/register',
                element: <Registration/>
            }
        ]
    }
])