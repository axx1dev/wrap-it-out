import axios from 'axios';
const baseUrl = 'http://localhost:3001/data'

const getAllPeopleTeam = async () => {
  try {
    const result = await axios.get(baseUrl)
    return result.data
  } catch (error) {
    throw error
  }
  
}

export default getAllPeopleTeam