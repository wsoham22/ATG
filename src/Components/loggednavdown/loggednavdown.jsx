import React from 'react';
import "./loggednavdown.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown, faUserPlus } from '@fortawesome/free-solid-svg-icons';

export default function LoggedNavDown() {
  return (
    <>
      <ul className="label">
        <li className="text-wrapper" id='one'>All Posts(32)</li>
        <li className="text-wrapper" id='two'>Article</li>
        <li className="text-wrapper" id='three'>Event</li>
        <li className="text-wrapper" id='four'>Education</li>
        <li className="text-wrapper" id='five'>Job</li>
      </ul>
      <div className='box'>
        <div className="rectangle">
          <span><p className='label'>&nbsp;&nbsp;Write a Post</p></span>
          <span><FontAwesomeIcon icon={faChevronDown} id='downarrow'/></span>
        </div>
      </div>
      <div className='box2'>
        <div className="rectangle2">
          <span><FontAwesomeIcon icon={faUserPlus} id='userplus'/></span>
          <span><p id='joingroup'>Join Group</p></span>
        </div>
      </div>
    </>
  );
}
