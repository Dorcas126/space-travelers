import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/mission/missions';

const MissionItem = ({ mission }) => {
  const dispatch = useDispatch();

  const renderBadge = () => (mission.isJoined ? <Badge bg="success">Active Member</Badge> : <Badge bg="secondary">Not a Member</Badge>);

  const handleJoinLeaveMission = () => {
    if (mission.isJoined) {
      dispatch(leaveMission(mission.mission_id));
    } else {
      dispatch(joinMission(mission.mission_id));
    }
  };

  return (
    <tr>
      <td className="fw-bold">{mission.mission_name}</td>
      <td>
        <p>{mission.mission_description}</p>
      </td>
      <td>{renderBadge()}</td>
      <td className="text-center">
        <Button variant={mission.isJoined ? 'outline-danger' : 'outline-primary'} onClick={handleJoinLeaveMission}>
          {mission.isJoined ? 'Leave' : 'Join'}
        </Button>
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    mission_description: PropTypes.string.isRequired,
    isJoined: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MissionItem;
