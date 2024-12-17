import './css/Hero.css';

interface HeroProps {
  doScroll: (value: number | string) => void;
}

function Hero({doScroll}: HeroProps) {
  return (
    <div className="hero">
      <div className="hero-profile-section">
        <img src="https://avatars.githubusercontent.com/u/128730767?v=4" alt="Foto de Perfil do GitHub"
          className="hero-profile-avatar" />
        <div className="hero-profile-content">
          <h1>opa, <br />meu nome é felipe lucca :)</h1>
          <h2>desenvolvedor de software</h2>
          <div className="hero-profile-buttons">
            <button className="cta-button" id="cta-principal" onClick={() => doScroll("projects")}>ver projetos</button>
            <div className="hero-profile-contact">
              <a href="https://github.com/ofelipelucca  " target="_blank" rel="noopener noreferrer"><img src="assets/icons/github.svg" alt="Github" className="svg-icon" /></a>
              <a href="https://linkedin.com/in/felipe-lucca-taumaturgo-de-oliveira" target="_blank" rel="noopener noreferrer"><img src="assets/icons/linkedin.svg" alt="Linkedin" className="svg-icon" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <button id="hero-scroll-button"><img src="assets/icons/arrow-circle-down.svg" alt="Arrow Down" onClick={() => doScroll("profile")}/></button>
      </div>
      <div className="hero-navbar">
        <nav>
          <button id="nav-button" onClick={() => {doScroll("profile")}}>perfil</button>
          <button id="nav-button" onClick={() => {doScroll("projects")}}>projetos</button>
          <button id="nav-button" onClick={() => doScroll("skills")}>skills</button>
        </nav>
      </div>
    </div>
  );
}

export default Hero;