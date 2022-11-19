import React, { useEffect } from 'react';
import './Team.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Team() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='team'>
      <div className='team-cont'>
        <h4 data-aos='fade-down'>Meet Our Team</h4>
        <p data-aos='fade'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit
          nobis eum quisquam praesentium ex architecto, voluptate quasi ea ad
          minus, fugit nostrum labore eligendi totam harum exercitationem
          deserunt facilis.
        </p>
      </div>
      <div className='team-wrapper'>
        <div className='team-box' data-aos='flip-up'>
          <img
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt=''
          />
          <h4>Test Test</h4>
          <p>test</p>
        </div>
        <div className='team-box' data-aos='flip-up' data-aos-delay='300'>
          <img
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt=''
          />
          <h4>Test Test</h4>
          <p>test</p>
        </div>
        <div className='team-box' data-aos='flip-up' data-aos-delay='600'>
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
