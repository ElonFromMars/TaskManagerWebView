import Button from '@mui/material/Button';
import { styles } from '../../styles';

function TableButton({table, handleOpenTable}) {
    function handleOpenTableButtonClick() {
        handleOpenTable(table.id);
    }
    
    return (
        <>
            <Button onClick={handleOpenTableButtonClick} sx={styles.tableButton}>
                {table.name}
            </Button>
        </>
    );
  }
  
export default TableButton;