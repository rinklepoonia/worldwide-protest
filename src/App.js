import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import HeroSection from './components/HeroSection';
import AppsSection from './components/AppsSection';
import AboutSection from './components/AboutSection';
import TokenSection from './components/TokenSection';
import Utlity from './components/Utlity';
import HistoryBox from './components/HistoryBox';
import EcoSection from './components/EcoSection';

function App() {
  return (
    <>
      <HeroSection />
      <AppsSection />
      <AboutSection />
      <TokenSection />
      <Utlity />
      <HistoryBox />
      <EcoSection/>
    </>
  );
}

export default App;
