import './css/Profile.css';

function Profile() {
  return (
    <div className="profile-container" id="profile">
      <h2 className="profile-title">MEU PERFIL</h2>
      <div className="profile-content">
        <div className="profile-section">
          <div className="academic-container">
            <img
              src="assets/Logo_UFMG.png"
              alt="Logo Universidade Federal de Minas Gerais"
              className="academic-logo"
            />
            <div className="academic-info">
              <h3 className="academic-title"><strong>formação acadêmica</strong></h3>
              <p className="academic-degree">Engenharia de Sistemas - (2023-2028)</p>
              <p className="note"><i>*Turno Noturno*</i></p>
            </div>
          </div>
          <div className="experience-section">
            <div className="profile-card">
              <p>
                <strong>experiência</strong> como freelancer trabalhando no back-end e front-end, transformando ideias em realidade.
              </p>
            </div>
            <div className="profile-card">
              <p>conhecimento e experiência nas <strong>principais linguagens de programação e frameworks.</strong></p>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <p>aberto para freelances e à procura de uma oportunidade como dev trainee :*</p>
          <p className="note">disponibilidade na manhã e tarde.</p>
        </div>
        <div className="profile-card" id="portfolio-info">
          <h3>meus trabalhos recentes incluem:</h3>
          <ul>
            <li>Sistemas de Interação Baseados em Gestos e Visão Computacional</li>
            <li>Aplicações de Experiência Interativa em Streaming</li>
            <li>Softwares Criativos e Gamificação de Inputs</li>
            <li>Integração com IA e Serviços em Nuvem</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;