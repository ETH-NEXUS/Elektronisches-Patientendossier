import './Pages.css';
import './Home.css';

function Home() {
  // Simulierte Patientendaten - später aus KK-Dokumenten extrahiert
  const patientData = {
    name: "Max Muster",
    address: {
      street: "Musterstrasse 123",
      city: "8001 Zürich",
      country: "Schweiz"
    },
    email: "max.muster@example.ch",
    phone: "+41 79 123 45 67",
    ahvNumber: "756.1234.5678.97",
    bloodType: "A+",
    birthDate: "15.06.1978",
    gender: "Männlich",

    insuranceData: {
      healthInsurance: "CSS Versicherung",
      insuranceNumber: "80012345678",
      insuranceType: "Grundversicherung + Halbprivat",
      additionalInsurances: ["Zahnversicherung", "Auslandversicherung"]
    },

    primaryDoctor: {
      name: "Dr. med. Sarah Fischer",
      specialty: "Allgemeine Innere Medizin FMH",
      phone: "+41 44 123 45 67",
      address: "Bahnhofstrasse 12, 8001 Zürich"
    },

    emergencyContact: {
      name: "Anna Muster",
      relationship: "Ehefrau",
      phone: "+41 79 123 45 67",
      alternativePhone: "+41 44 987 65 43"
    },

    criticalValues: [
      { name: "HbA1c (Langzeitzucker)", value: "7.2%", status: "warning", reference: "< 6.5%", date: "15.11.2024" },
      { name: "LDL-Cholesterin", value: "165 mg/dl", status: "warning", reference: "< 116 mg/dl", date: "15.11.2024" },
      { name: "Blutdruck", value: "145/92 mmHg", status: "elevated", reference: "< 140/90 mmHg", date: "20.11.2024" }
    ],

    currentMedications: [
      { name: "Metformin", dosage: "850mg", frequency: "2x täglich", indication: "Diabetes Typ 2" },
      { name: "Ramipril", dosage: "5mg", frequency: "1x täglich", indication: "Bluthochdruck" },
      { name: "Atorvastatin", dosage: "20mg", frequency: "1x abends", indication: "Cholesterinsenker" }
    ],

    upcomingAppointments: [
      { type: "Vorsorgeuntersuchung", doctor: "Dr. Fischer", date: "15.01.2025", time: "10:30" },
      { type: "Diabetes-Kontrolle", doctor: "Dr. Fischer", date: "22.01.2025", time: "14:00" }
    ],

    allergies: ["Penicillin", "Nüsse"],
    chronicConditions: ["Diabetes mellitus Typ 2", "Arterielle Hypertonie", "Hypercholesterinämie"]
  };

  return (
    <div className="page-container">
      <div className="home-header">
        <h1>Gesundheitsübersicht</h1>
        <p>Willkommen, {patientData.name}</p>
      </div>

      <div className="home-grid">
        {/* Persönliche Stammdaten */}
        <div className="info-card personal-data">
          <h2>Persönliche Daten</h2>
          <div className="data-grid">
            <div className="data-item">
              <span className="label">Name:</span>
              <span className="value">{patientData.name}</span>
            </div>
            <div className="data-item">
              <span className="label">Geburtsdatum:</span>
              <span className="value">{patientData.birthDate}</span>
            </div>
            <div className="data-item">
              <span className="label">Geschlecht:</span>
              <span className="value">{patientData.gender}</span>
            </div>
            <div className="data-item address-item">
              <span className="label">Adresse:</span>
              <span className="value address">
                <span className="address-street">{patientData.address.street}</span>
                <span className="address-city">{patientData.address.city}</span>
                <span className="address-country">{patientData.address.country}</span>
              </span>
            </div>
            <div className="data-item">
              <span className="label">Telefon:</span>
              <span className="value phone">{patientData.phone}</span>
            </div>
            <div className="data-item">
              <span className="label">E-Mail:</span>
              <span className="value">{patientData.email}</span>
            </div>
            <div className="data-item">
              <span className="label">AHV-Nummer:</span>
              <span className="value">{patientData.ahvNumber}</span>
            </div>
            <div className="data-item">
              <span className="label">Blutgruppe:</span>
              <span className="value blood-type">{patientData.bloodType}</span>
            </div>
          </div>

          {patientData.allergies.length > 0 && (
            <div className="allergies-section">
              <span className="label">⚠️ Allergien:</span>
              <div className="allergy-tags">
                {patientData.allergies.map((allergy, index) => (
                  <span key={index} className="allergy-tag">{allergy}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Kritische Werte */}
        <div className="info-card critical-values">
          <h2>⚕️ Wichtige Gesundheitswerte</h2>
          {patientData.criticalValues.map((value, index) => (
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
              <span className="value primary">{patientData.insuranceData.healthInsurance}</span>
            </div>
            <div className="data-item">
              <span className="label">Versicherungsnummer:</span>
              <span className="value">{patientData.insuranceData.insuranceNumber}</span>
            </div>
            <div className="data-item">
              <span className="label">Versicherungsmodell:</span>
              <span className="value">{patientData.insuranceData.insuranceType}</span>
            </div>
          </div>

          {patientData.insuranceData.additionalInsurances.length > 0 && (
            <div className="additional-insurances">
              <span className="label">Zusatzversicherungen:</span>
              <ul>
                {patientData.insuranceData.additionalInsurances.map((insurance, index) => (
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
            <div className="doctor-name">{patientData.primaryDoctor.name}</div>
            <div className="doctor-specialty">{patientData.primaryDoctor.specialty}</div>
            <div className="doctor-contact">
              <div className="data-item">
                <span className="label">📞 Telefon:</span>
                <span className="value">{patientData.primaryDoctor.phone}</span>
              </div>
              <div className="data-item">
                <span className="label">📍 Adresse:</span>
                <span className="value">{patientData.primaryDoctor.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notfallkontakt */}
        <div className="info-card emergency-contact">
          <h2>🚨 Notfallkontakt</h2>
          <div className="emergency-details">
            <div className="contact-name">{patientData.emergencyContact.name}</div>
            <div className="contact-relationship">{patientData.emergencyContact.relationship}</div>
            <div className="contact-phones">
              <div className="data-item">
                <span className="label">📱 Mobil:</span>
                <span className="value phone">{patientData.emergencyContact.phone}</span>
              </div>
              <div className="data-item">
                <span className="label">☎️ Festnetz:</span>
                <span className="value phone">{patientData.emergencyContact.alternativePhone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Aktuelle Medikamente */}
        <div className="info-card medications">
          <h2>💊 Aktuelle Medikation</h2>
          <div className="medications-list">
            {patientData.currentMedications.map((med, index) => (
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
            {patientData.chronicConditions.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ul>
        </div>

        {/* Anstehende Termine */}
        <div className="info-card appointments">
          <h2>📅 Anstehende Termine</h2>
          <div className="appointments-list">
            {patientData.upcomingAppointments.map((appointment, index) => (
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
