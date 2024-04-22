const axios = require('axios');
require('dotenv').config();

const palm_api_key = process.env.PALM_API_KEY; // Assuming you have a PALM API key in your .env file

// Configure axios instance for making requests to the PALM API
const palmAPI = axios.create({
  baseURL: 'https://bard.google.com', // Replace 'https://api.example.com' with the actual API endpoint
  headers: {
    'Authorization': `Bearer ${palm_api_key}`,
    'Content-Type': 'application/json'
  }
});

// Function to generate itinerary using the PALM API
const generate_itinerary = async (source, destination, start_date, end_date, no_of_day) => {
  try {
    const prompt = `Generate a personalized trip itinerary for a ${no_of_day}-day trip from ${source} to ${destination} from ${start_date} to ${end_date}, with an optimum budget (Currency:INR).`;
    const response = await palmAPI.post('/generate-itinerary', { prompt });
    return response.data.text; // Assuming the response contains the generated itinerary text
  } catch (error) {
    console.error('Error generating itinerary:', error.response ? error.response.data : error.message);
    throw new Error('Error generating itinerary.');
  }
};

module.exports = { generate_itinerary };
