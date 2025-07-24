import React from 'react';
import sarah from './sarah.jpg';
import michael from './michael.jpg';
import priya from './priya.jpg';
import david from './david.jpg';
function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonial-header">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonial-items">
        <div className="testimonial-item">
            <p>Rating: ★★★★★</p>
            <div className="testimonial-image">
            <img src={sarah} alt="sarah" width={47} height={46} />
            <p>Sarah L</p>
            </div>
            <p className='testimonial-text'>Delicious, cozy, perfect</p>
        </div>
        <div className="testimonial-item">
            <p>Rating: ★★★★☆</p>
            <div className="testimonial-image">
            <img src={michael} alt="michael" width={47} height={46} />
            <p>Michael T</p>
            </div>
            <p className='testimonial-text'>Fresh, flavorful, satisfying</p>
        </div>
        <div className="testimonial-item">
            <p>Rating: ★★★★★</p>
            <div className="testimonial-image">
            <img src={priya} alt="priya" width={47} height={46} />
            <p>Priya K</p>
            </div>
            <p className='testimonial-text'>Amazing every time</p>
        </div>
        <div className="testimonial-item">
            <p>Rating: ★★★★★</p>
            <div className="testimonial-image">
            <img src={david} alt="david" width={47} height={46} />
            <p>David R</p>
            </div>
            <p className='testimonial-text'>Sweet, elegant, memorable</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;