import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Members from './components/Members';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to='/members'/>}/>
        <Route path="/members" element={<Members />} />
      </Routes>
    </Router>
  );
}

export default App;