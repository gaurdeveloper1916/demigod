const Lovestory = () => {
    const dummyData = [{
        img: "https://www.sterlingholidays.com/content/dam/sterlingv2/images/wedding-day/Curated-themed-Decor.png",
        des: "Choose to Book the entire Resort"
    },
    {
        img: "https://www.sterlingholidays.com/content/dam/sterlingv2/images/wedding-day/Curated-themed-Decor.png",
        des: "Multiple Venue"
    },
    {
        img: "https://www.sterlingholidays.com/content/dam/sterlingv2/images/wedding-day/Curated-themed-Decor.png",
        des: "Live Streaming"
    },
    {
        img: "https://www.sterlingholidays.com/content/dam/sterlingv2/images/wedding-day/Curated-themed-Decor.png",
        des: "Creative Engaging Activities"
    },
    {
        img: "https://www.sterlingholidays.com/content/dam/sterlingv2/images/wedding-day/Curated-themed-Decor.png",
        des: "Curated themed Decor"
    },
    {
        img: "https://www.sterlingholidays.com/content/dam/sterlingv2/images/wedding-day/Curated-themed-Decor.png",
        des: "Traditional Culinary Experience"
    }
    ]
    return (
        <>
            <div className="container-fluid p-5 lovestory-bg-color">
                <div className="row   mb-5">
                    <div className="col-10 px-5 mr-3">
                        <p className="lovestoryh3">Your Love Story Deserves a Setting As Unique As You Are</p>
                    </div>
                </div>

                <div className="row align-items-center  justify-content-center mb-5">
                    <div className="col-12 col-lg-3 mb-4 mb-lg-0">
                        <img
                            className="img-fluid rounded"
                            src="https://www.sterlingholidays.com/content/dam/sterlingv2/images/wedding-day/Hill-top-Weddings.png"
                            alt="Hill-top Weddings"
                        />
                    </div>
                    <div className="col-12 col-lg-8 bg-white p-4 rounded">
                        <h3>Close-knit Wedding</h3>
                        <p className="mt-3">
                            Corbett | Manali | Mantra Haridwar | Mussoorie | Nainital | Palm Bliss Rishikesh | Shivalik Chail | ReWild Sariska | Gir |
                            Balicha Udaipur | Jaisinghgarh Udaipur | Goa Varca | Kanha | Lonavala | Sterling Pushkar | Stolen Heaven Lonavala |
                            Padam Pench | Panchgani | Gangtok | Banashree Badami | Palavelli Godavari | Anaikatti | Arunai Anantha Tiruvannamalai |
                            Athirappilly | Guruvayur | Karwar | Kodai - Lake | Thekkady | V Grand Madurai | Yelagiri | Sterling Pushkar | Stolen Heaven Lonavala |
                            Padam Pench | Panchgani | Gangtok | Banashree Badami | Palavelli Godavari | Sterling Pushkar | Stolen Heaven Lonavala |
                            Padam Pench | Panchgani | Gangtok | Banashree Badami | Palavelli Godavari
                        </p>
                    </div>
                </div>

                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-lg-8 bg-white p-4 rounded order-2 order-lg-1">
                        <h3>Full-scale Wedding</h3>
                        <p className="mt-3">
                            Aravalli Udaipur | Kufri | Mount Abu | Darjeeling | Puri | City Centre Bokaro | Kodai - Valley | Lake Palace Alleppey Kerala |
                            Munnar | Ooty - Elk Hill | Ooty-Fern Hill | Wayanad | Yercaud | Aravalli Udaipur | Kufri | Mount Abu | Darjeeling | Puri | City Centre Bokaro | Kodai - Valley | Lake Palace Alleppey Kerala |
                            Munnar | Ooty - Elk Hill | Ooty-Fern Hill | Wayanad | Yercaud | Aravalli Udaipur | Kufri | Mount Abu | Darjeeling | Puri | City Centre Bokaro | Kodai - Valley | Lake Palace Alleppey Kerala |
                            Munnar | Ooty - Elk Hill | Ooty-Fern Hill | Wayanad
                        </p>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mb-lg-0 order-1 order-lg-2">
                        <img
                            className="img-fluid rounded"
                            src="https://www.sterlingholidays.com/content/dam/sterlingv2/images/wedding-day/Sacred-Weddings.png"
                            alt="Sacred Weddings"
                        />
                    </div>
                </div>
                <div>
                    <div className="d-flex flex-lg-row flex-md-row flex-column justify-content-between align-items-center my-5 gap-4">
                        {dummyData.map((i) => (
                            <div
                                className="d-flex flex-column justify-content-center align-items-center text-center"
                                style={{ gap: "10px" }} // Adjust spacing as needed
                            >
                                <img src={i.img} alt="icon" />
                                <p>{i.des}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
};

export default Lovestory;
