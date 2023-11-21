import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='flex justify-center mt-48'>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if(user){
        return children
    }
   return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;