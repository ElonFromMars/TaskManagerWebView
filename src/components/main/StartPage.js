import { Box } from "@mui/material";
import SignInButton from "./SignInButton";
//import { useAuth } from './AuthProvider';
//import { Navigate } from 'react-router-dom';
import { styles } from '../../styles';

function StartPage() {
    /*const auth = useAuth();

    if (auth.user) {
        return <Navigate to='/'/>
    }*/

    return (
      <>
        <Box sx={styles.mainPageHeaderContainer}> 
           <h1>Main</h1>
        </Box>
        <Box sx={styles.mainPageSignInContainer}>
           <SignInButton/>
        </Box>
      </>
    );
}
  
export default StartPage;