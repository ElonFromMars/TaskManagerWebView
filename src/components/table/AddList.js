import { useDispatch } from 'react-redux';
import { listAdded } from '../../data/features/tableSlice'
import { Box, Button } from '@mui/material';
import { styles } from '../../styles';
import AddIcon from '@mui/icons-material/Add';

function AddList() {
  
  const dispatch = useDispatch();

  const onAddButtonClicked = () => {
    dispatch(listAdded());
  }

  return (
    <Box sx={styles.addlistContainer}>
        <Button sx={{display: 'flex', justifyContent: 'center'}} onClick={onAddButtonClicked}>
            <AddIcon/>
        </Button>
    </Box>
  );
}

export default AddList;