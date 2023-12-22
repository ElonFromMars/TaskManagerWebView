import { Link } from 'react-router-dom'
import SocialSignUp from './SocialSignUp'
import SignUpForm from './SignUpForm'


function Signup() {
    return (
        <div /*className="signup-container"*/>
            <div /*className="signup-content"*/>
                <h1 /*className="signup-title"*/>Signup with SpringSocial</h1>
                <SocialSignUp />
                <div /*className="or-separator"*/>
                    <span className="or-text">OR</span>
                </div>
                <SignUpForm />
                <span /*className="login-link"*/>Already have an account? <Link to="/login">Login!</Link></span>
            </div>
        </div>
    );
}

export default Signup;
