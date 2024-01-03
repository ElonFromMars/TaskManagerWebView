import CardsList from './CardsList.js';
import { useSelector } from 'react-redux';
import { selectAllCardLists } from '../../data/features/tableSlice'
import { Stack, ListItem } from '@mui/material';
import { styles } from '../../styles';
import CardDescription from '../card/CardDescription.js';
import { useState } from 'react';
import AddList from './AddList.js';

function Table() {
 
  const [openTaskDescription, setOpenTaskDescription] = useState(false);
  const cardLists = useSelector(selectAllCardLists);
  
  function handleOpenCard(task) {
    //TODO dispatch open task request
    setOpenTaskDescription(true);
  }

  let content = cardLists.map(cardList => 
    <ListItem style={styles.listsContainerItem}>
      <CardsList key={cardList.id} cardList={cardList} onOpenCard={handleOpenCard}/>
    </ListItem>)

  content.push(<ListItem style={styles.listsContainerItem}><AddList/></ListItem>);

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