import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllUsersPage from './views/allUsersPage/index';
import SingleUserPage from './views/singleUserPage/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllUsersPage />} />
        <Route path="/user/:id" element={<SingleUserPage />} />
      </Routes>
    </div>
  );
}

export default App;
