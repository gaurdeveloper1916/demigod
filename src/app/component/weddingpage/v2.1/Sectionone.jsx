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
                <div className="position-absolute top-50 start-50 translate-middle text-white text-center text-cont  p-5 w-lg-75 w-100">
                    
                    <h3 className="fw-bold text-shadow m-0 text-fs">Graceful Weddings for Exceptional Love Stories </h3>
                    <p  className="fw-bold  fs-4 text-shadow">Your wedding deserves to be as unique and remarkable as your journey together. From exquisite décor to flawless planning, we bring your vision to life with elegance and precision.</p>

                </div>
            </div>
        </>
    );
};

export default Sectionone;
