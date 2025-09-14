
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import LoginPage from './pages/LoginPage/LoginPage';
import StudentAssignments from './pages/Student/Assignments/StudentAssignments';
// import ProfessorAssignments from './pages/Professor/Assignments/ProfessorAssignments';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// const NavTabs = ["Assignments", "AddQuestion", "Questions"];
// const NavLinks = ["/professors/assignments", "/professors/addQuestion", "/professors/questions"];
function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#130f49ff",
        color: "#ffffff",
      }}
    >
      <ToastContainer />
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<LandingPage />} />
          <Route path="/professorlogin" element={<LoginPage LoginType={"Professors"} />} />
          <Route path="/studentlogin" element={<LoginPage LoginType={"Students"} />} />
          {/* <Route path="/professors/assignments" element={<ProfessorAssignments NavTabs={NavTabs} NavLinks={NavLinks} />} /> */}
          <Route path="/students/assignments" element={<StudentAssignments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
