import { GOOGLE_AUTH_URL } from '../../constants';
import googleLogo from '../../img/google-logo.png';

function SocialSignup() {
    return (
        <div /*className="social-signup"*/>
            <a /*className="btn btn-block social-btn google"*/ href={GOOGLE_AUTH_URL}>
                <img src={googleLogo} alt="Google" /> Sign up with Google</a>
        </div>
    );
}

export default SocialSignup;
