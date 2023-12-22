import { signup } from '../../data/APIUtils';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
    const [formData, setFormData] = useState({
        name: '',
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
    
        const signUpRequest = Object.assign({}, formData);

        signup(signUpRequest)
        .then(response => {
            //alert("You're successfully registered. Please login to continue!");
            navigate('/login');
        }).catch(error => {
            alert((error && error.message) || 'Oops! Something went wrong. Please try again!');            
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div /*className="form-item"*/>
                <input type="text" name="name" 
                    /*className="form-control"*/ placeholder="Name"
                    value={formData.name} onChange={handleChange} required/>
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
