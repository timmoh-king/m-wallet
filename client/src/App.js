import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from "./context/privateRoutes";
import Signup from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Homepage from './pages/Homepage'

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="home" element={<Dashboard />} />
      </Route>

      <Route path="/" element={<Homepage />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<Homepage />} />
    </Routes>
  );
}

export default App;
