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
                        src="./weeding-slider.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="position-absolute top-50 start-50 translate-middle text-white text-center text-cont  w-lg-75 w-100">
                    <p className="fw-bold text-shadow m-0 text-fs">Sophisticated Weddings for </p>
                    <p className="fw-bold text-shadow m-0 text-fs">Exceptional Brides </p>

                </div>
            </div>
        </>
    );
};

export default Sectionone;
