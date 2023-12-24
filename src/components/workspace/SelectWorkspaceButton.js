
import { Box, Button } from '@mui/material';
import { styles } from '../../styles';
import CloseIcon from '@mui/icons-material/Close';

function SelectWorkspaceButton({workspace, handleSelectWorkspace}) {
    return (
        <Box sx={styles.selectWorkpsaceButton}>
            <Button sx={styles.selectWorkpsaceButtonText} onClick={handleSelectWorkspace}>
                {workspace.title}
            </Button> 
            <Button sx={styles.delteWorkpsaceButton}>
                <CloseIcon sx={styles.delteWorkpsaceButtonIcon}/>
            </Button>
        </Box>
    );
  }
  
export default SelectWorkspaceButton;