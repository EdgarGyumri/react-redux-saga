import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllUsersPage from './views/allUsersPage/index';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<AllUsersPage />} /> */}
        {/* <Route path="/user/:id" element={<AllUsersPage />} /> */}
      </Routes>
      <AllUsersPage />
    </div>
  );
}

export default App;
