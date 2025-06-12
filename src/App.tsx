import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/Aboutpage';       // (dulu ProjectsPage)
import ProjectsPage from './pages/Projectspage'; // (dulu ContactPage)
import ContactPage from './pages/Contactpage';   // (dulu SkillsPage)
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './utils/ScrollToTop';
import FrontPage from './pages/projects2/Front';
import Aipage from './pages/projects2/Ai';
import DesainPage from './pages/projects2/Desain';
import RoboticPage from './pages/projects2/Robotic';
import SplashCursor from './Reactbits/SplashCursor/SplashCursor';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
     <SplashCursor />
     {/* Uncomment if you want to use the SplashCursor component */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/front" element={<FrontPage />} />
            <Route path="/ai" element={<Aipage/>} />
            <Route path="/desain" element={<DesainPage />} />
            <Route path="/robotic" element={<RoboticPage />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;