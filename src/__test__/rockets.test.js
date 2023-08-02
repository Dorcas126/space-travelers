import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Rockets from '../components/rockets/rocket';

const mockStore = configureMockStore();

const mockRocketData = [
  {
    id: 1,
    name: 'Falcon 9',
    flickrImages: ['image1.jpg'],
    description: 'Sample rocket description',
    reserved: false,
  },
];

describe('Rockets', () => {
  it('renders correctly', () => {
    const store = mockStore({ Rockets: mockRocketData });
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
