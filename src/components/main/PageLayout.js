import { Outlet } from 'react-router';
import NavigationBar from '../navbar/NavigationBar';

function PageLayout () {
    
    return (
        <>
            <NavigationBar/>
            <Outlet/>
        </>
    );
}

export default PageLayout;