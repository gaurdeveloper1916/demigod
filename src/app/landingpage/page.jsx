'use client';

import { useSearchParams } from 'next/navigation';
import Header from '../component/common/header/Header';
import Curveslider from '../component/landingage/Curveslider';
import Panel from '../component/landingage/panel/page';
import Selectticket from '../component/landingage/selectticket/page';
import jsonData from '../../db.json';
import { useMemo } from 'react';

const LandingPage = () => {
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
            <Header />
            <Curveslider data={matchedData} />
            <Selectticket data={matchedData} />
            <Panel data={matchedData} />
        </>
    );
};

export default LandingPage;
