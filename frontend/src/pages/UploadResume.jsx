import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getResumeSuggestions } from '../services/matchService';

export default function UploadResume() {
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGetMatch = async () => {
    setError('');
    setLoading(true);
    try {
      const result = await getResumeSuggestions(jobDescription, resumeText);
      console.log(result)
      navigate('/results', { state: { matchData: result } });
    } catch (err) {
      console.error(err);
      setError('Failed to fetch match score. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-100 p-4 flex justify-between items-center border-b">
        <h1 className="text-xl font-bold">ResumeMatch AI</h1>
        <nav className="space-x-4 text-sm">
          <a href="/">Home</a>
          <a href="/upload">Upload Resume</a>
          <a href="/results">Results</a>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Resume Text Input */}
        <aside className="w-1/2 p-6 border-r">
          <h2 className="text-lg font-semibold mb-2">Step 1: Paste Your Resume Text</h2>
          <textarea
            rows={20}
            value={resumeText}
            onChange={e => setResumeText(e.target.value)}
            placeholder="Paste the full text of your resume here..."
            className="w-full h-full border p-4 rounded-md shadow-sm resize-none"
          />
          {resumeText && (
            <p className="mt-2 text-green-700">Resume text ready ✅</p>
          )}
        </aside>

        {/* Job Description Input */}
        <main className="w-1/2 p-6 flex flex-col">
          <h2 className="text-lg font-semibold mb-2">Step 2: Paste Job Description</h2>
          <textarea
            rows={20}
            value={jobDescription}
            onChange={e => setJobDescription(e.target.value)}
            placeholder="Paste the full job description here..."
            className="w-full h-full border p-4 rounded-md shadow-sm resize-none mb-4"
          />
        </main>
      </div>

      {/* Action Button & Error */}
      <div className="p-6 border-t flex justify-end items-center">
        {error && <p className="text-red-600 mr-4">{error}</p>}
        <button
          onClick={handleGetMatch}
          disabled={!resumeText || !jobDescription || loading}
          className={`px-6 py-2 font-medium rounded \
            ${!resumeText || !jobDescription
              ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'}
          `}
        >
          {loading ? 'Matching...' : 'Get Match Score'}
        </button>
      </div>
    </div>
  );
}
