// src/services/matchService.js
import api from './api';

export const getResumeSuggestions = async (jobDescription, resumeText) => {
  try {
    const { data } = await api.post('/match/suggest', {
      jobDescription,
      resumeText,
    });
    return data;
  } catch (error) {
    console.error('Failed to fetch match suggestions:', error);
    throw error;
  }
};
