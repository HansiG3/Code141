import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const NavTabs = ["Assignments", "AddQuestion", "Questions"];
const NavLinks = ["/professors/assignments", "/professors/addQuestion", "/professors/questions"];
function App() {

  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<LandingPage />} />
          <Route path="/professorlogin" element={<LoginPage LoginType={"Professors"} />} />
          <Route path="/studentlogin" element={<LoginPage LoginType={"Students"} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App