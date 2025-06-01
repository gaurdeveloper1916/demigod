import { Suspense } from 'react';
import Header from '../component/common/header/Header';
import ClientLandingPage from './ClientLandingPage';

const Page = () => {
    return (
        <>
            {/* <Header /> */}
            <Suspense fallback={<div className="text-white">Loading...</div>}>
                <ClientLandingPage />
            </Suspense>
        </>
    );
};

export default Page;
