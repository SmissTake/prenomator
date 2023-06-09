import axios, { AxiosRequestConfig } from 'axios';

export default async function UFetch(endpoint: string, method: string = 'GET', headers: any = {}, body: any = null) {
  const config: AxiosRequestConfig = {
    method: method,
    url: process.env.API_URL + endpoint,
    headers: headers,
    data: body
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    return error;
  }
}