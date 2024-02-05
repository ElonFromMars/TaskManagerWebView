import PageLayout from './components/main/PageLayout.js';
import Table from './components/table/Table.js';
import StartPage from './components/main/StartPage.js';
import UserProfile from './components/user/UserProfile.js';
import Workspaces from './components/workspace/Workspaces.js';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './security/AuthProvider.js';
import OAuth2RedirectHandler from './components/user/OAuth2RedirectHandler.js';
import Login from './components/user/Login.js';
import SignUp from './components/user/SignUp.js';
import RequireAuth from './security/RequireAuth.js';

function App() {
  return (
    <>
    <AuthProvider>
      <Routes>TaskManagerWebView
        <Route path='/' element={<StartPage/>}/>
        <Route path='/TaskManagerWebView' element={<StartPage/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='user' element={<RequireAuth><PageLayout/></RequireAuth>}>
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
