const Lovestory = () => {
    const dummyData = [{
        img: "https://www.sterlingholidays.com/content/dam/sterlingv2/images/wedding-day/Choose-to-Book.png",
        des: "Choose to Book the entire Resort"
    },
    {
        img: "https://www.sterlingholidays.com/content/dam/sterlingv2/images/wedding-day/Multiple-Venue.png",
        des: "Multiple Venue"
    },
    {
        img: "https://www.sterlingholidays.com/content/dam/sterlingv2/images/wedding-day/Live-Streaming.png",
        des: "Live Streaming"
    },
    {
        img: "https://www.sterlingholidays.com/content/dam/sterlingv2/images/wedding-day/Creative-Engaging.png",
        des: "Creative Engaging Activities"
    },
    {
        img: "https://www.sterlingholidays.com/content/dam/sterlingv2/images/wedding-day/Curated-themed-Decor.png",
        des: "Curated themed Decor"
    },
    {
        img: "https://www.sterlingholidays.com/content/dam/sterlingv2/images/wedding-day/Traditional-Culinary-Experience.png",
        des: "Traditional Culinary Experience"
    }
    ]
    return (
  <>
    <div className="container-fluid p-5 lovestory-bg-color">
      <div className="row mb-5">
        <div className="col-10 px-5 mr-3">
          <p className="lovestoryh3">Bringing Cultures Together in Celebration</p>
        </div>
      </div>

      {/* Section for Maharashtrian Weddings */}
      <div className="row align-items-center justify-content-center mb-5">
        <div className="col-12 col-lg-3 mb-4 mb-lg-0">
          <img
            className="img-fluid rounded"
            src="marathi.jpg"
            alt="Maharashtrian Weddings"
          />
        </div>
        <div className="col-12 col-lg-8 bg-white p-4 rounded">
          <h3>Maharashtrian Weddings</h3>
          <p className="mt-3">
            <span><b>"Timeless Rituals, Rich Heritage"</b></span>
            Maharashtrian weddings are known for their simplicity and elegance, with rituals that reflect the region's deep cultural roots. The wedding ceremony includes the 'Phool Pathak' (flower ceremony) and the 'Saat Phere' (seven vows), signifying the couple's lifelong commitment. These weddings bring together the beauty of traditional attire, vibrant colors, and close-knit family celebrations.
          </p>
        </div>
      </div>

      {/* Section for Punjabi Weddings */}
      <div className="row align-items-center justify-content-center mb-5">
        <div className="col-12 col-lg-8 bg-white p-4 rounded order-2 order-lg-1">
          <h3>Punjabi / Sikh Weddings</h3>
          <p className="mt-3">
            "Joyful Celebrations, Boundless Energy"
            Punjabi and Sikh weddings are known for their exuberant celebrations, filled with music, dance, and heartfelt traditions. The 'Anand Karaj' ceremony, where the couple ties the knot in front of the Guru Granth Sahib, is central to the wedding. The vibrant festivities include the traditional 'Bhangra' dance and the joyous 'Lagana' ceremony, creating a lively atmosphere for family and friends.
          </p>
        </div>
        <div className="col-12 col-lg-3 mb-4 mb-lg-0 order-1 order-lg-2">
          <img
            className="img-fluid rounded"
            src="sikh.jpg"
            alt="Punjabi Weddings"
          />
        </div>
      </div>

      {/* Section for Bengali Weddings */}
      <div className="row align-items-center justify-content-center mb-5">
        <div className="col-12 col-lg-3 mb-4 mb-lg-0">
          <img
            className="img-fluid rounded"
            src="bengali.jpeg"
            alt="Bengali Weddings"
          />
        </div>
        <div className="col-12 col-lg-8 bg-white p-4 rounded">
          <h3>Bengali Weddings</h3>
          <p className="mt-3">
            <span><b>"A Symphony of Tradition and Elegance"</b></span>
            Bengali weddings are a celebration of heritage and love, with customs like the 'Saat Paake Bandha' (seven rounds around the sacred fire) and 'Sindur Daan' (application of vermilion). Rich with rituals, these weddings feature beautifully adorned brides, ceremonial chanting, and a family-centered approach to celebrating union. The unique combination of religious and cultural traditions creates an unforgettable experience.
          </p>
        </div>
      </div>

      {/* Section for Gujarati Weddings */}
      <div className="row align-items-center justify-content-center mb-5">
        <div className="col-12 col-lg-3 mb-4 mb-lg-0">
          <img
            className="img-fluid rounded"
            src="gujrati.jpeg"
            alt="Gujarati Weddings"
          />
        </div>
        <div className="col-12 col-lg-8 bg-white p-4 rounded">
          <h3>Gujarati Weddings</h3>
          <p className="mt-3">
            <span><b>"Vibrancy, Rituals, and Togetherness"</b></span>
            Gujarati weddings are vibrant and full of life, with elaborate rituals that reflect the community's rich cultural traditions. The 'Mandap' ceremony, where the bride and groom take vows in front of a sacred fire, is followed by a series of joyful celebrations like 'Garba' and 'Dandiya.' The wedding is marked by love, unity, and the coming together of families in a colorful celebration of commitment.
          </p>
        </div>
      </div>

      {/* Section for Marwari Weddings */}
      <div className="row align-items-center justify-content-center mb-5">
        <div className="col-12 col-lg-8 bg-white p-4 rounded order-2 order-lg-1">
          <h3>Marwari Weddings</h3>
          <p className="mt-3">
            <span><b>"Lavish Celebrations, Rich Heritage"</b></span>
            Marwari weddings are known for their grandeur, opulent rituals, and family-driven ceremonies. The wedding kicks off with traditional rituals like 'Ganesh Puja' and 'Tilak,' setting the stage for the wedding celebrations. From ornate decorations to elaborate feasts, every moment reflects the rich cultural heritage of the Marwari community, making it a lavish affair to remember.
          </p>
        </div>
        <div className="col-12 col-lg-3 mb-4 mb-lg-0 order-1 order-lg-2">
          <img
            className="img-fluid rounded"
            src="marwari.jpeg"
            alt="Marwari Weddings"
          />
        </div>
      </div>

      {/* Section for Telugu Weddings */}
      <div className="row align-items-center justify-content-center mb-5">
        <div className="col-12 col-lg-3 mb-4 mb-lg-0">
          <img
            className="img-fluid rounded"
            src="telgu.jpeg"
            alt="Telugu Weddings"
          />
        </div>
        <div className="col-12 col-lg-8 bg-white p-4 rounded">
          <h3>Telugu Weddings</h3>
          <p className="mt-3">
            <span><b>"Sacred Customs, Deep-rooted Traditions"</b></span>
            Telugu weddings are a spiritual journey, rich with sacred rituals and timeless customs that honor both the couple and their families. Key ceremonies include the 'Kanyadaan' (giving away of the bride) and 'Talambralu,' where the bride and groom shower each other with sacred rice. These weddings are marked by deep respect for tradition, with a focus on unity, prosperity, and familial bonds.
          </p>
        </div>
      </div>

      {/* Dummy Data Section */}
      <div>
        <div className="d-flex flex-lg-row flex-md-row flex-column justify-content-between align-items-center my-5 gap-4">
          {dummyData.map((i,index) => (
            <div
            key={index}
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
