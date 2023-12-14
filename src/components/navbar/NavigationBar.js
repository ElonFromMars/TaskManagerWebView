import Button from '@mui/material/Button';
import { styles } from '../../styles';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

function NavigationBar() {

  const navigate = useNavigate();

  function handleOpenTable() {
      navigate('/');
  }

  return (
    <Box sx={styles.navigationBar}>
      <Button onClick={handleOpenTable} sx={styles.homeButton}>Home</Button>
    </Box>
  );
}

export default NavigationBar;