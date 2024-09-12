// src/App.js
import React from 'react';
import './index.css'; // Import your CSS file

const OnScrollToChnageDiv = () => {
  return (
    <div className="app">
     
      <main>
        {[...Array(10).keys()].map(index => (
          <article key={index} style={{ '--index': index }}>
            <div className="article__img">
              <img
                src={`https://picsum.photos/1920/1080?random=${index + 1}`}
                alt={`Random ${index + 1}`}
              />
            </div>
            <div className="article__info">
              <h2 className='gradient-text fw-bold'>Events Number {index + 1}</h2>
              <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, perferendis et, deserunt quia molestiae ipsum praesentium voluptate nisi tenetur sequi asperiores aspernatur quo optio in veniam vero, quisquam dolore similique.{index + 1}</p>
              <a href="#">Link {index + 1}</a>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
};

export default OnScrollToChnageDiv;
