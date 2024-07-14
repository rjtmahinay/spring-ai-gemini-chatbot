import {AppLayout} from '@hilla/react-components/AppLayout.js';
import {DrawerToggle} from '@hilla/react-components/DrawerToggle.js';
import Placeholder from 'Frontend/component/placeholder/Placeholder';
import {useRouteMetadata} from 'Frontend/util/routing';
import {Suspense} from 'react';
import {Outlet} from 'react-router-dom';

// const navLinkClasses = ({ isActive }: any) => {
//     return `block rounded-m p-s ${isActive ? 'bg-primary-10 text-primary' : 'text-body'}`;
// };

export default function MainView() {
    const currentTitle = useRouteMetadata()?.title ?? 'My App';
    return (
        <AppLayout primarySection="drawer">

            <DrawerToggle slot="navbar" aria-label="Menu toggle"></DrawerToggle>
            <h2 slot="navbar" className="text-l m-0">
                {currentTitle}
            </h2>

            <Suspense fallback={<Placeholder />}>
                <Outlet />
            </Suspense>
        </AppLayout>
    );
}