import Accordian from "./Subcomponent/Accordian";

const Sectionfour = () => {
    return (
        <>
            <div className="d-flex p-4 bg-black text-white align-items-center">
                <div className="col-lg-6 pe-lg-5">
                    <div className="col-lg-10 p-4">
                        <p>
                            We originally met through our young adults group at church, but it wasn't until a group of us from the group moved up to Oregon to attend Ecola Bible College for a year that the two of us truly connected. We found ourselves intrigued by each other's minds, interests, personalities, and shared passions for Jesus, and became good friends. We fell out of touch and thought we'd never talk again—however, God had different plans. In the summer of 2022, we reconnected, and through weeks of several long-distance Facetime calls, maturing, and God's perfect timing, we began officially dating and immediately knew that we wanted to get married. Our meet-cute is one of crazy circumstances, but we couldn't be happier about it.
                        </p>
                    </div>
                </div>

                <div
                    style={{ width: '450px', height: '300px', marginTop: '5rem',marginBottom:'5rem' }}
                    className="position-relative d-flex justify-content-center   align-items-center mx-auto"
                >
                    <img
                        src="./img-rotate.png"
                        className="rotating-image position-absolute"
                        alt="Rotating text"
                    />

                    <img
                        src="./ring.png"
                        className="center-image position-absolute"
                        alt="Center image"
                    />
                </div>
            </div>


        </>
    )
}
export default Sectionfour;