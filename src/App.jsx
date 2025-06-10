import './App.css';
import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import BantuanSection from './components/BantuanSection';
import HeroGradient from './components/apapunSection/HeroGradient';
import HeroMain from './components/apapunSection/HeroMain';
import SubHeroSection from './components/apapunSection/SubHeroSection';
import NavbarMain from './components/navbar/NavbarMain';
import SkillMain from './components/SkillSection/SkillMain';
import ExperienceMain from './components/ExperienceSection/ExperienceMain';
import ProjecMain from './components/ProjectSection/ProjecMain';
import ContactMeMain from './components/ContactMeSection/ContactMeMain';

function App() {

  return (
  <main className="font-body">
    <NavbarMain/>
    <HeroMain/>
    <HeroGradient/>
    <SubHeroSection/>
    <AboutMeMain/>
    <SkillMain/>
    <ExperienceMain/>
    <ProjecMain/>
    <ContactMeMain/>
    <BantuanSection/>

  </main>

  );

};

export default App;
