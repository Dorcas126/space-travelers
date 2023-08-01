import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

const MissionsList = () => (
  <Table striped bordered responsive>
    <thead>
      <tr>
        <th className="fw-bold">Mission</th>
        <th>Description</th>
        <th>Status</th>
        <th className="text-center">Join/Leave</th>
      </tr>
    </thead>
    <tbody />
  </Table>
);

export default MissionsList;
