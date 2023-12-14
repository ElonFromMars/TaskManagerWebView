import AddCard from './AddCard.js';
import Card from './Card.js';
import { Box } from '@mui/material';
import { styles } from '../../styles';
import Typography from '@mui/material/Typography';


function CardsList({cardList, onOpenCard}) {
  const cards = cardList.cards;
  const content = cards.map(card => <Card key={card.id} card={card} onOpenCard={onOpenCard}/>)

  return (
    <Box sx={styles.listContainer}>
      <Box sx={styles.listTitle}>
        <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
          {cardList.title}
        </Typography>
      </Box>
      <div>
        {content}
      </div>
      <AddCard cardList={cardList} />
    </Box>
  );
}

export default CardsList;
