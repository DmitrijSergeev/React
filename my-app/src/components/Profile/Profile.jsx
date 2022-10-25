import React from 'react';
import MyPosts from './My posts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
    return <div>
        <div>
        <img src='https://kartinkin.net/uploads/posts/2022-03/1647047446_25-kartinkin-net-p-kartinki-more-palmi-plyazh-29.jpg'></img>
        </div>
        <div>
          ava + description
        </div>
        <MyPosts />
      </div>
};
export default Profile;