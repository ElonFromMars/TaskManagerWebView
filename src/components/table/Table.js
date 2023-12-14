import CardsList from './CardsList.js';
import { useSelector } from 'react-redux';
import { selectAllCardLists } from '../../data/features/tableSlice'
import { Stack, ListItem } from '@mui/material';
import { styles } from '../../styles';

function Table({onOpenCard}) {
  
  const cardLists = useSelector(selectAllCardLists);
  
  const content = cardLists.map(cardList => 
    <ListItem style={styles.listsContainerItem}>
      <CardsList key={cardList.id} cardList={cardList} onOpenCard={onOpenCard}/>
    </ListItem>)

  return (
    <Stack style={styles.listsContainer}>
         {content}
    </Stack>
  );
}

export default Table;