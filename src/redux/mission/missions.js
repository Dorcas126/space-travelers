import fetchMissions from './fetchMissions';

const GET_MISSIONS = 'Space_Travelers/missions/GET_MISSIONS';

const initialState = [];

let Loading = false;

export const getMissions = () => async (dispatch) => {
  if (Loading) return;
  const response = await fetchMissions();
  const missions = response.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    mission_description: mission.description,
    isJoined: false,
  }));
  dispatch({
    type: GET_MISSIONS,
    payload: missions,
  });
  Loading = true;
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export { GET_MISSIONS };
export default missionsReducer;
