import Button from '@mui/material/Button';
import { styles } from '../../styles';
import { useAuth } from '../../security/AuthProvider';
import { useNavigate } from 'react-router-dom';

function SignInButton() {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        auth.login("test user")
        navigate('/signup');
    }

    return (
        <Button onClick={handleLogin} sx={styles.signinButton}> Sign In</Button>
    );
}

export default SignInButton;