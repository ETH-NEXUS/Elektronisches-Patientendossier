import { useUser } from '../context/UserContext';
import { FaCheckCircle, FaExclamationTriangle, FaClock, FaHeartbeat, FaStethoscope, FaEye, FaTooth, FaLungs } from 'react-icons/fa';
import './Pages.css';
import './Praevention.css';

function Praevention() {
  const { currentUser } = useUser();

  // Prävention-Daten des aktuellen Users
  const preventionData = currentUser.preventionData || [];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'aktuell': return <FaCheckCircle />;
      case 'überfällig': return <FaExclamationTriangle />;
      case 'bald_fällig': return <FaClock />;
      case 'empfohlen': return <FaHeartbeat />;
      default: return <FaHeartbeat />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'aktuell': return '#27ae60';
      case 'überfällig': return '#e74c3c';
      case 'bald_fällig': return '#f39c12';
      case 'empfohlen': return '#3498db';
      default: return '#95a5a6';
    }
  };

  const getStatusLabel = (status) => {
    switch(status) {
      case 'aktuell': return 'Aktuell';
      case 'überfällig': return 'Überfällig';
      case 'bald_fällig': return 'Bald fällig';
      case 'empfohlen': return 'Empfohlen';
      default: return status;
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Impfungen': return <FaHeartbeat />;
      case 'Vorsorge': return <FaStethoscope />;
      case 'Screening': return <FaEye />;
      case 'Dental': return <FaTooth />;
      case 'Check-up': return <FaLungs />;
      default: return <FaHeartbeat />;
    }
  };

  return (
    <div className="page-container">
      <h1>Prävention & Vorsorge</h1>
      <p>Ihre Vorsorgeuntersuchungen, Screenings und Impfungen im Überblick</p>

      <div className="prevention-grid">
        {preventionData.length > 0 ? (
          preventionData.map((item, index) => (
            <div
              key={index}
              className="prevention-card"
              style={{
                borderLeft: `5px solid ${getStatusColor(item.status)}`
              }}
            >
              <div className="prevention-card-header">
                <div className="prevention-icon" style={{ color: getStatusColor(item.status) }}>
                  {getCategoryIcon(item.category)}
                </div>
                <div
                  className="prevention-status-badge"
                  style={{
                    backgroundColor: `${getStatusColor(item.status)}15`,
                    color: getStatusColor(item.status)
                  }}
                >
                  {getStatusIcon(item.status)}
                  <span>{getStatusLabel(item.status)}</span>
                </div>
              </div>

              <div className="prevention-card-body">
                <h3>{item.name}</h3>
                <div className="prevention-category">{item.category}</div>

                <div className="prevention-details">
                  {item.lastDate && (
                    <div className="prevention-detail-item">
                      <span className="detail-label">Letzte Durchführung:</span>
                      <span className="detail-value">{item.lastDate}</span>
                    </div>
                  )}
                  {item.nextDue && (
                    <div className="prevention-detail-item">
                      <span className="detail-label">Nächster Termin:</span>
                      <span className="detail-value">{item.nextDue}</span>
                    </div>
                  )}
                  {item.daysUntilDue !== undefined && (
                    <div className="prevention-detail-item">
                      <span className="detail-label">
                        {item.daysUntilDue < 0 ? 'Überfällig seit:' : 'Noch:'}
                      </span>
                      <span className="detail-value">
                        {Math.abs(item.daysUntilDue)} Tage
                      </span>
                    </div>
                  )}
                  {item.interval && (
                    <div className="prevention-detail-item">
                      <span className="detail-label">Intervall:</span>
                      <span className="detail-value">{item.interval}</span>
                    </div>
                  )}
                </div>

                {item.description && (
                  <div className="prevention-description">
                    {item.description}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="no-prevention-data">
            <FaHeartbeat className="no-data-icon" />
            <p>Keine Präventionsdaten verfügbar</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Praevention;
