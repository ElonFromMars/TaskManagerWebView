import React from 'react';
//import { ACCESS_TOKEN } from '../../constants';
//TODO
import { Navigate } from 'react-router-dom'

function OAuth2RedirectHandler() {

    const getUrlParameter = (uriParametrName) => {
        uriParametrName = uriParametrName.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + uriParametrName + '=([^&#]*)');

        var results = regex.exec(window.location.href.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

  
    const token = getUrlParameter('token');
    const error = getUrlParameter('error');

    if(token) {
        localStorage.setItem('accessToken', token);
     
        return <Navigate to="/profile" state={{ 
            from: window.location.href,
        }}
        />; 
    } else {
        return <Navigate to="/login" state={{ 
            from: window.location.href,
            error: error 
        }}
        />; 
    }

}

export default OAuth2RedirectHandler;