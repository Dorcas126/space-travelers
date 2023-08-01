const missionsURL = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = async () => {
  try {
    const response = await fetch(missionsURL);

    if (!response.ok) {
      throw new Error(`Failed to fetch missions. Status: ${response.status}`);
    }

    const missionsData = await response.json();

    if (!Array.isArray(missionsData)) {
      throw new Error('Invalid response format. Expected an array of missions.');
    }

    return missionsData;
  } catch (error) {
    console.error('Error fetching missions:', error);
    throw error;
  }
};

export default fetchMissions;
