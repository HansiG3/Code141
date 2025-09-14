import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LandingPage from "./Pages/LandingPage/Landingpage.jsx";


function App() {

  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
