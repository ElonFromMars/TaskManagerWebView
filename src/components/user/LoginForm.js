import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, getLoginStatus, getError, clearState } from '../../data/features/userSlice.js';

function LoginForm () {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginStatus = useSelector(getLoginStatus);
    const loginError = useSelector(getError);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const request = Object.assign({}, formData);
        dispatch(loginUser(request));
    };

    if (loginStatus === 'failed') {
        alert((loginError && loginError.message) || 'Oops! Something went wrong. Please try again!');
        dispatch(clearState());
    }
    else if (loginStatus === 'succeeded') {
        dispatch(clearState());
        navigate('/user');
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div /*className="form-item"*/>
                <input type="email" name="email" 
                    /*className="form-control"*/ placeholder="Email"
                    value={formData.email} onChange={handleChange} required/>
            </div>
            <div /*className="form-item"*/>
                <input type="password" name="password" 
                    /*className="form-control"*/ placeholder="Password"
                    value={formData.password} onChange={handleChange} required/>
            </div>
            <div /*className="form-item"*/>
                <button type="submit" /*className="btn btn-block btn-primary"*/>Login</button>
            </div>
        </form>                    
    );
}

export default LoginForm;