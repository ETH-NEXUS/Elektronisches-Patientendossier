import './Pages.css';
import './Visualisierungen.css';
import { useUser } from '../context/UserContext';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';

function Visualisierungen() {
  const { currentUser } = useUser();

  // User-spezifische Daten
  const labDataTrends = currentUser.healthData?.labTrends || {};
  const currentVitals = currentUser.healthData?.currentVitals || [];
  const medicationTimeline = currentUser.healthData?.medicationTimeline || [];
  const vaccinations = currentUser.healthData?.vaccinations || [];

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
        {labDataTrends.hba1c && labDataTrends.hba1c.length > 0 && (
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
              Aktueller Wert: <strong>{labDataTrends.hba1c[labDataTrends.hba1c.length-1]?.value}%</strong> | Zielwert: <strong>&lt; {labDataTrends.hba1c[0]?.reference}%</strong>
            </div>
          </div>
        </div>
        )}

        {/* Cholesterin Verlauf */}
        {labDataTrends.cholesterol && labDataTrends.cholesterol.length > 0 && (
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
              LDL: <strong>{labDataTrends.cholesterol[labDataTrends.cholesterol.length-1]?.ldl} mg/dl</strong> | HDL: <strong>{labDataTrends.cholesterol[labDataTrends.cholesterol.length-1]?.hdl} mg/dl</strong> | LDL-Ziel: <strong>&lt; {labDataTrends.cholesterol[0]?.reference} mg/dl</strong>
            </div>
          </div>
        </div>
        )}

        {/* Blutdruck Verlauf */}
        {labDataTrends.bloodPressure && labDataTrends.bloodPressure.length > 0 && (
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
              Aktuell: <strong>{labDataTrends.bloodPressure[labDataTrends.bloodPressure.length-1]?.systolic}/{labDataTrends.bloodPressure[labDataTrends.bloodPressure.length-1]?.diastolic} mmHg</strong> | Zielwert: <strong>&lt; {labDataTrends.bloodPressure[0]?.refSys}/{labDataTrends.bloodPressure[0]?.refDia} mmHg</strong>
            </div>
          </div>
        </div>
        )}

        {/* 2. Vitalwerte Dashboard */}
        {currentVitals.length > 0 && (
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
        )}

        {/* 3. Medikamenten Timeline */}
        {medicationTimeline.length > 0 && (
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
                    const [startYear, startMonth] = period.start.split('-').map(Number);
                    const [endYear, endMonth] = period.end.split('-').map(Number);

                    // Timeline von 2008 bis 2026 (18 Jahre)
                    const timelineStart = 2008;
                    const timelineEnd = 2026;
                    const totalMonths = (timelineEnd - timelineStart) * 12;

                    // Berechne Start- und End-Position in Monaten ab 2008
                    const startMonthsFromBegin = (startYear - timelineStart) * 12 + startMonth;
                    const endMonthsFromBegin = (endYear - timelineStart) * 12 + endMonth;
                    const duration = endMonthsFromBegin - startMonthsFromBegin;

                    // Konvertiere zu Prozent
                    const leftPercent = (startMonthsFromBegin / totalMonths) * 100;
                    const widthPercent = (duration / totalMonths) * 100;

                    const isActive = period.active;

                    return (
                      <div
                        key={pIndex}
                        className={`timeline-bar ${isActive ? 'active' : 'past'}`}
                        style={{
                          left: `${leftPercent}%`,
                          width: `${widthPercent}%`
                        }}
                        title={`${period.dosage} (${period.start} - ${period.end})`}
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
        )}

        {/* 4. Impfstatus */}
        {vaccinations.length > 0 && (
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
        )}

      </div>
    </div>
  );
}

export default Visualisierungen;
