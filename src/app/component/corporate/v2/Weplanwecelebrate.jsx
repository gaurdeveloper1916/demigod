import { Archivo_Black } from "next/font/google";
import './weplanwecelebrate.css'; // Import the CSS file

const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: '400' });

const Weplanwecelebrate = () => {
    return (
        <div className="we-plan-wrapper d-flex justify-content-center align-items-center p-5 bg-black">
            <div className="col-lg-5 text-white mt-5">
                <h2 className={`${archivoBlack.className} heading`}>We Plan, We Celebrate</h2>
                <p className="sub-heading">Let us handle the details, while you enjoy the success of your event.</p>
                <p className="description">At Demigodhouse, we turn your corporate vision into an unforgettable event, handling every detail so you can focus on celebrating your success.</p>
                <div className="icon-grid d-flex gap-5 my-4">
                    <div className="icon-box d-flex justify-content-center align-items-center">
                        <p>Expert Management</p>
                    </div>
                    <div className="icon-box d-flex justify-content-center align-items-center">
                        <p>Creative Ideas</p>
                    </div>
                    <div className="icon-box d-flex justify-content-center align-items-center">
                        <p>Effortless Coordination</p>
                    </div>
                    <div className="icon-box d-flex justify-content-center align-items-center">
                        <p>Maximized Exposure</p>
                    </div>
                </div>
                <button className="know-more-btn p-2 fs-6 rounded-pill text-white px-3">Know more</button>
            </div>
            <div className="col-lg-5">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="image-container relative px-4">
                        <div className="image-wrapper absolute">
                            <img
                                className="main-image"
                                src="https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
                                alt="Boy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Weplanwecelebrate;
