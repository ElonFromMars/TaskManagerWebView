import AddCard from './AddCard.js';
import Card from './Card.js';
import {Box} from '@mui/material';
import {styles} from '../../styles';
import Typography from '@mui/material/Typography';
import {createCard} from "../../data/features/tableSlice";
import {useDispatch} from "react-redux";

function CardsList({cardList, onOpenCard}) {
    const dispatch = useDispatch();
    
    function handleCreateCard(createCardRequest) {
        dispatch(createCard({...createCardRequest, cardListId:cardList.id})).unwrap();
    }
    
    const cards = cardList.cards;
    const content = cards.map(card => <Card key={card.id} card={card} onOpenCard={onOpenCard}/>)
    
    return (
        <Box sx={styles.listContainer}>
            <Box sx={styles.listTitle}>
                <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
                    {cardList.name}
                </Typography>
            </Box>
            <div>
                {content}
            </div>
            <AddCard onAddButtonClick={handleCreateCard}/>
        </Box>
    );
}

export default CardsList;
