import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Main_page from './components/Main_page';
import Index from './Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/members" element={<Main_page />} />
        <Route path="/add-member" element={<Main_page />} />
        <Route path="/presentEmp" element={<Main_page />} />
        <Route path="/prevEmployment" element={<Main_page />} />
        <Route path="/prevEmployer" element={<Main_page />} />
        <Route path="/heirs" element={<Main_page />} />
        <Route path="/shortcuts" element={<Main_page/>} />
        <Route path="/search/:query" element={<Main_page />} />
      </Routes>
    </Router>
  );
}

export default App;