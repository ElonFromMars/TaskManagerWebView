import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { fetchUserBytoken, getLoginStatus, clearState } from '../data/features/userSlice.js';

function RequireAuth ({ children }) {
    
    const dispatch = useDispatch();

    const loginStatus = useSelector(getLoginStatus);

    useEffect(() => {
        if (loginStatus === 'idle') {
            dispatch(fetchUserBytoken()).unwrap();
        }
    }, [loginStatus, dispatch])
    
    useEffect(() => {
        if (loginStatus === 'failed') {
            dispatch(clearState());
        }
    });

    if(loginStatus === 'succeeded'){
        return children;
    }  
    else if (loginStatus === 'failed') {
        return <Navigate to='/'/>
    }
    else{
        return <></>
    }
  
}

export default RequireAuth;
