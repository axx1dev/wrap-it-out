import axios from 'axios';
import { teamData } from "../data/index";
const baseUrl = 'http://localhost:3001/data'

const getAllPeopleTeam = async () => {
  try {
    const result = await axios.get(baseUrl)
    if (result.status !== 200) {
      throw new Error('error connection')
    }
    return result.data
  } catch (error) {
    //console.error(error)
    return teamData
  }
  
}

export default getAllPeopleTeam