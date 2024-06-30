import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Main_page from './components/Main_page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to='/members'/>}/>
        <Route path="/members" element={<Main_page />} />
        <Route path="/add-member" element={<Main_page />} />
        <Route path="/presentEmp" element={<Main_page />} />
        <Route path="/prevEmp" element={<Main_page />} />
        <Route path="/heirs" element={<Main_page />} />
      </Routes>
    </Router>
  );
}

export default App;