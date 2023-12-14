import Button from '@mui/material/Button';
import { styles } from '../../styles';
import { useAuth } from '../../security/AuthProvider';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/');
    }

    return (
        <>
            <Button onClick={handleLogout} sx={styles.logoutButton}>Logout</Button>
        </>
    );
}

export default UserProfile;