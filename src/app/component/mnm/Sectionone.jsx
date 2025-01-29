'use client'
import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel nextIcon={<span style={{ fontWeight: 'bold', fontSize: '2rem' }}>&#9654;</span>} prevIcon={<span style={{ fontWeight: 'bold', fontSize: '2rem' }}>&#9664;</span>}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/400?random=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis beatae voluptatem nesciunt impedit maiores fugiat explicabo, consequatur omnis numquam laudantium odio voluptates possimus, blanditiis eveniet a tenetur deleniti at atque?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium quisquam ducimus vitae culpa ipsam voluptas voluptates numquam, sequi eos magnam possimus ex? Consequuntur saepe repudiandae at nemo et enim.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium quisquam ducimus vitae culpa ipsam voluptas voluptates numquam, sequi eos magnam possimus ex? Consequuntur saepe repudiandae at nemo et enim.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium quisquam ducimus vitae culpa ipsam voluptas voluptates numquam, sequi eos magnam possimus ex? Consequuntur saepe repudiandae at nemo et enim.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/400?random=2"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique non dolor, doloremque explicabo quidem officiis dignissimos distinctio omnis totam voluptates nihil nesciunt? Sunt ducimus illo beatae minus error velit.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium quisquam ducimus vitae culpa ipsam voluptas voluptates numquam, sequi eos magnam possimus ex? Consequuntur saepe repudiandae at nemo et enim.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium quisquam ducimus vitae culpa ipsam voluptas voluptates numquam, sequi eos magnam possimus ex? Consequuntur saepe repudiandae at nemo et enim.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium quisquam ducimus vitae culpa ipsam voluptas voluptates numquam, sequi eos magnam possimus ex? Consequuntur saepe repudiandae at nemo et enim.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/400?random=3"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium quisquam ducimus vitae culpa ipsam voluptas voluptates numquam, sequi eos magnam possimus ex? Consequuntur saepe repudiandae at nemo et enim.

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium quisquam ducimus vitae culpa ipsam voluptas voluptates numquam, sequi eos magnam possimus ex? Consequuntur saepe repudiandae at nemo et enim.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium quisquam ducimus vitae culpa ipsam voluptas voluptates numquam, sequi eos magnam possimus ex? Consequuntur saepe repudiandae at nemo et enim.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium quisquam ducimus vitae culpa ipsam voluptas voluptates numquam, sequi eos magnam possimus ex? Consequuntur saepe repudiandae at nemo et enim.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
