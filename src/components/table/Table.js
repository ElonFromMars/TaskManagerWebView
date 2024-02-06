import CardsList from './CardsList.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearState,
  createCard,
  createCardList,
  fetchTable,
  getTableStatus,
  selectAllCardLists
} from '../../data/features/tableSlice'
import { Stack, ListItem } from '@mui/material';
import { styles } from '../../styles';
import CardDescription from '../card/CardDescription.js';
import {useEffect, useState} from 'react';
import AddList from './AddList.js';
import { useParams } from "react-router-dom";

function Table() {
  const [openTaskDescription, setOpenTaskDescription] = useState(false);
  
  const cardLists = useSelector(selectAllCardLists);
  const tableStatus = useSelector(getTableStatus);
  const dispatch = useDispatch();
  
  const { id } = useParams();
  
  function handleOpenCard(task) {
    //TODO dispatch open task request
    setOpenTaskDescription(true);
  }

  function handleCreateCardList(createCardListRequest) {
    dispatch(createCardList(createCardListRequest)).unwrap();
  }

  useEffect(() => {
    if (tableStatus === 'idle') {
      dispatch(fetchTable({id})).unwrap();
    }
  }, [tableStatus, dispatch])

  useEffect(() => {
    return () => {
      dispatch({ type: clearState })
    }
  }, [])
  
  let content = cardLists.map(cardList => 
    <ListItem key={cardList.id} style={styles.listsContainerItem}>
      <CardsList cardList={cardList} onOpenCard={handleOpenCard}/>
    </ListItem>)

  content.push(<ListItem key={"AddList"} style={styles.listsContainerItem}><AddList onAddButtonClick={handleCreateCardList}/></ListItem>);

  return (
    <>
    <Stack style={styles.listsContainer}>
         {content}
    </Stack>
    {openTaskDescription && 
      <CardDescription 
        open={openTaskDescription} 
        setOpen={setOpenTaskDescription}
      />}
    </>
  );
}

export default Table;