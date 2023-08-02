import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getMissions } from '../../redux/mission/missions';
import MissionItem from './MissionItem';

const MissionsList = () => {
  const dispatch = useDispatch();
  const missionsList = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <Table striped bordered responsive>
      <thead>
        <tr>
          <th className="fw-bold">Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th className="text-center">Join/Leave</th>
        </tr>
      </thead>
      <tbody>
        {missionsList.map((mission) => (
          <MissionItem key={mission.mission_id} mission={mission} />
        ))}
      </tbody>
    </Table>
  );
};

export default MissionsList;
