import React from 'react';

const LifeStory = (props) => {
  let timeline = props.timeline;
  return (
    <section className="life-story" role="region">
      {timeline}
    </section>
  );
}

export default LifeStory;
