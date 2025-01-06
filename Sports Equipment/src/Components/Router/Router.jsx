import {
    createBrowserRouter,
} from "react-router-dom";
import AddEquipmet from "../AddEquipment/AddEquipmet";
import AllSports from "../AllSports/AllSports";
import Home from "../HomeLayout/Home";
import Login from "../login/Login";
import MainLayout from "../MainLayout/MainLayout";
import MyEquipment from "../MyEquipment/MyEquipment";
import PrivateProvider from "../PrivateProvider/PrivateProvider";
import Register from "../Register/Register";
import Update from "../Update/Update";
import ViewDetails from "../ViewDetails/ViewDetails";
import Error from "../error/Error";
import Contract from "../Contract/Contract";
import Details from "../Details";

const Router =createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/details',
                element:<Details></Details>
            },
            {
                path:'/contract',
                element:<Contract></Contract>
            },
            {
                path:'/allSports',
                element:<AllSports></AllSports>,
                loader:()=> fetch('https://server-jade-sigma.vercel.app/sportsAll')
            },
            {
                path:'/addEquipment',
                element:<PrivateProvider><AddEquipmet></AddEquipmet></PrivateProvider>
            },
            {
                path:'/myEquipment',
                element:<PrivateProvider><MyEquipment></MyEquipment></PrivateProvider>,
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/details/:id',
                element:<PrivateProvider><ViewDetails></ViewDetails></PrivateProvider>,
                loader:({params})=>fetch(`https://server-jade-sigma.vercel.app/sports/${params.id}`)
            },
            {
                path:'/update/:id',
                element:<Update></Update>,
                loader:({params})=> fetch(`https://server-jade-sigma.vercel.app/sports/${params.id}`)
            }
        ]
    }
])

export default Router;