'use client';
import Header from '../component/common/header/Header';
import Curveslider from '../component/landingage/Curveslider';
import Panel from '../component/landingage/panel/page';
import Selectticket from '../component/landingage/selectticket/page';

const LandingPage = () => {
    

    return (
        <>
            <Header />
            <Curveslider />
            <Selectticket />
            <Panel />
            {/* <p>Query Name: {decodeURIComponent(name || '')}</p> */}
        </>
    );
};

export default LandingPage;