import React from 'react';
import './Team.css';
import hero from '../../assets/hero.jpg';

function Team() {
  return (
    <div className='team'>
      <div className='team-cont'>
        <h4>Meet Our Team</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit
          nobis eum quisquam praesentium ex architecto, voluptate quasi ea ad
          minus, fugit nostrum labore eligendi totam harum exercitationem
          deserunt facilis.
        </p>
      </div>
      <div className='team-wrapper'>
        <div className='team-box'>
          <img
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt=''
          />
          <h4>Test Test</h4>
          <p>test</p>
        </div>
        <div className='team-box'>
          <img
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt=''
          />
          <h4>Test Test</h4>
          <p>test</p>
        </div>
        <div className='team-box'>
          <img
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt=''
          />
          <h4>Test Test</h4>
          <p>test</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
