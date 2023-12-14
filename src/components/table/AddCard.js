import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cardAdded } from '../../data/features/tableSlice'

function AddCard({cardList}) {
  const [text, setText] = useState('');
  
  const dispatch = useDispatch();

  const onAddButtonClicked = () => {
    dispatch(cardAdded({ listId: cardList.id, title : text }));
    setText('');
  }

  const onChangeText = (e) => setText(e.target.value)

  return (
    <div>
      <input
        placeholder="Add task"
        value={text}
        onChange={onChangeText}
      />
      <button
        onClick={onAddButtonClicked}>
        Add
      </button>
    </div>
  );
}

export default AddCard;
