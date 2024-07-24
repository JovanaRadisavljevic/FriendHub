import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
//aplikacija se pokrece komandom: npm start

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
      
    </Router>
   
    </>
    
  )
}

export default App;
