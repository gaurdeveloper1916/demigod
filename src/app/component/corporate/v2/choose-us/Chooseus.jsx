const Chooseus = () => {
    return (
        <>
            <div style={{ backgroundColor: '#2B2B2B' }} className="p-5" >
                <div className="d-flex flex-column  justify-content-center align-items-center ">
                    <h2 className="text-white">Why <span style={{ color: '#FBC800' }}>Choose Us?</span></h2>
                    <p className="text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et <br />dolore magna aliqua. Ut enim ad minim</p>
                </div>
                <div className="d-flex justify-content-between align-items-center px-5">
                    <div className="text-center" style={{width:'274px',height:'329px'}}>
                        <img src="./images/D.png"  className="img-fluid" alt="D" />
                        <p className="text text-white">ESpoke Artisian Mastery meet concious luxury</p>
                    </div>
                    <div className="text-center"  style={{width:'274px',height:'329px'}} >
                        <img src="./images/G.png" className="img-fluid" alt="G" />
                        <p className="text text-white">ESpoke Artisian Mastery meet concious luxury</p>
                    </div>
                    <div className="text-center"  style={{width:'274px',height:'329px'}} >
                        <img src="./images/H.png" className="img-fluid" alt="H" />
                        <p className="text text-white">ESpoke Artisian Mastery meet concious luxury</p>
                    </div>
                </div>

            </div>



        </>
    )
}
export default Chooseus;