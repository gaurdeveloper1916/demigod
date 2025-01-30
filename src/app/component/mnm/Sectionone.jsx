'use client'
import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    // <Carousel nextIcon={<span style={{ fontWeight: 'bold', fontSize: '2rem' }}>&#9654;</span>} prevIcon={<span style={{ fontWeight: 'bold', fontSize: '2rem' }}>&#9664;</span>}>
    //   <Carousel.Item interval={1000}>
    //     <img
    //       className="d-block w-100"
    //       src="https://picsum.photos/800/400?random=1"
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis beatae voluptatem nesciunt impedit maiores fugiat explicabo, consequatur omnis numquam laudantium odio voluptates possimus, blanditiis eveniet a tenetur deleniti at atque?
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium quisquam ducimus vitae culpa ipsam voluptas voluptates numquam, sequi eos magnam possimus ex? Consequuntur saepe repudiandae at nemo et enim.
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium quisquam ducimus vitae culpa ipsam voluptas voluptates numquam, sequi eos magnam possimus ex? Consequuntur saepe repudiandae at nemo et enim.
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium quisquam ducimus vitae culpa ipsam voluptas voluptates numquam, sequi eos magnam possimus ex? Consequuntur saepe repudiandae at nemo et enim.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item interval={500}>
    //     <img
    //       className="d-block w-100"
    //       src="https://picsum.photos/800/400?random=2"
    //       alt="Second slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique non dolor, doloremque explicabo quidem officiis dignissimos distinctio omnis totam voluptates nihil nesciunt? Sunt ducimus illo beatae minus error velit.
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium quisquam ducimus vitae culpa ipsam voluptas voluptates numquam, sequi eos magnam possimus ex? Consequuntur saepe repudiandae at nemo et enim.
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium quisquam ducimus vitae culpa ipsam voluptas voluptates numquam, sequi eos magnam possimus ex? Consequuntur saepe repudiandae at nemo et enim.
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium quisquam ducimus vitae culpa ipsam voluptas voluptates numquam, sequi eos magnam possimus ex? Consequuntur saepe repudiandae at nemo et enim.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://picsum.photos/800/400?random=3"
    //       alt="Third slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium quisquam ducimus vitae culpa ipsam voluptas voluptates numquam, sequi eos magnam possimus ex? Consequuntur saepe repudiandae at nemo et enim.

    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium quisquam ducimus vitae culpa ipsam voluptas voluptates numquam, sequi eos magnam possimus ex? Consequuntur saepe repudiandae at nemo et enim.
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium quisquam ducimus vitae culpa ipsam voluptas voluptates numquam, sequi eos magnam possimus ex? Consequuntur saepe repudiandae at nemo et enim.
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium quisquam ducimus vitae culpa ipsam voluptas voluptates numquam, sequi eos magnam possimus ex? Consequuntur saepe repudiandae at nemo et enim.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    <div className='d-flex flex-column'>
      <div className='d-flex gap-5 section px-5 py-5 text-white gradient-text justify-content-cente'>
        <div className='col-lg-8'>
          <h1 className='fw-bold gradient-text'>Demigod Events</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aut odit, iste tempora facere eveniet eaque reprehenderit nesciunt voluptatem harum pariatur. Cum rem quae dignissimos fuga corporis commodi molestiae nesciunt?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aut odit, iste tempora facere eveniet eaque reprehenderit nesciunt voluptatem harum pariatur. Cum rem quae dignissimos fuga corporis commodi molestiae nesciunt?

          </p>
        </div>
        <div className='col-lg-4'>
          <div className='d-flex gap-5 mb-5' >
            <img className='img-fluid w-25 h-25 rounded' src='./123.jpg'></img>
            <img className='img-fluid w-25 h-25 rounded' src='./1234.jpg'></img>
          </div>
          <div className='d-flex gap-5'>
            <img className='img-fluid w-25 h-25 rounded' src='https://cdn-icons-png.flaticon.com/128/6980/6980679.png'></img>
            <img className='img-fluid w-25 h-25 rounded' src='./123.jpg'></img>
          </div>
        </div>

        <div>

        </div>
      </div>

    </div>



  );
}

export default IndividualIntervalsExample;
