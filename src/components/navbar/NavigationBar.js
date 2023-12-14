import Button from '@mui/material/Button';
import { styles } from '../../styles';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

function NavigationBar() {
    const navigate = useNavigate();

    function handleOpenTable() {
        navigate('/user');
    }

    function handleOpenProfile() {
      navigate('/user/profile');
    }

    return (
      <Box sx={styles.navigationBar}>
        <Box sx={styles.navigationBarLeft}>
          <Button onClick={handleOpenTable} sx={styles.homeButton}>Home</Button>
        </Box>
        <Box sx={styles.navigationBarRight}>
          <Button onClick={handleOpenProfile} sx={styles.profileButton}>Profile</Button>
        </Box>
      </Box>
    );
}

export default NavigationBar;