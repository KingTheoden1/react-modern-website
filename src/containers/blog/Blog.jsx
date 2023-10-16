import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date='Oct 16, 2023' title='GPT-3 and OpenAI is the future. Let us explore how that us.'/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date='Oct 16, 2023' title='GPT-3 and OpenAI is the future. Let us explore how that us.'/>
          <Article imgUrl={blog03} date='Oct 16, 2023' title='GPT-3 and OpenAI is the future. Let us explore how that us.'/>
          <Article imgUrl={blog04} date='Oct 16, 2023' title='GPT-3 and OpenAI is the future. Let us explore how that us.'/>
          <Article imgUrl={blog05} date='Oct 16, 2023' title='GPT-3 and OpenAI is the future. Let us explore how that us.'/>
        </div>
      </div>
    </div>
  )
}

export default Blog