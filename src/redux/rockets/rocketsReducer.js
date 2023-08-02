import rocketAPI from './rocketAPI';
// Constants
const GET_ROCKET_DATA = 'spacetravelers/rockets/GET_ROCKET_DATA';
const ROCKET_RESERVATION = 'spacetravelers/rockets/ROCKET_RESERVATION';
const CANCEL_ROCKET_RESERVATION = 'spacetravelers/rockets/CANCEL_ROCKET_RESERVATION';

// Initial State
const initialState = [];

function getRocketData(rockets) {
  const APIRocketData = rockets.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    flickrImages: rocket.flickr_images,
    description: rocket.description,
  }));
  return {
    type: GET_ROCKET_DATA,
    payload: APIRocketData,
  };
}

export const fetchRocketDataFromAPI = () => async (dispatch) => {
  setTimeout(async () => {
    const response = await rocketAPI.getRocketData();
    dispatch(getRocketData(response));
  }, 1000);
};

export function rocketReservation(id) {
  return {
    type: ROCKET_RESERVATION,
    payload: id,
  };
}

export function cancelRocketReservation(id) {
  return {
    type: CANCEL_ROCKET_RESERVATION,
    payload: id,
  };
}

function updateRocketReservationStatus(state, rocketId, reserved) {
  return state.map((rocket) => (rocket.id !== rocketId ? rocket : { ...rocket, reserved }));
}

export default function reducerRockets(state = initialState, action) {
  switch (action.type) {
    case GET_ROCKET_DATA:
      return action.payload;
    case ROCKET_RESERVATION:
      return updateRocketReservationStatus(state, action.payload, true);
    case CANCEL_ROCKET_RESERVATION:
      return updateRocketReservationStatus(state, action.payload, false);
    default:
      return state;
  }
}
