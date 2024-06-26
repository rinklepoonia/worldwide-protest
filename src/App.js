import React, { useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'; import HeroSection from './components/HeroSection';
import AppsSection from './components/AppsSection';
import AboutSection from './components/AboutSection';
import TokenSection from './components/TokenSection';
import Utlity from './components/Utlity';
import HistoryBox from './components/HistoryBox';
import EcoSection from './components/EcoSection';
import RoadmapSection from './components/RoadmapSection';
import Latest from './components/Latest';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
      }
    );
    Aos.refresh()
  });
  return (
    <div className='overflow-hidden'>
      <HeroSection />
      <AppsSection />
      <AboutSection />
      <TokenSection />
      <Utlity />
      <HistoryBox />
      <EcoSection />
      <RoadmapSection />
      <Latest />
      <AppsSection />
      <Footer />
    </div>
  );
}

export default App;
