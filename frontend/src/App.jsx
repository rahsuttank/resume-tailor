import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadResume from './pages/UploadResume'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/upload" element={<UploadResume />} />
        {/* Future routes: */}
        <Route path="/" element={<h1> Hello </h1>} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
