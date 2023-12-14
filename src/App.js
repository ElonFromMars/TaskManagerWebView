import NavigationBar from './components/navbar/NavigationBar.js';
import Table from './components/table/Table.js';
import Workspaces from './components/workspace/Workspaces.js';
import { Routes, Route } from 'react-router-dom';

function TaskApp() {
  return (
    <>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Workspaces/>}/>
        <Route path='table' element={<Table/>}/>
      </Routes>   
    </>
  );
}

export default TaskApp;
