import axios from 'axios';

const API_URL = 'https://gist.githubusercontent.com/joaofs/6a4eb62499572a29485ac5924a0c9e64/raw/97ac2191e65fb6d84f6f336dc8867efbc97410a3';

export async function fetchCarsData() {
  try {
    const response = await axios.get(`${API_URL}/cars.json`);
    return response
    }
   catch (error) {
    alert(error.message)
  }
}
