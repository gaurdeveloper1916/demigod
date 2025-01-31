'use client';
import { useSearchParams } from 'next/navigation';
import Header from '../component/common/header/Header';
import Curveslider from '../component/landingage/Curveslider';
import Panel from '../component/landingage/panel/page';
import Selectticket from '../component/landingage/selectticket/page';

const LandingPage = () => {
    const searchParams = useSearchParams();
    const name = searchParams.get('name'); // Get 'name' query parameter

    console.log(name); // Logs the query parameter value

    return (
        <>
            <Header />
            <Curveslider />
            <Selectticket name={name}/>
            <Panel />
            {/* <p>Query Name: {decodeURIComponent(name || '')}</p> */}
        </>
    );
};

export default LandingPage;
