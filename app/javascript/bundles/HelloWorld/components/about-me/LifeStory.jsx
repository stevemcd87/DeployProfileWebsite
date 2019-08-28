import React from 'react';

const LifeStory = (props) => {
  let text = props.text;
  return (
    <section className="life-story" role="region">
      {text}
    </section>
  );
}

export default LifeStory;
