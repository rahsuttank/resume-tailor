// src/components/ResumeForm.jsx
import React, { useState } from "react";
import Button from "./Button"; // If you have a custom Button component

const ResumeForm = ({ onSubmit, loading }) => {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!resumeText || !jobDescription) {
      setError("Both fields are required.");
      return;
    }
    onSubmit({ resumeText, jobDescription });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label className="font-semibold">Resume Text</label>
        <textarea
          rows={10}
          value={resumeText}
          onChange={e => setResumeText(e.target.value)}
          placeholder="Paste your resume here..."
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="font-semibold">Job Description</label>
        <textarea
          rows={10}
          value={jobDescription}
          onChange={e => setJobDescription(e.target.value)}
          placeholder="Paste the job description here..."
          className="w-full border p-2 rounded"
        />
      </div>
      {error && <p className="text-red-600">{error}</p>}
      <Button type="submit" disabled={loading}>
        {loading ? "Matching..." : "Get Match Score"}
      </Button>
    </form>
  );
};

export default ResumeForm;