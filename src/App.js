import PageLayout from './components/main/PageLayout.js';
import Table from './components/table/Table.js';
import StartPage from './components/main/StartPage.js';
import UserProfile from './components/profile/UserProfile.js';
import Workspaces from './components/workspace/Workspaces.js';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './security/AuthProvider.js';

function App() {
  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='user' element={<PageLayout/>}>
          <Route index element={<Workspaces/>}/> 
          <Route path='workspaces' element={<Workspaces/>}/>
          <Route path='table' element={<Table/>}/>
          <Route path='profile' element={<UserProfile/>}/>
        </Route>
      </Routes>   
      </AuthProvider>
    </>
  );
}

export default App;
