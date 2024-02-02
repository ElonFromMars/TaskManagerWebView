import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser, getLoginStatus, getError, clearState } from '../../data/features/userSlice.js';

function SignUpForm() {
    const [formData, setFormData] = useState({
        username: '',
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
        dispatch(registerUser(request));
    };

    useEffect(() => {
        if (loginStatus === 'failed') {
            alert((loginError && loginError.message) || 'Oops! Something went wrong. Please try again!');
            dispatch(clearState());
        }
        else if (loginStatus === 'succeeded') {
            dispatch(clearState());
            navigate('/login');
        }
    });


    return (
        <form onSubmit={handleSubmit}>
            <div /*className="form-item"*/>
                <input type="text" name="username" 
                    /*className="form-control"*/ placeholder="Username"
                    value={formData.username} onChange={handleChange} required/>
            </div>
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
                <button type="submit" /*className="btn btn-block btn-primary"*/ >Sign Up</button>
            </div>
        </form>                    

    );
}

export default SignUpForm;
