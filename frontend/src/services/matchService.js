import axios from 'axios'; 

export const getResumeSuggestions = async (jobDescription, resumeText) => {
  try {
    const response = await axios.post('/match/suggest', {
      jobDescription,
      resumeText,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch match suggestions:", error);
    throw error;
  }
};
