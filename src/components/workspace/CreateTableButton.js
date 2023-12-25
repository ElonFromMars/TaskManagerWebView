import Button from '@mui/material/Button';
import { styles } from '../../styles';
import AddIcon from '@mui/icons-material/Add';

function CreateTableButton({handleCreateTable}) {

    return (
        <>
            <Button onClick={handleCreateTable} sx={styles.tableButton}>
                <AddIcon/>
            </Button>
        </>
    );
  }
  
export default CreateTableButton;