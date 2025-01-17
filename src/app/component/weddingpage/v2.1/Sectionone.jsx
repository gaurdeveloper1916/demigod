const Sectionone = () => {
    return (
        <>
            <div className="position-relative vh-100 overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-100 h-100 object-fit-cover"
                >
                    <source
                        src="https://destinationbrides.com/wp-content/uploads/2022/12/Weddings-Page-Video-November-2022.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="position-absolute top-50 start-50 translate-middle text-white text-center text-cont  w-lg-75 w-100">
                    <p className="fw-bold text-shadow m-0 text-fs">You Dream. & Relax. We Plan</p>
                    <h3><p className="fw-bold text-shadow m-0 ">Enjoy YOUR Wedding: Stress-Free Wedding Planning</p></h3>
                    <h4><p className="fw-bold text-shadow">Your Wedding celebration is one (epic!) weekend long. If you aren’t enjoying your wedding planning for the 365 +/- days prior you aren’t working with your best DEMIGOD HOUSE wedding planner. See how we stressed "your"?</p></h4>
                </div>
            </div>
        </>
    );
};

export default Sectionone;
