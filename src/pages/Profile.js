import React from 'react';
import ProfileMissions from '../components/mission/ProfileMissions';

const ProfileContainer = () => (
  <div className="profileContainer">
    <div className="row">
      <div className="col-md-6">
        <ProfileMissions />
      </div>
    </div>
  </div>
);

export default ProfileContainer;
