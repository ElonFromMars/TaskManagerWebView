
import {React, useState} from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { getSelectdWorkspaceId, createTable } from '../../data/features/workspacesSlice'
import { useSelector, useDispatch } from 'react-redux';
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

function CreateTableModal({ isOpen, setOpen }){
    const [tableName, setTableName] = useState("");
    const handleClose = () => setOpen(false);

    const currentWorkspaceId = useSelector(getSelectdWorkspaceId);
    const dispatch = useDispatch();

    const handleCreateTable= () => {
        dispatch(createTable({ workspaceId: currentWorkspaceId, title: tableName }));
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
            <form autoComplete="off" onSubmit={handleCreateTable} action="#">
                <h2>Create Table</h2>
                    <TextField 
                        label="Name"
                        onChange={e => setTableName(e.target.value)}
                        required
                        variant="outlined"
                        color="secondary"
                        type="string"
                        sx={{mb: 3}}
                        fullWidth
                        value={tableName}
                    />
                    <Button variant="outlined" color="secondary" type="submit">Create</Button>
                
            </form>
        </Box>
      </Modal>
    );
} 

export default CreateTableModal;