import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MissionItem from '../components/mission/MissionItem';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureMockStore([thunk]);
const store = mockStore({ missions: [] });

describe('MissionItem', () => {
  const mission = {
    mission_id: '123',
    mission_name: 'Test Mission',
    mission_description: 'This is a test mission.',
    isJoined: false,
  };
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MissionItem mission={mission} />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders the mission name and description correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MissionItem mission={mission} />
      </Provider>,
    );

    const missionName = getByText(mission.mission_name);
    const missionDescription = getByText(mission.mission_description);

    expect(missionName).toBeInTheDocument();
    expect(missionDescription).toBeInTheDocument();
  });

  it('renders the badge as "Not a Member" when the user is not joined', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MissionItem mission={mission} />
      </Provider>,
    );

    const badge = getByText('Not a Member');

    expect(badge).toBeInTheDocument();
  });

  it('renders the badge as "Active Member" when the user is joined', () => {
    const joinedMission = { ...mission, isJoined: true };
    const { getByText } = render(
      <Provider store={store}>
        <MissionItem mission={joinedMission} />
      </Provider>,
    );

    const badge = getByText('Active Member');

    expect(badge).toBeInTheDocument();
  });

  it('renders the "Join" button when the user is not joined', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MissionItem mission={mission} />
      </Provider>,
    );

    const joinButton = getByText('Join');

    expect(joinButton).toBeInTheDocument();
  });

  it('renders the "Leave" button when the user is joined', () => {
    const joinedMission = { ...mission, isJoined: true };
    const { getByText } = render(
      <Provider store={store}>
        <MissionItem mission={joinedMission} />
      </Provider>,
    );

    const leaveButton = getByText('Leave');

    expect(leaveButton).toBeInTheDocument();
  });

  it('dispatches the correct action when the "Join" button is clicked', () => {
    // Mock the dispatch function
    store.dispatch = jest.fn();

    const { getByText } = render(
      <Provider store={store}>
        <MissionItem mission={mission} />
      </Provider>,
    );

    const joinButton = getByText('Join');
    fireEvent.click(joinButton);

    expect(store.dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: 'Space_Travelers/missions/JOIN_MISSION' }));
  });

  it('dispatches the correct action when the "Leave" button is clicked', () => {
    store.dispatch = jest.fn();

    const joinedMission = { ...mission, isJoined: true };
    const { getByText } = render(
      <Provider store={store}>
        <MissionItem mission={joinedMission} />
      </Provider>,
    );

    const leaveButton = getByText('Leave');
    fireEvent.click(leaveButton);

    expect(store.dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: 'Space_Travelers/missions/LEAVE_MISSION' }));
  });
});
