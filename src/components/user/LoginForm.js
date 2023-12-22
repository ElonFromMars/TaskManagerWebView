import { ACCESS_TOKEN } from '../../constants';
import { login } from '../../data/APIUtils';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function LoginForm () {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const loginRequest = Object.assign({}, formData);

        login(loginRequest)
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            //alert("You're successfully logged in!");
            navigate('/user');
        }).catch(error => {
            alert((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
    };
    
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