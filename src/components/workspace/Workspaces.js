import { useSelector } from 'react-redux';
import { selectAllTablesFromWorkpace } from '../../data/features/workspaceSlice.js'
import TableButton from './TableButton.js';
import Sidebar from './Sidebar.js';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { styles } from '../../styles';
import { AppBar, Box, Toolbar, IconButton, CssBaseline } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    ...theme.typography.mainContent,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create(
      'margin',
      open
        ? {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
          }
        : {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
          }
    ),
    marginLeft: open ? 0 : -(200 - 20),
    width: `calc(100% - ${200}px)`

  }));

function Workspaces() {
    const [isSideBarOpened, setSideBarOpened] = useState(true);

    const tables = useSelector(selectAllTablesFromWorkpace);
    const theme = useTheme();
    
    const navigate = useNavigate();

    const handleOpenTable = () => {
        navigate('/user/table');
    }

    const handleLeftDrawerToggle = () => {
        setSideBarOpened(!isSideBarOpened);
    };

    const content = tables.map(table => 
    <Grid item key={table.id}>
        <TableButton handleOpenTable={handleOpenTable} table={table}/>
    </Grid>);

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleLeftDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box sx={{ display: 'flex'}}>
                <Sidebar isSideBarOpened={isSideBarOpened} setSideBarOpened={setSideBarOpened} toggleSidebar={handleLeftDrawerToggle}/>

                <Main theme={theme} open={isSideBarOpened}>
                    <Box>
                        <Grid container justifyContent="start" spacing={3} sx={styles.tableContainer} >
                            {content}
                        </Grid>
                    </Box>
                </Main>
            </Box>
        </Box>
    );
  }
  
export default Workspaces;