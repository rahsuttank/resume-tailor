// src/pages/UploadResume.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getResumeSuggestions } from '../services/matchService';
import Button from '../components/Button';

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
      navigate('/results', { state: { matchData: result } });
    } catch (err) {
      setError('Failed to fetch match score. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-gray-50 py-12 px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden mb-8">
        {/* Resume Text Input */}
        <aside className="md:w-1/2 p-10 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Step 1: Paste Your Resume</h2>
          <textarea
            rows={16}
            value={resumeText}
            onChange={e => setResumeText(e.target.value)}
            placeholder="Paste the full text of your resume here..."
            className="w-full h-full border px-6 py-4 rounded-xl shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-base"
          />
          {resumeText && (
            <p className="mt-4 text-green-700 text-sm">Resume text ready ✓</p>
          )}
        </aside>

        {/* Job Description Input */}
        <main className="md:w-1/2 p-10 flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Step 2: Paste Job Description</h2>
          <textarea
            rows={16}
            value={jobDescription}
            onChange={e => setJobDescription(e.target.value)}
            placeholder="Paste the full job description here..."
            className="w-full h-full border px-6 py-4 rounded-xl shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-base"
          />
        </main>
      </div>

      {/* Button and Error Section - Centered at Bottom */}
      <div className="flex flex-col items-center gap-4">
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <Button
          onClick={handleGetMatch}
          disabled={!resumeText || !jobDescription || loading}
          loading={loading}
          className="px-12 py-4 text-lg"
        >
          {loading ? 'Matching...' : 'Get Match Score'}
        </Button>
      </div>
    </div>
  );
}