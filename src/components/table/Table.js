import CardsList from './CardsList.js';
import { useSelector } from 'react-redux';
import { selectAllCardLists } from '../../data/features/tableSlice'
import { Stack, ListItem } from '@mui/material';
import { styles } from '../../styles';
import CardDescription from '../card/CardDescription.js';
import { useState } from 'react';

function Table() {
 
  const [openTaskDescription, setOpenTaskDescription] = useState(false);
  const cardLists = useSelector(selectAllCardLists);
  
  function handleOpenCard(task) {
    //TODO dispatch open task request
    setOpenTaskDescription(true);
  }

  const content = cardLists.map(cardList => 
    <ListItem style={styles.listsContainerItem}>
      <CardsList key={cardList.id} cardList={cardList} onOpenCard={handleOpenCard}/>
    </ListItem>)

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