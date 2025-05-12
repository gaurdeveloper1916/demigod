"use client";
import Image from 'next/image';
export default function Section8() {
  return (
    <div className="bg-black text-white py-5 px-4">
      <div className="text-center mb-5">
        <h1 className="btn btn-dark rounded px-4 py-2" style={{ fontSize: '2rem' }}>Our Visionary</h1>
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* Left Column: Image */}
          <div data-aos="fade-left" data-aos-duration="1000" className="col-md-5 d-flex justify-content-center">
            <div className="rounded-4 overflow-hidden shadow" style={{ maxWidth: '100%', width: '500px' }}>
              <Image src="/about-us/devanshu2.jpg" alt="Visionary" className="img-fluid" width={1080} height={600} />
            </div>
          </div>

          {/* Right Column: Text */}
          <div data-aos="fade-down" data-aos-duration="1000" className="col-md-6 mt-4 mt-md-0">
            <p className="text-light lh-lg">
              <span className="text-capitaliz text-center investment-text"  >

               At DemiGod House, our mission is to bring over 1,500 brands to life, always with a steadfast commitment to enhancing their image and visibility. By leveraging our expansive retail network and the power of bilateral investments, we strive to deliver exceptional results for every associate and client we serve. Guided by data-driven strategies and a deep understanding of market trends, we build brands that become high-performing assets-capable of achieving remarkable revenue growth.
                
                </span>
            </p>
            {/* <div className="mt-3">
              <span className="text-primary" style={{ fontSize: '2rem' }}>Signature</span>
            </div> */}
          </div>
        </div>
      </div>

      <style jsx global>{`
       
        .investment-text {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #f8f9fa;
          opacity: 0.9;
        }
        
          
        
      `}</style>
    </div>
  );
}
