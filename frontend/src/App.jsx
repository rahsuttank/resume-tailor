import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadResume from './pages/UploadResume'; 
import Results from './pages/Results';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './routes/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={
          <ProtectedRoute>
            <UploadResume />
          </ProtectedRoute>
        } />
        <Route path="/results" element={
          <ProtectedRoute>
            <Results />
          </ProtectedRoute>
        } />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
