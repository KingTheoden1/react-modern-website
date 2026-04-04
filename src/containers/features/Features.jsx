import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque, cumque possimus maiores, culpa quis doloremque nemo dolorem consectetur, perferendis obcaecati laudantium totam?',
  },
  {
    id: 2,
    title: 'Lorem, ipsum dolor',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque, cumque possimus maiores, culpa quis doloremque nemo dolorem consectetur, perferendis obcaecati laudantium totam?',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet consectetur',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque, cumque possimus maiores, culpa quis doloremque nemo dolorem consectetur, perferendis obcaecati laudantium totam?',
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque, cumque possimus maiores, culpa quis doloremque nemo dolorem consectetur, perferendis obcaecati laudantium totam?',
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now and you just need to realize it. Step into Future Today & make it happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default Features