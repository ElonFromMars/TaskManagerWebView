import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllTablesFromWorkpace, getSelectdWorkspaceId, fetchWorkspaces, getWorkspacesStatus } from '../../data/features/workspacesSlice.js'
import TableButton from './TableButton.js';
import CreateTableButton from './CreateTableButton.js';
import Sidebar from './Sidebar.js';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { styles } from '../../styles';
import { AppBar, Box, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import CreateTableModal from './CreateTableModal.js';
import CreateWorkspaceModal from './CreateWorkspaceModal.js';

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
    const [isOpenCreateTableModal, setOpenCreateTableModal] = useState(false);
    const [isOpenCreateWorkspaceModal, setOpenCreateWorkspaceModal] = useState(false);

    const workspacesStatus = useSelector(getWorkspacesStatus);
    const currentWorkspaceId = useSelector(getSelectdWorkspaceId);
   
    const tables = useSelector((state) => selectAllTablesFromWorkpace(state, currentWorkspaceId));
    const theme = useTheme();
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOpenTable = (tableId) => {
        navigate("/user/table/" + tableId);
    }

    const handleCreateTable = () => {
        setOpenCreateTableModal(!isOpenCreateTableModal);
    }

    const handleLeftDrawerToggle = () => {
        setSideBarOpened(!isSideBarOpened);
    };
    
    useEffect(() => {
        if (workspacesStatus === 'idle') {
            dispatch(fetchWorkspaces()).unwrap();
        }
    }, [workspacesStatus, dispatch])
    
    let content = [];
    if(currentWorkspaceId){
        if(tables){
            content = tables.map(table => 
            <Grid item key={table.id}>
                <TableButton handleOpenTable={handleOpenTable} table={table}/>
            </Grid>);
            
        }
        content.push(
            <Grid item key={"createTable"}>
            <CreateTableButton handleCreateTable={handleCreateTable}/>
        </Grid>);
    }
    
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
                <Sidebar isSideBarOpened={isSideBarOpened} setSideBarOpened={setSideBarOpened} toggleSidebar={handleLeftDrawerToggle} setOpenCreateWorkspaceModal={setOpenCreateWorkspaceModal}/>

                <Main theme={theme} open={isSideBarOpened}>
                    <Box>
                        <Grid container justifyContent="start" spacing={3} sx={styles.tableContainer} >
                            {content}
                        </Grid>
                    </Box>
                </Main>
            </Box>
            {isOpenCreateTableModal && 
            <CreateTableModal 
                isOpen={isOpenCreateTableModal} 
                setOpen={setOpenCreateTableModal}
            />}
            {isOpenCreateWorkspaceModal && 
            <CreateWorkspaceModal 
                isOpen={isOpenCreateWorkspaceModal} 
                setOpen={setOpenCreateWorkspaceModal}
            />}
        </Box>
    );
  }
  
export default Workspaces;