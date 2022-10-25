import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return  <div className= {s.item}>
                <img src='https://i.pinimg.com/originals/38/07/45/3807452de810352bca9c0587863ebece.jpg' />
                {props.message} <br></br>  
            <span>like</span> <n></n>
            {props.likesCount}             
          </div>
};
export default Post;