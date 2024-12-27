import { Archivo_Black } from 'next/font/google';
import { FaArrowDownLong } from "react-icons/fa6";
import './index.css'
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: '400' });

const Uniting = () => {
    return (
        <>
            <div
                className={`background d-flex flex-column justify-content-center text-white ${archivoBlack.className}`}
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                    width: "100%",
                    display: "flex",
                    transition: "background-image 0.5s ease-in-out", // Optional CSS transition
                }}  
            >
                <div className="d-flex flex-column p-5 m-5">
                    <div className="col-lg-8">
                        <h2
                            className='bg-image-heading'

                        >
                            Uniting Every Event
                        </h2>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex">
                            <p
                                className="fs-6 col-lg-7 bg-image-p"
                            >
                                From corporate conferences to unforgettable weddings, Demigodhouse
                                brings your event vision to life with precision, style, and
                                creativity. Let us handle the details so you can focus on what
                                matters.
                            </p>
                            <h2
                                className=" col-lg-11 bg-image-heading"
                              
                            >
                                Under One Roof
                            </h2>
                        </div>
                    </div>
                    <FaArrowDownLong size={35} />

                </div>
            </div>

        </>
    )
}

export default Uniting;