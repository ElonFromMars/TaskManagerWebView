import { Link } from 'react-router-dom'
import LoginForm from './LoginForm';
import SocialLogin from './SocialLogin';

function Login() {    
    return (
        <div /*className="login-container"*/>
            <div /*className="login-content"*/>
                <h1 /*className="login-title"*/>Login to SpringSocial</h1>
                <SocialLogin />
                <div /*className="or-separator"*/>
                    <span /*className="or-text"*/>OR</span>
                </div>
                <LoginForm/>
                <span /*className="signup-link"*/>New user? <Link to="/signup">Sign up!</Link></span>
            </div>
        </div>
    );
}

export default Login;
