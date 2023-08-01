import React from 'react';
import ProfileMissions from '../components/mission/ProfileMissions';
import ProfileRocket from '../components/rockets/ProfileRocket';

const ProfileContainer = () => (
  <div className="profileContainer">
    <div className="row">
      <div className="col-md-6">
        <ProfileMissions />
      </div>
      <div className="col-md-6">
        <ProfileRocket />
      </div>
    </div>
  </div>
);

export default ProfileContainer;
