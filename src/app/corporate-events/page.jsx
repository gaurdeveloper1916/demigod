import CorporatePage from "./Corporate";
export const metadata = {
    title: 'DemiGod Corporate Events',
    description: "Best Corporate Events management company in India and overseas, with more than 13 years of experience in corporate event mangement. We provide corporate event management service in countries like Unites States ( Arizona, New york, Texas, Washington DC), France, Germany, Spain, Italy, Dubai, Australia and Belgium ",
    alternates: {
        canonical: `https://www.demigodhouse.com/corporate-events`,
    },
    openGraph: {
        title: '',
        description: '',
        url: '',
        images: [
            {
                url: '',
            },
        ],
    },
    twitter: {
        title: '',
        description: '',
        image: '',
    },
    linkedin: {
        title: '',
        description: '',
        image: '',
    },
};
const page = () => {
    return (
        <>

            <CorporatePage />
        </>
    )
}
export default page;