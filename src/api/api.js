//to check authentication  token  to  backend endpoint see on console when user success login with their credentials
// and run also   json-server --watch db.json --port 3001 




import axios from 'axios';

export const sendTokenToBackend = async (token) => {
  try {
    console.log("Sending token to backend:", token);
    const response = await axios.post('http://localhost:3001/tokens', { token });
    console.log("Response from backend:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending token to backend:", error);
    throw error;
  }
};
