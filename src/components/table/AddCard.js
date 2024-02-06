import {useState} from 'react';

function AddCard({onAddButtonClick}) {
    const [text, setText] = useState('');

    const handleAddButtonClicked = () => {
        onAddButtonClick({name: text});
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
                onClick={handleAddButtonClicked}>
                Add
            </button>
        </div>
    );
}

export default AddCard;
