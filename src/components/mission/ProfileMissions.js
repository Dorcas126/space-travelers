import React from 'react';
import { useSelector } from 'react-redux';

const ProfileMissions = () => {
  const missions = useSelector((state) => state.missions);
  const filteredMissions = missions.filter((mission) => mission.isJoined);

  const renderList = () => {
    const joinedMissions = filteredMissions.filter((mission) => mission.isJoined);
    if (joinedMissions.length) {
      return joinedMissions.map((mission) => (
        <li key={mission.mission_id} className="list-group-item">
          <p>
            {mission.mission_name}
          </p>
        </li>
      ));
    }

    return <li className="list-group-item not-joined">No missions joined</li>;
  };

  return (
    <div className="wrapper">
      <h2 className="my-missions">My Missions</h2>
      <ul className="list-group">
        {renderList()}
      </ul>
    </div>
  );
};

export default ProfileMissions;
