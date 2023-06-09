import axios from 'axios';

export default async function UFetch(endpoint: string) {
  try {
    const response = await axios.get(process.env.API_URL + endpoint);
    return(response.data);
  } catch (error: any) {
    return(error);
  }
}