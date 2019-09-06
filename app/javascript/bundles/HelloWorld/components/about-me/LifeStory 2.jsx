import React from 'react';

const LifeStory = (props) => {
  let text = props.text,
    displayHTML = (text) => {
      return <div dangerouslySetInnerHTML={{__html:text}}></div>
    };
  return (
    <section id="life-story" role="region">
      {displayHTML(text)}
    </section>
  );
}

export default LifeStory;
