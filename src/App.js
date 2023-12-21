import PageLayout from './components/main/PageLayout.js';
import Table from './components/table/Table.js';
import StartPage from './components/main/StartPage.js';
import UserProfile from './components/profile/UserProfile.js';
import Workspaces from './components/workspace/Workspaces.js';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './security/AuthProvider.js';
import OAuth2RedirectHandler from './components/profile/OAuth2RedirectHandler.js';

function App() {
  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='login' element={<StartPage/>}/>
        <Route path='user' element={<PageLayout/>}>
          <Route index element={<Workspaces/>}/> 
          <Route path='workspaces' element={<Workspaces/>}/>
          <Route path='table' element={<Table/>}/>
          <Route path='profile' element={<UserProfile/>}/>
        </Route>
        <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler/>}></Route>  
      </Routes>   
      </AuthProvider>
    </>
  );
}

export default App;
