import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import HeroSection from './components/HeroSection';
import AppsSection from './components/AppsSection';
import AboutSection from './components/AboutSection';
import TokenSection from './components/TokenSection';

function App() {
  return (
    <>
      <HeroSection />
      <AppsSection />
      <AboutSection />
      <TokenSection />
    </>
  );
}

export default App;
