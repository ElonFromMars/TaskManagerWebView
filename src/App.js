import Table from './components/table/Table.js';
import CardDescription from './components/table/CardDescription.js';
import { useState } from 'react';

function TaskApp() {
  const [openTaskDescription, setOpenTaskDescription] = useState(false);

  function handleOpenCard(task) {
    //TODO dispatch open task request
    setOpenTaskDescription(true);
  }

  return (
    <main className="App">
      <Table onOpenCard={handleOpenCard}/>
      {openTaskDescription && 
      <CardDescription 
        open={openTaskDescription} 
        setOpen={setOpenTaskDescription}
      />}
    </main>
  );
}

export default TaskApp;
