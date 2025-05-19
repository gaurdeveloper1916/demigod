'use client';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import Curveslider from '../component/landingage/Curveslider';
import Panel from '../component/landingage/panel/Panel';
import Selectticket from '../component/landingage/selectticket/Selectticket';
import jsonData from '../../db.json';

const ClientLandingPage = () => {
    const searchParams = useSearchParams();
    const slug = searchParams.get('slug');

    const matchedData = useMemo(() => {
        if (!slug) return null;
        return jsonData.find((item) => item.slug === slug);
    }, [slug]);

    if (!matchedData) {
        return <div className='h5 text-white'>slug not found...</div>;
    }

    return (
        <>
        {/* <Header /> */}
            <Curveslider data={matchedData} />
            <Selectticket data={matchedData} />
            <Panel data={matchedData} />
        </>
    );
};

export default ClientLandingPage;
