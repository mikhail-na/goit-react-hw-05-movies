import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation, NavigationList, NavigationItem, NavigationLink } from './SharedLayout.module'

const SharedLayout = () => {
    return (
        <header>
            <Navigation>
                <NavigationList>
                    <NavigationItem>
                        <NavigationLink to="/">Home</NavigationLink>

                    </NavigationItem>
                    <NavigationItem>
                        <NavigationLink to="/movies">Movies</NavigationLink>

                    </NavigationItem>
                </NavigationList>
            </Navigation>
            <Suspense fallback={<div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '100px',
                fontSize: '30px',
                fontWeight: 700,

                color: '#fff',

            }}>Loading...</div>}>
                <Outlet />
            </Suspense>
        </header>
        
    )
};

export default SharedLayout;