import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const MissionItem = ({ mission }) => (
  <tr>
    <td className="fw-bold">{mission.mission_name}</td>
    <td>
      <p>{mission.mission_description}</p>
    </td>
    <td className="text-center">
      <Button />
    </td>
  </tr>
);

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    mission_description: PropTypes.string.isRequired,
    wikipedia: PropTypes.string.isRequired,
    isJoined: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MissionItem;
