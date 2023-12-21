import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faMapMarkerAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './main.css';
import { useEffect } from 'react';
import profile1 from './../../assets/mainpage/Rectangle 3.svg';

export default function Main() {
  useEffect(() => {
    const followButtons = document.querySelectorAll('.follow-button');

    const handleFollowClick = (event) => {
      const followButton = event.currentTarget;
      followButton.classList.toggle('followed');
      followButton.textContent = followButton.classList.contains('followed') ? 'Followed' : 'Follow';
    };

    followButtons.forEach((button) => {
      button.addEventListener('click', handleFollowClick);
    });

    return () => {
      // Cleanup the event listeners to avoid memory leaks
      followButtons.forEach((button) => {
        button.removeEventListener('click', handleFollowClick);
      });
    };
  }, []);

  return (
    <div>
      <div className="box">
        <div className="rectangle">
          <div className="image1">
            {/* Background Image */}
          </div>
          <div className="location-icons">
            {/* Location Icon */}
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Mumbai, Maharashtra</span>
            <FontAwesomeIcon icon={faEdit} />
            <p id='para'>Your location will help us serve better and extend a personalised experience.</p>
          </div>
          <div className="font"><p>✍️ Article</p></div>
          <div className="label">
            <span>
              <p className="textwrapper">What if famous brands had regular fonts? Meet RegulaBrands!</p>
            </span>
            <span>
              <FontAwesomeIcon icon={faEllipsisH} id='threedots' />
            </span>
          </div>
          <div className="label2">
            <p className="textwrapper2">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
          </div>
          <div className="footer">
            <ul>
              <li><img src={profile1} alt="Profile 1" id='img' /></li>
              <li><p id='sarthak'>Sarthak Kamra</p></li>
              <li id='bottom'>
                <FontAwesomeIcon icon={faEye} />
                <p id='view'>1.4k views</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faShare} />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Duplicate the profile follow section four times */}
      <div className="side">
        <p id='grp'>Recommended Groups</p>
        <div className="profile-container">
          <img src={profile1} alt="Recommended Profile" />
          <button className="follow-button">Follow</button>
        </div>
      </div>

      <div className="side">
    
        <div className="profile-container">
          <img src={profile1} alt="Recommended Profile" />
          <button className="follow-button">Follow</button>
        </div>
      </div>

      <div className="side">
     
        <div className="profile-container">
          <img src={profile1} alt="Recommended Profile" />
          <button className="follow-button">Follow</button>
        </div>
      </div>

      <div className="side">
       
        <div className="profile-container">
          <img src={profile1} alt="Recommended Profile" />
          <button className="follow-button">Follow</button>
        </div>
      </div>
    </div>
  );
}
