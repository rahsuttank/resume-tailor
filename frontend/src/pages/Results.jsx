import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Results() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const matchData = state?.matchData;
  const { setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  if (!matchData) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
          <p className="text-gray-600 mb-4">No match data available. Please go back and try again.</p>
          <button
            onClick={() => navigate('/upload')}
            className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Upload Resume
          </button>
        </div>
      </div>
    );
  }

  const { match_percentage, suggestions } = matchData;
  const { summary, experience_tweaks, skills_to_add } = suggestions;

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gray-50 py-8">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-8 flex flex-col gap-8">
        {/* Match Score Section */}
        <section className="flex flex-col items-center gap-4">
          <div className="w-36 h-36 flex items-center justify-center">
            <svg width="140" height="140" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#e5e7eb"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#2563eb"
                strokeWidth="10"
                fill="none"
                strokeDasharray={2 * Math.PI * 45}
                strokeDashoffset={2 * Math.PI * 45 * (1 - match_percentage / 100)}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
              <text
                x="50"
                y="57"
                textAnchor="middle"
                fontSize="28"
                fill="#2563eb"
                fontWeight="bold"
              >
                {match_percentage}%
              </text>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-center">Your Match Score</h2>
          <p className="text-gray-700 text-center max-w-md">
            Based on the job description, here's how well your resume aligns. See detailed suggestions below.
          </p>
        </section>

        {/* Personalized Suggestions Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Personalized Suggestions</h3>
          <div className="border rounded-xl p-6 max-h-[300px] overflow-y-auto bg-gray-50 shadow-inner space-y-4">
            {/* Summary */}
            <div>
              <h4 className="text-lg font-semibold mb-1">Summary</h4>
              <p className="text-gray-800">{summary}</p>
            </div>
            {/* Experience Enhancements */}
            <div>
              <h4 className="text-lg font-semibold mb-1">Experience Enhancements</h4>
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
          <div className="border rounded-xl p-6 max-h-[200px] overflow-y-auto bg-gray-50 shadow-inner">
            <ul className="list-disc list-inside space-y-1 text-gray-800">
              {skills_to_add.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
