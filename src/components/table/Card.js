
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cardTitleChanged, cardDeleted } from '../../data/features/tableSlice'

function Card({card, onOpenCard}) {
    const [isEditing, setIsEditing] = useState(false);
   
    const dispatch = useDispatch();

    const onDeleteButtonClicked = () => {
        dispatch(cardDeleted({ id: card.id })).unwrap();
    }

    const onOpenButtonClicked = () => {
        onOpenCard(card.id);
    }

    const onSaveButtonClicked = () => {
        setIsEditing(false);
    }

    const onEditButtonClicked = () => {
        setIsEditing(true);
    }

    const onCardTitleChanged = (e) => {
      dispatch(cardTitleChanged({...card, title: e.target.value }))//.unwrap();
    }
   
    let taskContent;
    if (isEditing) {
        taskContent = (
        <>
            <input value={card.title} onChange={onCardTitleChanged}/>
            <button onClick={onSaveButtonClicked}>Save</button>
        </>
        );
    } else {
        taskContent = (
        <>
            {card.title}
            <button onClick={onEditButtonClicked}>Edit</button>
            <button onClick={onOpenButtonClicked}>Open</button>
        </>
        );
    }

    return (
        <div className='card'>
            <label>
                {taskContent}
                <button onClick={onDeleteButtonClicked}>Delete</button>
            </label>
        </div>
    );
}

export default Card;
