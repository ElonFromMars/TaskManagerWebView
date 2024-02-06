import { Box, Button } from '@mui/material';
import { styles } from '../../styles';
import AddIcon from '@mui/icons-material/Add';

function AddList({onAddButtonClick}) {
  const handleAddButtonClicked = () => {
      onAddButtonClick({name:"New List"});
  }

  return (
    <Box sx={styles.addlistContainer}>
        <Button sx={{display: 'flex', justifyContent: 'center'}} onClick={handleAddButtonClicked}>
            <AddIcon/>
        </Button>
    </Box>
  );
}

export default AddList;