import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Optimize Your Resume with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get personalized suggestions to make your resume stand out and match job descriptions perfectly.
          </p>
          <Link to="/upload">
            <Button className="text-lg px-8 py-4">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Analysis</h3>
            <p className="text-gray-600">
              Our AI analyzes your resume against job descriptions to identify gaps and opportunities.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Personalized Suggestions</h3>
            <p className="text-gray-600">
              Get specific recommendations for skills to add and experience to highlight.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Match Score</h3>
            <p className="text-gray-600">
              See exactly how well your resume aligns with the job requirements.
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Upload Your Resume</h3>
              <p className="text-gray-600">
                Paste your resume text and the job description you're applying for.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600">
                Our advanced AI compares your resume with the job requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Get Results</h3>
              <p className="text-gray-600">
                Receive a match score and personalized improvement suggestions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Resume?</h2>
          <p className="text-gray-600 mb-8">
            Join thousands of job seekers who have improved their chances with AI-powered resume optimization.
          </p>
          <Link to="/upload">
            <Button className="text-lg px-8 py-4">
              Start Optimizing Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 