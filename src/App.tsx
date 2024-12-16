import Hero from './components/Hero';
import Projects from './components/Projects';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {
  const doScroll = (value: number | string) => {
    if (typeof value === 'number') {
      const scrollPosition = (document.documentElement.scrollHeight * value) / 100;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    } else if (typeof value === 'string') {
      const element = document.getElementById(value);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <div className="app">
      <Hero doScroll={doScroll}/>
      <Profile />
      <Projects />
      <Skills doScroll={doScroll}/>
      <footer>
        <Footer doScroll={doScroll} />
      </footer>
    </div>
  );
}

export default App;