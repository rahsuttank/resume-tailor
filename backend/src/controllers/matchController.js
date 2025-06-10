const axios = require('axios');

exports.getSuggestions = async (req, res) => {
  const { jobDescription, resumeText } = req.body;

  if (!jobDescription || !resumeText) {
    return res.status(400).json({ error: "Both jobDescription and resumeText are required." });
  }

  try {
    // Forward to AI microservice
    const aiResponse = await axios.post('http://localhost:5001/suggest', {
      jd_text: jobDescription,
      resume_text: resumeText
    });

    return res.json(aiResponse.data);
  } catch (err) {
    console.error("Error calling AI service:", err.message);
    return res.status(500).json({ error: "Failed to get suggestions from AI." });
  }
};
