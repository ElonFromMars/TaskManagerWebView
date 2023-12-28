import Button from '@mui/material/Button';
import { styles } from '../../styles';

function TableButton({table, handleOpenTable}) {

    return (
        <>
            <Button onClick={handleOpenTable} sx={styles.tableButton}>
                {table.name}
            </Button>
        </>
    );
  }
  
export default TableButton;