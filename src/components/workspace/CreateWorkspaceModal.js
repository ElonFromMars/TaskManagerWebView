import {React, useState} from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { createWorkspace } from '../../data/features/workspacesSlice'
import { useDispatch } from 'react-redux';
import { Button, TextField } from "@mui/material";

//TODO move to separate file
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function CreateWorkspaceModal({ isOpen, setOpen }){
    const [workspaceName, setWorkspaceName] = useState("");
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();

    const handleCreateWorkspace= () => {
        dispatch(createWorkspace({ title: workspaceName }));
        handleClose();
        return false;
    }

    return (
        <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <form autoComplete="off" onSubmit={handleCreateWorkspace} action="#">
                <h2>Create Workspace</h2>
                    <TextField 
                        label="Name"
                        onChange={e => setWorkspaceName(e.target.value)}
                        required
                        variant="outlined"
                        color="secondary"
                        type="string"
                        sx={{mb: 3}}
                        fullWidth
                        value={workspaceName}
                    />
                    <Button variant="outlined" color="secondary" type="submit">Create</Button>
                
            </form>
        </Box>
      </Modal>
    );
} 

export default CreateWorkspaceModal;