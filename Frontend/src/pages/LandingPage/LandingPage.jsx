import { Typewriter } from 'react-simple-typewriter';
import LandingPageCard from "../../components/Card/LandingPageCard.jsx";
function LandingPage() {
  return (
    <>
      
      <div className="container px-3">
        <div className="row my-3 align-items-center">
          <div className="col-6 d-none d-md-block">
            <h1 className="display-3 " style={{ color: '#fff' }}><Typewriter
              words={['Welcome to CODE 141']}
              loop={1}
              cursor
              cursorStyle='|'
              typeSpeed={50}
              delaySpeed={1000}
            /></h1>
            <p className="lead" style={{ color: '#fff' }}>CODE 141 is a platform for students and professors to simplify the process of coding assignments.</p>
          </div>
          {/* <div className="col-12 col-md-6">
            <img src="/assets/images/LOGO.png" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
          </div> */}
        </div>
        <div className="row">
          <div className="col-12 col-md-6 my-3">
            <LandingPageCard title="Code 141 for Students" content="Coding made simple with Code 141." btntext="Login" btnlink="/studentlogin" />
          </div>
          <div className="col-12 col-md-6 my-3">
            <LandingPageCard title="Code 141 for Professors" content="Streamlining grading with Code 141." btntext="Login" btnlink="/professorlogin" />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12">
            <LandingPageCard title="Register Your College" content="Join the Code 141 community today." btntext="Register" btnlink="/registercollege" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <br /><br /><br />
          </div>
        </div>
      </div>
      
    </>
  );
}
export default LandingPage;