import React from "react";
import MarioandAdrianA from '../images/Mario and Adrian A.jpg';
import MarioandAdrianB from '../images/Mario and Adrian b.jpg';

function Story() {
  return (
    <article className="story">
    <div className="story-details">
      <h2>Little Lemon</h2>
      <p>Chicago</p>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
    </div>
    <aside className="story-image">
      <img src={MarioandAdrianB} alt="Mario and Adrian A" width={267.94} height={336} className="story-image-item1"/>
      <img src={MarioandAdrianA} alt="Mario and Adrian B" width={267.94} height={336} className="story-image-item2"/>
    </aside>
    </article>
  );
}

export default Story;
