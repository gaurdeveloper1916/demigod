"use client";
// Icons component for each belief


// Core Beliefs Component
const Section2 = () => {
  const beliefs = [
    {
      id: 1,
      title: "RESPONSIBILITY",
      image:"./about-us/responsibility.png",
      description: "We act with integrity, taking full ownership of every brand and capital partnership we step  into.."
    },
    {
      id: 2,
      title: "PERFORMANCE",
      image:"./about-us/performance.png",
      description: "We pursue sustainable, scalable results—measured not just in revenue, but in relevance and  long-term market leadership."
    },
    {
      id: 3,
      title: "EXCELLENCE",
      image:"./about-us/excellence.png",
      description: "Mediocrity has no place in our world. We operate with a standard of execution that  commands attention and delivers value"
    },
    {
      id: 4,
      title: "DIFFERENTIATION",
      image:"./about-us/differentiation.png",
      description: "Our brands don’t blend in—they stand out. Every strategy is tailor-made, and every outcome  is intentionally bold."
    },
    {
      id: 5,
      title: "MERITOCRACY",
      image:"./about-us/meritocracy.png",
      description: "We rise through capability, creativity, and collaboration. Talent and tenacity drive everything  we do."
    },
    {
      id: 6,
      title: "CLIENT FIRST THINKING",
      image:"./about-us/client_first_thinking.png",
      description: "Whether you’re a founder, investor, or institutional partner—your vision shapes our strategy.  We build with you, not just for you."
    }
  ];

  return (
    <>
     

      <div className="core-beliefs-section position-relative py-5 d-flex flex-column align-items-center justify-content-center min-vh-100">
        <div className="container-fluid position-relative">
          <div className="row justify-content-center mb-4">
            <div className="col-md-8 col-lg-6 text-center">
              <h2  className="text-white mb-2">Our Core Beliefs</h2>
              <hr style={{  border: '1px solid #dbb85e' }}  className="separator mx-auto" />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 d-flex justify-content-center">
              <div className="core-beliefs-container p-5">
                <div className="row g-4">
                  {beliefs.map((belief) => (
                    <div data-aos="fade-up" data-aos-duration="1000" key={belief.id} className="col-md-4">
                      <div className="belief-card text-center p-4">
                        <div className="icon-container mb-4 w-25">
                        
                          <img className='img-fluid' src={belief.image}></img>
                        </div>
                        <h4 className="belief-title mb-3">{belief.title}</h4>
                        <p className="belief-description">{belief.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline styles to match the specific design */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background-color: #000;
        }
        
        .core-beliefs-section {
          background-color: #000;
          color: white;
          padding: 4rem 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }
        
        .separator {
          width: 50%;
          height: 1px;
          background-color: #866b2f;
          border: none;
          margin: 1rem auto;
          border :'1px solid #866b2f'
        }
        
        .core-beliefs-container {
          background-color: #1a1a1a;
          border-radius: 25px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .belief-card {
          height: 100%;
          background-color: #262626;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 300px;
        }
        
        .icon-container {
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .belief-title {
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        
        .belief-description {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          line-height: 1.5;
        }
      `}</style>
    </>
  );
};

export default Section2;