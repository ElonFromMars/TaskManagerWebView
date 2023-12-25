import { Box, Drawer, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import { styles } from '../../styles';
import { useSelector, useDispatch } from 'react-redux';
import SelectWorkspaceButton from './SelectWorkspaceButton.js';
import { selectWorkspace, selectAllWorkpaces } from '../../data/features/workspacesSlice.js'

function Sidebar({isSideBarOpened, toggleSidebar, setOpenCreateWorkspaceModal, window}) {
    const theme = useTheme();

    const dispatch = useDispatch();

    const container = window !== undefined ? () => window.document.body : undefined;
    const workspaces = useSelector(selectAllWorkpaces);
    
    const handleCreateWorkspace = () => {
        setOpenCreateWorkspaceModal(true);
    }

    const handleSelectWorkspace = (workspace) => {
        dispatch(selectWorkspace({ id: workspace.id }));
    }

    const content = workspaces.map(workspace => <SelectWorkspaceButton key={workspace.id} handleSelectWorkspace={handleSelectWorkspace} workspace={workspace}/>);

    return (
        <Box component ="nav" sx={{ width: 200 }} aria-label="mailbox folders">
            <Drawer
                container={container}
                variant='persistent'
                anchor="left"
                open={isSideBarOpened}
                onClose={toggleSidebar}
                sx={{
                '& .MuiDrawer-paper': {
                    width: 200,
                    background: theme.palette.background.default,
                    color: theme.palette.text.primary,
                    borderRight: 'none',
                    [theme.breakpoints.up('md')]: {
                    top: '119px'
                    }
                }
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >
                <Box>
                    <Box sx={styles.workpsacesListHeader}>
                        <Box sx={styles.workpsacesListHeaderText}>
                            Workspaces
                        </Box> 
                        <Button onClick={handleCreateWorkspace}>
                            <AddIcon/>
                        </Button>
                    </Box>
                    {content}
                </Box>
            </Drawer>
         </Box>
    );
  }
  
export default Sidebar;