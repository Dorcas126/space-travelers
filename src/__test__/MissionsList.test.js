import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MissionsList from '../components/mission/MissionsList';

const mockStore = configureMockStore();
const store = mockStore({ missions: [] });

describe('MissionsList', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MissionsList />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
