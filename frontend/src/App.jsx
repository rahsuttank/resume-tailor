import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadResume from './pages/UploadResume'; 
import Results from './pages/Results';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/upload" element={<UploadResume />} />
        {/* Future routes: */}
        <Route path="/" element={<h1> Hello </h1>} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
