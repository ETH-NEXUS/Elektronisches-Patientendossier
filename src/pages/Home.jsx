import './Pages.css';
import './Home.css';
import { useUser } from '../context/UserContext';

function Home() {
  const { currentUser } = useUser();

  return (
    <div className="page-container">
      <div className="home-header">
        <h1>Gesundheitsübersicht</h1>
        <p>Willkommen, {currentUser.name}</p>
      </div>

      <div className="home-grid">
        {/* Persönliche Stammdaten */}
        <div className="info-card personal-data">
          <h2>Persönliche Daten</h2>
          <div className="data-grid">
            <div className="data-item">
              <span className="label">Name:</span>
              <span className="value">{currentUser.name}</span>
            </div>
            <div className="data-item">
              <span className="label">Geburtsdatum:</span>
              <span className="value">{currentUser.birthDate}</span>
            </div>
            <div className="data-item">
              <span className="label">Geschlecht:</span>
              <span className="value">{currentUser.gender}</span>
            </div>
            <div className="data-item address-item">
              <span className="label">Adresse:</span>
              <span className="value address">
                <span className="address-street">{currentUser.address.street}</span>
                <span className="address-city">{currentUser.address.city}</span>
                <span className="address-country">{currentUser.address.country}</span>
              </span>
            </div>
            <div className="data-item">
              <span className="label">Telefon:</span>
              <span className="value phone">{currentUser.phone}</span>
            </div>
            <div className="data-item">
              <span className="label">E-Mail:</span>
              <span className="value">{currentUser.email}</span>
            </div>
            <div className="data-item">
              <span className="label">AHV-Nummer:</span>
              <span className="value">{currentUser.ahvNumber}</span>
            </div>
            <div className="data-item">
              <span className="label">Blutgruppe:</span>
              <span className="value blood-type">{currentUser.bloodType}</span>
            </div>
          </div>

          {currentUser.allergies.length > 0 && (
            <div className="allergies-section">
              <span className="label">⚠️ Allergien:</span>
              <div className="allergy-tags">
                {currentUser.allergies.map((allergy, index) => (
                  <span key={index} className="allergy-tag">{allergy}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Kritische Werte */}
        <div className="info-card critical-values">
          <h2>⚕️ Wichtige Gesundheitswerte</h2>
          {currentUser.criticalValues.map((value, index) => (
            <div key={index} className={`value-item ${value.status}`}>
              <div className="value-header">
                <span className="value-name">{value.name}</span>
                <span className="value-date">{value.date}</span>
              </div>
              <div className="value-data">
                <span className="value-result">{value.value}</span>
                <span className="value-reference">Referenz: {value.reference}</span>
              </div>
              {value.status === 'warning' && (
                <div className="value-warning">⚠️ Wert außerhalb des Normbereichs</div>
              )}
              {value.status === 'elevated' && (
                <div className="value-elevated">📈 Leicht erhöht</div>
              )}
            </div>
          ))}
        </div>

        {/* Krankenkasse & Versicherungen */}
        <div className="info-card insurance-info">
          <h2>🏥 Krankenkasse & Versicherungen</h2>
          <div className="insurance-main">
            <div className="data-item">
              <span className="label">Krankenkasse:</span>
              <span className="value primary">{currentUser.insuranceData.healthInsurance}</span>
            </div>
            <div className="data-item">
              <span className="label">Versicherungsnummer:</span>
              <span className="value">{currentUser.insuranceData.insuranceNumber}</span>
            </div>
            <div className="data-item">
              <span className="label">Versicherungsmodell:</span>
              <span className="value">{currentUser.insuranceData.insuranceType}</span>
            </div>
          </div>

          {currentUser.insuranceData.additionalInsurances.length > 0 && (
            <div className="additional-insurances">
              <span className="label">Zusatzversicherungen:</span>
              <ul>
                {currentUser.insuranceData.additionalInsurances.map((insurance, index) => (
                  <li key={index}>{insurance}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Hausarzt */}
        <div className="info-card doctor-info">
          <h2>👨‍⚕️ Hausarzt</h2>
          <div className="doctor-details">
            <div className="doctor-name">{currentUser.primaryDoctor.name}</div>
            <div className="doctor-specialty">{currentUser.primaryDoctor.specialty}</div>
            <div className="doctor-contact">
              <div className="data-item">
                <span className="label">📞 Telefon:</span>
                <span className="value">{currentUser.primaryDoctor.phone}</span>
              </div>
              <div className="data-item">
                <span className="label">📍 Adresse:</span>
                <span className="value">{currentUser.primaryDoctor.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notfallkontakt */}
        <div className="info-card emergency-contact">
          <h2>🚨 Notfallkontakt</h2>
          <div className="emergency-details">
            <div className="contact-name">{currentUser.emergencyContact.name}</div>
            <div className="contact-relationship">{currentUser.emergencyContact.relationship}</div>
            <div className="contact-phones">
              <div className="data-item">
                <span className="label">📱 Mobil:</span>
                <span className="value phone">{currentUser.emergencyContact.phone}</span>
              </div>
              <div className="data-item">
                <span className="label">☎️ Festnetz:</span>
                <span className="value phone">{currentUser.emergencyContact.alternativePhone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Aktuelle Medikamente */}
        <div className="info-card medications">
          <h2>💊 Aktuelle Medikation</h2>
          <div className="medications-list">
            {currentUser.currentMedications.map((med, index) => (
              <div key={index} className="medication-item">
                <div className="med-name">{med.name}</div>
                <div className="med-details">
                  <span className="med-dosage">{med.dosage}</span>
                  <span className="med-frequency">{med.frequency}</span>
                </div>
                <div className="med-indication">{med.indication}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Chronische Erkrankungen */}
        <div className="info-card chronic-conditions">
          <h2>📋 Diagnosen</h2>
          <ul className="conditions-list">
            {currentUser.chronicConditions.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ul>
        </div>

        {/* Anstehende Termine */}
        <div className="info-card appointments">
          <h2>📅 Anstehende Termine</h2>
          <div className="appointments-list">
            {currentUser.upcomingAppointments.map((appointment, index) => (
              <div key={index} className="appointment-item">
                <div className="appointment-type">{appointment.type}</div>
                <div className="appointment-details">
                  <span className="appointment-doctor">{appointment.doctor}</span>
                  <span className="appointment-datetime">
                    {appointment.date} um {appointment.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
