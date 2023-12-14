import { useSelector } from 'react-redux';
import { selectAllTables } from '../../data/features/workspacesSlice'
import TableButton from './TableButton.js';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { styles } from '../../styles';

function Workspaces() {
    const tables = useSelector(selectAllTables);
  
    const navigate = useNavigate();

    function handleOpenTable() {
        navigate('/table');
    }

    const content = tables.map(table => 
    <Grid item key={table.id}>
        <TableButton handleOpenTable={handleOpenTable} table={table}/>
    </Grid>);

    return (
        <>
            <div>
                Workspaces
            </div>
            <Grid container justifyContent="start" spacing={3} sx={styles.tableContainer} >
                {content}
            </Grid>
        </>
    );
  }
  
export default Workspaces;