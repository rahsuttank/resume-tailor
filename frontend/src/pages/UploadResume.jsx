import React, { useState } from 'react';
import { getResumeSuggestions } from '../services/matchService';

const UploadResume = () => {
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleGetMatch = async () => {
    try {
      const result = await getResumeSuggestions(jobDescription, resumeText);
      console.log("Match score:", result.match_percentage);
      // navigate to results page if needed
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-100 p-4 flex justify-between items-center border-b">
        <h1 className="text-xl font-bold">ResumeMatch AI</h1>
        <nav className="space-x-4 text-sm">
          <a href="#">Home</a>
          <a href="#">Upload Resume</a>
          <a href="#">Job Description Input</a>
          <a href="#">Match Score Results</a>
          <a href="#">User Feedback</a>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="w-1/5 p-6 border-r text-center">
          <h2 className="text-lg font-semibold">Upload Your Resume</h2>
        </aside>

        {/* JD Input Center */}
        <main className="flex-1 p-6 flex flex-col gap-4">
          <h2 className="text-lg font-semibold mb-2">Paste or Upload Job Description</h2>
          <textarea
            rows={16}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here..."
            className="w-full border p-4 rounded-md shadow-sm resize-none"
          />

          <button
            onClick={handleGetMatch}
            className="self-end mt-2 px-5 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700"
          >
            Get Match Score
          </button>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t bg-gray-50 text-sm p-4 flex justify-between">
        <div>
          Contact Us: <a href="mailto:support@resumematch.ai" className="text-blue-600">support@resumematch.ai</a>
        </div>
        <div className="space-x-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default UploadResume;
