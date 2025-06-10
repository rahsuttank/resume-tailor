import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Results() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const matchData = state?.matchData;

  if (!matchData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">No match data available. Please go back and try again.</p>
        <button
          onClick={() => navigate('/upload')}
          className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Upload Resume
        </button>
      </div>
    );
  }

  const { match_percentage, suggestions } = matchData;
  const { summary, experience_tweaks, skills_to_add } = suggestions;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-100 p-4 flex justify-between items-center border-b">
        <h1 className="text-xl font-bold">ResumeMatch AI</h1>
        <nav className="space-x-4 text-sm">
          <a href="/">Home</a>
          <a href="/upload">Upload Resume</a>
          <a href="/results">Results</a>
          <a href="#feedback">User Feedback</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-6 flex-1 space-y-8 overflow-y-auto">
        {/* Match Score Section */}
        <section className="flex items-center space-x-6">
          {/* Placeholder for visual element */}
          <div className="w-32 h-32 bg-gray-200 rounded flex items-center justify-center">
            {/* Could replace with a progress circle */}
            <span className="text-gray-500">[Dial]</span>
          </div>
          <div>
            <h2 className="text-4xl font-bold">Your Match Score: {match_percentage}%</h2>
            <p className="mt-2 text-gray-700">
              Based on the job description, here's how well your resume aligns. See detailed suggestions below.
            </p>
          </div>
        </section>

        {/* Personalized Suggestions Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Personalized Suggestions</h3>
          <div className="border rounded-lg p-6 max-h-[300px] overflow-y-auto space-y-4 bg-white shadow">
            {/* Summary */}
            <div>
              <h4 className="text-lg font-semibold mb-1">Summary:</h4>
              <p className="text-gray-800">{summary}</p>
            </div>
            {/* Experience Enhancements */}
            <div>
              <h4 className="text-lg font-semibold mb-1">Experience Enhancements:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-800">
                {experience_tweaks.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Skills to Add Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Skills to Add</h3>
          <div className="border rounded-lg p-6 max-h-[200px] overflow-y-auto bg-white shadow">
            <ul className="list-disc list-inside space-y-1 text-gray-800">
              {skills_to_add.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 text-sm p-4 text-center">
        <p>© 2025 ResumeMatch AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
