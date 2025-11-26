import './Pages.css';

function Home() {
  return (
    <div className="page-container">
      <h1>Willkommen im EPD</h1>
      <p>Elektronisches Patientendossier - Schweiz</p>
      <div className="page-content">
        <div className="info-card">
          <h2>Übersicht</h2>
          <p>Hier sehen Sie eine Übersicht Ihrer Patientendaten.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
