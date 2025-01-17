import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';

function Notifications() {
  return (
    <div className="Notifications">
      <button aria-label='close' style={{ float: 'right', cursor: 'pointer' }} onClick={console.log('Close button has been clicked')}>
        <img src={closeIcon} alt='close-icon' />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>  
      </ul>
    </div>
  );
}

export default Notifications;