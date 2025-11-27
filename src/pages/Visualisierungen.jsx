import './Pages.css';
import './Visualisierungen.css';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';

function Visualisierungen() {
  // Simulierte Labordaten - später aus Dokumenten extrahiert
  const labDataTrends = {
    hba1c: [
      { date: 'Jan 24', value: 7.8, reference: 6.5 },
      { date: 'Mrz 24', value: 7.5, reference: 6.5 },
      { date: 'Mai 24', value: 7.3, reference: 6.5 },
      { date: 'Jul 24', value: 7.4, reference: 6.5 },
      { date: 'Sep 24', value: 7.2, reference: 6.5 },
      { date: 'Nov 24', value: 7.2, reference: 6.5 }
    ],
    cholesterol: [
      { date: 'Jan 24', ldl: 180, hdl: 45, reference: 116 },
      { date: 'Mrz 24', ldl: 175, hdl: 48, reference: 116 },
      { date: 'Mai 24', ldl: 170, hdl: 50, reference: 116 },
      { date: 'Jul 24', ldl: 168, hdl: 52, reference: 116 },
      { date: 'Sep 24', ldl: 165, hdl: 53, reference: 116 },
      { date: 'Nov 24', ldl: 165, hdl: 55, reference: 116 }
    ],
    bloodPressure: [
      { date: 'Jan 24', systolic: 152, diastolic: 95, refSys: 140, refDia: 90 },
      { date: 'Feb 24', systolic: 148, diastolic: 93, refSys: 140, refDia: 90 },
      { date: 'Mrz 24', systolic: 145, diastolic: 92, refSys: 140, refDia: 90 },
      { date: 'Apr 24', systolic: 143, diastolic: 90, refSys: 140, refDia: 90 },
      { date: 'Mai 24', systolic: 142, diastolic: 89, refSys: 140, refDia: 90 },
      { date: 'Jun 24', systolic: 140, diastolic: 88, refSys: 140, refDia: 90 },
      { date: 'Jul 24', systolic: 138, diastolic: 87, refSys: 140, refDia: 90 },
      { date: 'Aug 24', systolic: 141, diastolic: 89, refSys: 140, refDia: 90 },
      { date: 'Sep 24', systolic: 143, diastolic: 90, refSys: 140, refDia: 90 },
      { date: 'Okt 24', systolic: 144, diastolic: 91, refSys: 140, refDia: 90 },
      { date: 'Nov 24', systolic: 145, diastolic: 92, refSys: 140, refDia: 90 }
    ]
  };

  // Aktuelle Vitalwerte
  const currentVitals = [
    { name: 'HbA1c', value: 7.2, max: 10, reference: 6.5, unit: '%', status: 'warning' },
    { name: 'LDL', value: 165, max: 200, reference: 116, unit: 'mg/dl', status: 'warning' },
    { name: 'HDL', value: 55, max: 100, reference: 40, unit: 'mg/dl', status: 'good' },
    { name: 'Blutdruck Sys', value: 145, max: 180, reference: 140, unit: 'mmHg', status: 'elevated' },
    { name: 'Blutdruck Dia', value: 92, max: 120, reference: 90, unit: 'mmHg', status: 'elevated' },
  ];

  // Medikamenten Timeline
  const medicationTimeline = [
    {
      name: 'Metformin',
      periods: [
        { start: '2023-01', end: '2024-12', dosage: '850mg 2x täglich', active: true }
      ]
    },
    {
      name: 'Ramipril',
      periods: [
        { start: '2023-06', end: '2024-12', dosage: '5mg 1x täglich', active: true }
      ]
    },
    {
      name: 'Atorvastatin',
      periods: [
        { start: '2023-09', end: '2024-12', dosage: '20mg 1x abends', active: true }
      ]
    },
    {
      name: 'Ibuprofen',
      periods: [
        { start: '2023-02', end: '2023-04', dosage: '400mg bei Bedarf', active: false }
      ]
    }
  ];

  // Impfstatus
  const vaccinations = [
    { name: 'Grippe', lastDate: '2024-10-20', nextDue: '2025-10-20', status: 'aktuell', daysUntilDue: 328 },
    { name: 'COVID-19', lastDate: '2024-03-10', nextDue: '2025-03-10', status: 'aktuell', daysUntilDue: 103 },
    { name: 'Tetanus', lastDate: '2022-05-15', nextDue: '2032-05-15', status: 'aktuell', daysUntilDue: 2696 },
    { name: 'FSME', lastDate: '2021-08-10', nextDue: '2024-08-10', status: 'überfällig', daysUntilDue: -109 },
    { name: 'Pneumokokken', lastDate: null, nextDue: '2025-01-01', status: 'empfohlen', daysUntilDue: 35 }
  ];

  const getVitalColor = (status) => {
    switch(status) {
      case 'good': return '#27ae60';
      case 'elevated': return '#f39c12';
      case 'warning': return '#e67e22';
      default: return '#95a5a6';
    }
  };

  const getVaccinationColor = (status) => {
    switch(status) {
      case 'aktuell': return '#27ae60';
      case 'empfohlen': return '#3498db';
      case 'überfällig': return '#e74c3c';
      default: return '#95a5a6';
    }
  };

  return (
    <div className="page-container">
      <h1>Gesundheitsdaten Visualisierungen</h1>
      <p>Ihre Laborwerte, Vitalzeichen und Behandlungsverlauf im Überblick</p>

      <div className="viz-grid">

        {/* 1. Laborwerte-Trends: HbA1c */}
        <div className="viz-card full-width">
          <h2>📊 HbA1c Verlauf (Langzeitzucker)</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={labDataTrends.hba1c}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ecf0f1" />
                <XAxis dataKey="date" stroke="#7f8c8d" />
                <YAxis stroke="#7f8c8d" domain={[5, 9]} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd' }}
                  formatter={(value) => [`${value}%`, '']}
                />
                <Legend />
                <ReferenceLine y={6.5} stroke="#e74c3c" strokeDasharray="5 5" label="Zielwert" />
                <Line type="monotone" dataKey="value" stroke="#3498db" strokeWidth={3} name="HbA1c (%)" dot={{ fill: '#3498db', r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
            <div className="chart-info">
              Aktueller Wert: <strong>7.2%</strong> | Zielwert: <strong>&lt; 6.5%</strong> | Trend: <span className="trend-improving">↓ Verbesserung</span>
            </div>
          </div>
        </div>

        {/* Cholesterin Verlauf */}
        <div className="viz-card full-width">
          <h2>📊 Cholesterin Verlauf</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={labDataTrends.cholesterol}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ecf0f1" />
                <XAxis dataKey="date" stroke="#7f8c8d" />
                <YAxis stroke="#7f8c8d" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd' }}
                  formatter={(value) => [`${value} mg/dl`, '']}
                />
                <Legend />
                <ReferenceLine y={116} stroke="#e74c3c" strokeDasharray="5 5" label="LDL-Ziel" />
                <Line type="monotone" dataKey="ldl" stroke="#e74c3c" strokeWidth={2} name="LDL (mg/dl)" dot={{ fill: '#e74c3c', r: 4 }} />
                <Line type="monotone" dataKey="hdl" stroke="#27ae60" strokeWidth={2} name="HDL (mg/dl)" dot={{ fill: '#27ae60', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
            <div className="chart-info">
              LDL: <strong>165 mg/dl</strong> | HDL: <strong>55 mg/dl</strong> | LDL-Ziel: <strong>&lt; 116 mg/dl</strong>
            </div>
          </div>
        </div>

        {/* Blutdruck Verlauf */}
        <div className="viz-card full-width">
          <h2>📊 Blutdruck Verlauf</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={labDataTrends.bloodPressure}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ecf0f1" />
                <XAxis dataKey="date" stroke="#7f8c8d" />
                <YAxis stroke="#7f8c8d" domain={[80, 160]} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd' }}
                  formatter={(value) => [`${value} mmHg`, '']}
                />
                <Legend />
                <ReferenceLine y={140} stroke="#e74c3c" strokeDasharray="5 5" label="Sys-Ziel" />
                <ReferenceLine y={90} stroke="#f39c12" strokeDasharray="5 5" label="Dia-Ziel" />
                <Line type="monotone" dataKey="systolic" stroke="#e74c3c" strokeWidth={2} name="Systolisch" dot={{ fill: '#e74c3c', r: 3 }} />
                <Line type="monotone" dataKey="diastolic" stroke="#f39c12" strokeWidth={2} name="Diastolisch" dot={{ fill: '#f39c12', r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
            <div className="chart-info">
              Aktuell: <strong>145/92 mmHg</strong> | Zielwert: <strong>&lt; 140/90 mmHg</strong> | Trend: <span className="trend-stable">→ Stabil</span>
            </div>
          </div>
        </div>

        {/* 2. Vitalwerte Dashboard */}
        <div className="viz-card full-width">
          <h2>💓 Aktuelle Vitalwerte Dashboard</h2>

          <div className="dashboard-legend">
            <div className="legend-item">
              <span className="legend-color good"></span>
              <span>Im Normbereich</span>
            </div>
            <div className="legend-item">
              <span className="legend-color elevated"></span>
              <span>Leicht erhöht</span>
            </div>
            <div className="legend-item">
              <span className="legend-color warning"></span>
              <span>Erhöht - Achtung</span>
            </div>
          </div>

          <div className="vitals-dashboard">
            {currentVitals.map((vital, index) => {
              const percentage = Math.min(100, (vital.value / vital.max) * 100);

              return (
                <div key={index} className="vital-gauge">
                  <div className="vital-name">{vital.name}</div>
                  <div className="gauge-container">
                    <svg width="160" height="110" viewBox="0 0 160 110">
                      {/* Background arc */}
                      <path
                        d="M 20 85 A 60 60 0 0 1 140 85"
                        fill="none"
                        stroke="#ecf0f1"
                        strokeWidth="16"
                        strokeLinecap="round"
                      />
                      {/* Value arc - starts from left */}
                      <path
                        d={`M 20 85 A 60 60 0 ${percentage > 50 ? '0 1' : '0 0'} ${20 + (120 * percentage / 100)} ${85 - 60 * Math.sin(Math.acos(-1 + 2 * percentage / 100))}`}
                        fill="none"
                        stroke={getVitalColor(vital.status)}
                        strokeWidth="16"
                        strokeLinecap="round"
                      />
                      {/* Center point */}
                      <circle cx="80" cy="85" r="4" fill="#7f8c8d" />
                    </svg>
                    <div className="vital-value" style={{ color: getVitalColor(vital.status) }}>
                      {vital.value}
                    </div>
                    <div className="vital-unit">{vital.unit}</div>
                    <div className="vital-reference">Normwert: &lt; {vital.reference} {vital.unit}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Medikamenten Timeline */}
        <div className="viz-card full-width">
          <h2>💊 Medikamenten Timeline</h2>
          <div className="medication-timeline">
            <div className="timeline-header">
              <div className="timeline-label">Medikament</div>
              <div className="timeline-chart">
                <span>2023</span>
                <span>2024</span>
                <span>2025</span>
              </div>
            </div>
            {medicationTimeline.map((med, index) => (
              <div key={index} className="timeline-row">
                <div className="timeline-med-name">
                  <span className={`status-dot ${med.periods[0].active ? 'active' : 'inactive'}`}></span>
                  {med.name}
                </div>
                <div className="timeline-bars">
                  {med.periods.map((period, pIndex) => {
                    const startMonth = parseInt(period.start.split('-')[1]);
                    const startYear = parseInt(period.start.split('-')[0]);
                    const isActive = period.active;

                    return (
                      <div
                        key={pIndex}
                        className={`timeline-bar ${isActive ? 'active' : 'past'}`}
                        title={period.dosage}
                      >
                        <span className="dosage-label">{period.dosage}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Impfstatus */}
        <div className="viz-card full-width">
          <h2>💉 Impfstatus & Auffrischungen</h2>
          <div className="vaccination-status">
            {vaccinations.map((vac, index) => (
              <div key={index} className={`vaccination-item status-${vac.status}`}>
                <div className="vac-header">
                  <span className="vac-name">{vac.name}</span>
                  <span className={`vac-badge ${vac.status}`}>{vac.status}</span>
                </div>
                <div className="vac-details">
                  <div className="vac-dates">
                    <div>
                      <span className="label">Letzte Impfung:</span>
                      <span className="value">{vac.lastDate || 'Keine Angabe'}</span>
                    </div>
                    <div>
                      <span className="label">Nächste fällig:</span>
                      <span className="value">{vac.nextDue}</span>
                    </div>
                  </div>
                  <div className="vac-progress">
                    <div className="progress-bar">
                      <div
                        className={`progress-fill ${vac.status}`}
                        style={{
                          width: vac.status === 'überfällig' ? '100%' :
                                 vac.status === 'empfohlen' ? '90%' :
                                 Math.min(100, ((1095 - vac.daysUntilDue) / 1095) * 100) + '%'
                        }}
                      ></div>
                    </div>
                    <div className="days-info">
                      {vac.status === 'überfällig' ? (
                        <span className="overdue">⚠️ {Math.abs(vac.daysUntilDue)} Tage überfällig</span>
                      ) : vac.status === 'empfohlen' ? (
                        <span className="recommended">💡 Empfohlen in {vac.daysUntilDue} Tagen</span>
                      ) : (
                        <span className="upcoming">✓ Noch {vac.daysUntilDue} Tage gültig</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Visualisierungen;
