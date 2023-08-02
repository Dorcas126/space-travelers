import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import RocketItem from '../components/rockets/RocketItem';

const mockRocket = {
  id: 1,
  name: 'Falcon 9',
  flickrImages: ['image1.jpg', 'image2.jpg'],
  description: 'Sample rocket description',
  reserved: false,
};

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));

describe('RocketItem', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RocketItem rocket={mockRocket} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.string,
    flickrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};