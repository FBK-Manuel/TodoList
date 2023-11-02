import { Navigate, Outlet } from "react-router-dom";



const PrivateRoutes = () => {
    const users = false;
    return users ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes;