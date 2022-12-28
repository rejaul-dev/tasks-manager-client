import { createBrowserRouter } from "react-router-dom";
import AddTasks from "../../components/AddTasks";
import CompletedTasks from "../../components/CompletedTasks";
import Home from "../../components/Home";
import MyTasks from "../../components/MyTasks";
import Main from "../../layout/Main";

export const router = createBrowserRouter([
{
    path:'/',
    element:<Main/>,
    children:[
        {
            path:"/home",
            element:<Home/>
        },
        {
            path:'/addTasks',
            element:<AddTasks/>
        },
        {
            path: '/myTasks',
            element: <MyTasks/>
        },
        {
            path:'/completedTasks',
            element:<CompletedTasks/>
        }
    ]
}
])