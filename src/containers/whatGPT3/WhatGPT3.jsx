import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title='What is GPT-3' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, asperiores quisquam. Dolor, vel natus ex asperiores delectus veniam odit tempora officia. Magnam rerum, mollitia delectus eum quaerat tempore nesciunt esse!'/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title='Chatbots' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis, unde a ullam praesentium beatae corporis.'/>
        <Feature title='Knowledgebase' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis culpa facilis dolores itaque praesentium officia eum saepe quaerat accusantium. Saepe?'/>
        <Feature title='Education' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis culpa facilis dolores itaque praesentium officia eum saepe quaerat accusantium. Saepe?'/>
      </div>
    </div>
  )
}

export default WhatGPT3