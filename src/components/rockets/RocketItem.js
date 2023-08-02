import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { rocketReservation, cancelRocketReservation } from '../../redux/rockets/rocketsReducer';

const RocketItem = ({ rocket }) => {
  const dispatch = useDispatch();
  const {
    id, name, flickrImages, description, reserved,
  } = rocket;

  const clickHandler = () => {
    if (!reserved) {
      dispatch(rocketReservation(id));
    } else {
      dispatch(cancelRocketReservation(id));
    }
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-md-4">
          <img src={flickrImages[0]} alt={name} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h3 className="mb-3">{name}</h3>

          {reserved && <span className="badge bg-primary">Reserved</span>}
          <p>{description}</p>
          <Button
            onClick={clickHandler}
            type="button"
            variant={reserved ? 'outline-danger' : 'outline-primary'}
          >
            {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </Button>
        </div>
      </div>
    </li>
  );
};

export default RocketItem;

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
