
import { Box, Button } from '@mui/material';
import { styles } from '../../styles';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { removeWorkspace } from '../../data/features/workspacesSlice';

function SelectWorkspaceButton({workspace, handleSelectWorkspace}) {
    const dispatch = useDispatch();

    const handleRemoveWorkspace= () => {
        dispatch(removeWorkspace({ id: workspace.id}));
    }
   
    return (
        <Box sx={styles.selectWorkpsaceButton}>
            <Button sx={styles.selectWorkpsaceButtonText} onClick={()=>handleSelectWorkspace(workspace)}>
                {workspace.title}
            </Button> 
            <Button sx={styles.delteWorkpsaceButton} onClick={handleRemoveWorkspace}>
                <CloseIcon sx={styles.delteWorkpsaceButtonIcon}/>
            </Button>
        </Box>
    );
  }
  
export default SelectWorkspaceButton;