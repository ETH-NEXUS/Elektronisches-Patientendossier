import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { FaPlus, FaFolderOpen, FaCalendarAlt, FaUserMd, FaEllipsisV, FaEdit, FaTrash, FaFileAlt, FaHeartbeat } from 'react-icons/fa';
import './Faelle.css';

function Faelle() {
  const { currentUser } = useUser();
  const [showAddModal, setShowAddModal] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [viewCase, setViewCase] = useState(null);
  const [editCase, setEditCase] = useState(null);
  const [painDiaryCase, setPainDiaryCase] = useState(null);

  // Modal State für neuen Fall
  const [newCaseTitle, setNewCaseTitle] = useState('');
  const [newCaseCategory, setNewCaseCategory] = useState('');
  const [newCaseDoctor, setNewCaseDoctor] = useState('');
  const [selectedDocuments, setSelectedDocuments] = useState([]);

  // Schmerztagebuch State
  const [showAddPainEntry, setShowAddPainEntry] = useState(false);
  const [painDate, setPainDate] = useState('');
  const [painTime, setPainTime] = useState('');
  const [painLevel, setPainLevel] = useState(5);
  const [painLocation, setPainLocation] = useState('');
  const [painNotes, setPainNotes] = useState('');

  const categories = [
    'Orthopädie',
    'Kardiologie',
    'Gynäkologie',
    'Allgemeinmedizin',
    'Dermatologie',
    'Neurologie',
    'Diabetologie',
    'Geriatrie',
    'Vorsorge',
    'Sonstiges'
  ];

  const handleAddCase = () => {
    setShowAddModal(true);
    setNewCaseTitle('');
    setNewCaseCategory('');
    setNewCaseDoctor(currentUser.primaryDoctor.name);
    setSelectedDocuments([]);
  };

  const handleSaveCase = () => {
    // Hier würde die Logik zum Speichern des Falls kommen
    console.log('Neuer Fall:', {
      title: newCaseTitle,
      category: newCaseCategory,
      doctor: newCaseDoctor,
      documents: selectedDocuments,
      status: 'laufend',
      startDate: new Date().toISOString().split('T')[0]
    });
    setShowAddModal(false);
  };

  const toggleMenu = (caseId) => {
    setOpenMenuId(openMenuId === caseId ? null : caseId);
  };

  const handleView = (caseItem) => {
    setViewCase(caseItem);
    setOpenMenuId(null);
  };

  const handleEdit = (caseItem) => {
    setEditCase(caseItem);
    setOpenMenuId(null);
  };

  const handleDelete = (caseId) => {
    if (window.confirm('Fall wirklich löschen?')) {
      console.log('Lösche Fall:', caseId);
      setOpenMenuId(null);
    }
  };

  const handleOpenPainDiary = (caseItem) => {
    setPainDiaryCase(caseItem);
    setOpenMenuId(null);
  };

  const handleAddPainEntry = () => {
    setShowAddPainEntry(true);
    const today = new Date();
    setPainDate(today.toISOString().split('T')[0]);
    setPainTime(today.toTimeString().slice(0, 5));
    setPainLevel(5);
    setPainLocation(painDiaryCase?.title || '');
    setPainNotes('');
  };

  const handleSavePainEntry = () => {
    console.log('Neuer Schmerz-Eintrag:', {
      caseId: painDiaryCase.id,
      date: painDate,
      time: painTime,
      painLevel,
      location: painLocation,
      notes: painNotes
    });
    setShowAddPainEntry(false);
  };

  const getPainLevelColor = (level) => {
    if (level <= 2) return '#27ae60';
    if (level <= 4) return '#f39c12';
    if (level <= 6) return '#e67e22';
    return '#e74c3c';
  };

  const getPainLevelLabel = (level) => {
    if (level <= 2) return 'Leicht';
    if (level <= 4) return 'Mäßig';
    if (level <= 6) return 'Stark';
    return 'Sehr stark';
  };

  const toggleDocumentSelection = (docId) => {
    if (selectedDocuments.includes(docId)) {
      setSelectedDocuments(selectedDocuments.filter(id => id !== docId));
    } else {
      setSelectedDocuments([...selectedDocuments, docId]);
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'laufend': return '#3498db';
      case 'abgeschlossen': return '#27ae60';
      case 'pausiert': return '#f39c12';
      default: return '#95a5a6';
    }
  };

  const getStatusLabel = (status) => {
    switch(status) {
      case 'laufend': return 'Laufend';
      case 'abgeschlossen': return 'Abgeschlossen';
      case 'pausiert': return 'Pausiert';
      default: return status;
    }
  };

  // Fälle des aktuellen Users
  const cases = currentUser.cases || [];

  // Statistiken berechnen
  const stats = {
    total: cases.length,
    laufend: cases.filter(c => c.status === 'laufend').length,
    abgeschlossen: cases.filter(c => c.status === 'abgeschlossen').length,
    pausiert: cases.filter(c => c.status === 'pausiert').length,
  };

  return (
    <div className="faelle-container">
      <div className="faelle-header">
        <div>
          <h1>Fälle</h1>
          <p className="faelle-subtitle">Ihre medizinischen Fälle und Behandlungsverläufe</p>
        </div>
        <button className="add-fall-btn" onClick={handleAddCase}>
          <FaPlus /> Fall erstellen
        </button>
      </div>

      {/* Summary Section */}
      {cases.length > 0 && (
        <div className="faelle-summary">
          <div className="summary-card">
            <div className="summary-icon total">
              <FaFolderOpen />
            </div>
            <div className="summary-content">
              <div className="summary-value">{stats.total}</div>
              <div className="summary-label">Gesamt</div>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon laufend">
              <FaCalendarAlt />
            </div>
            <div className="summary-content">
              <div className="summary-value">{stats.laufend}</div>
              <div className="summary-label">Laufend</div>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon abgeschlossen">
              <FaCalendarAlt />
            </div>
            <div className="summary-content">
              <div className="summary-value">{stats.abgeschlossen}</div>
              <div className="summary-label">Abgeschlossen</div>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon pausiert">
              <FaCalendarAlt />
            </div>
            <div className="summary-content">
              <div className="summary-value">{stats.pausiert}</div>
              <div className="summary-label">Pausiert</div>
            </div>
          </div>
        </div>
      )}

      {/* Fälle Grid */}
      <div className="cases-grid">
        {cases.map((caseItem) => (
          <div key={caseItem.id} className="case-card">
            <div className="case-header">
              <div className="case-icon">
                <FaFolderOpen />
              </div>
              <div className="case-menu-container">
                <button
                  className="case-menu-btn"
                  onClick={() => toggleMenu(caseItem.id)}
                >
                  <FaEllipsisV />
                </button>
                {openMenuId === caseItem.id && (
                  <div className="case-menu-dropdown">
                    <button onClick={() => handleView(caseItem)}>
                      <FaFileAlt /> Details
                    </button>
                    {caseItem.painDiary && (
                      <button onClick={() => handleOpenPainDiary(caseItem)}>
                        <FaHeartbeat /> Schmerztagebuch
                      </button>
                    )}
                    <button onClick={() => handleEdit(caseItem)}>
                      <FaEdit /> Bearbeiten
                    </button>
                    <button onClick={() => handleDelete(caseItem.id)} className="delete-btn">
                      <FaTrash /> Löschen
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="case-content">
              <h3 className="case-title">{caseItem.title}</h3>

              <div className="case-meta">
                <div className="case-meta-item">
                  <FaCalendarAlt />
                  <span>Start: {caseItem.startDate}</span>
                </div>
                {caseItem.endDate && (
                  <div className="case-meta-item">
                    <FaCalendarAlt />
                    <span>Ende: {caseItem.endDate}</span>
                  </div>
                )}
                <div className="case-meta-item">
                  <FaUserMd />
                  <span>{caseItem.doctor}</span>
                </div>
              </div>

              <div className="case-footer">
                <span className="case-category">{caseItem.category}</span>
                <span
                  className="case-status"
                  style={{
                    backgroundColor: `${getStatusColor(caseItem.status)}20`,
                    color: getStatusColor(caseItem.status),
                    borderLeft: `3px solid ${getStatusColor(caseItem.status)}`
                  }}
                >
                  {getStatusLabel(caseItem.status)}
                </span>
              </div>
            </div>
          </div>
        ))}

        {cases.length === 0 && (
          <div className="no-cases">
            <FaFolderOpen className="no-cases-icon" />
            <p>Noch keine Fälle erstellt</p>
            <button className="add-fall-btn" onClick={handleAddCase}>
              <FaPlus /> Ersten Fall erstellen
            </button>
          </div>
        )}
      </div>

      {/* Add Case Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Neuen Fall erstellen</h2>
              <button className="modal-close-btn" onClick={() => setShowAddModal(false)}>×</button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label>Fall-Titel *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="z.B. Meniskusverletzung links"
                  value={newCaseTitle}
                  onChange={(e) => setNewCaseTitle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Kategorie *</label>
                <select
                  className="form-select"
                  value={newCaseCategory}
                  onChange={(e) => setNewCaseCategory(e.target.value)}
                >
                  <option value="">Bitte wählen...</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Behandelnder Arzt</label>
                <input
                  type="text"
                  className="form-input"
                  value={newCaseDoctor}
                  onChange={(e) => setNewCaseDoctor(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Dokumente zuordnen (optional)</label>
                <div className="documents-selection">
                  {currentUser.documents && currentUser.documents.length > 0 ? (
                    currentUser.documents.slice(0, 10).map(doc => (
                      <div key={doc.id} className="document-checkbox-item">
                        <input
                          type="checkbox"
                          id={`doc-${doc.id}`}
                          checked={selectedDocuments.includes(doc.id)}
                          onChange={() => toggleDocumentSelection(doc.id)}
                        />
                        <label htmlFor={`doc-${doc.id}`}>
                          <span className="doc-title">{doc.title}</span>
                          <span className="doc-date">{doc.date}</span>
                        </label>
                      </div>
                    ))
                  ) : (
                    <p className="no-documents-hint">Keine Dokumente verfügbar</p>
                  )}
                </div>
                {currentUser.documents && currentUser.documents.length > 10 && (
                  <p className="form-hint">Zeige erste 10 Dokumente. Weitere können später hinzugefügt werden.</p>
                )}
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-cancel" onClick={() => setShowAddModal(false)}>
                Abbrechen
              </button>
              <button
                className="btn-submit"
                onClick={handleSaveCase}
                disabled={!newCaseTitle || !newCaseCategory}
              >
                Fall erstellen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Case Modal */}
      {viewCase && (
        <div className="modal-overlay" onClick={() => setViewCase(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Fall-Details</h2>
              <button className="modal-close-btn" onClick={() => setViewCase(null)}>×</button>
            </div>

            <div className="modal-body">
              <div className="view-document-details">
                <div className="view-item">
                  <span className="view-label">Titel</span>
                  <span className="view-value">{viewCase.title}</span>
                </div>
                <div className="view-item">
                  <span className="view-label">Kategorie</span>
                  <span className="view-value">{viewCase.category}</span>
                </div>
                <div className="view-item">
                  <span className="view-label">Status</span>
                  <span className="view-value">{getStatusLabel(viewCase.status)}</span>
                </div>
                <div className="view-item">
                  <span className="view-label">Behandelnder Arzt</span>
                  <span className="view-value">{viewCase.doctor}</span>
                </div>
                <div className="view-item">
                  <span className="view-label">Start-Datum</span>
                  <span className="view-value">{viewCase.startDate}</span>
                </div>
                {viewCase.endDate && (
                  <div className="view-item">
                    <span className="view-label">End-Datum</span>
                    <span className="view-value">{viewCase.endDate}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-cancel" onClick={() => setViewCase(null)}>
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pain Diary Modal */}
      {painDiaryCase && (
        <div className="modal-overlay" onClick={() => setPainDiaryCase(null)}>
          <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>
                <FaHeartbeat /> Schmerztagebuch: {painDiaryCase.title}
              </h2>
              <button className="modal-close-btn" onClick={() => setPainDiaryCase(null)}>×</button>
            </div>

            <div className="modal-body">
              {!showAddPainEntry ? (
                <>
                  <div className="pain-diary-header">
                    <p className="pain-diary-subtitle">
                      Dokumentieren Sie Ihre Schmerzen, um den Verlauf zu verfolgen und Ihrem Arzt detaillierte Informationen zu geben.
                    </p>
                    <button className="btn-add-pain" onClick={handleAddPainEntry}>
                      <FaPlus /> Eintrag hinzufügen
                    </button>
                  </div>

                  <div className="pain-entries">
                    {painDiaryCase.painDiary && painDiaryCase.painDiary.length > 0 ? (
                      painDiaryCase.painDiary.map((entry, index) => (
                        <div key={index} className="pain-entry">
                          <div className="pain-entry-header">
                            <div className="pain-entry-date">
                              <FaCalendarAlt />
                              <span>{entry.date} um {entry.time}</span>
                            </div>
                            <div
                              className="pain-level-badge"
                              style={{
                                backgroundColor: `${getPainLevelColor(entry.painLevel)}20`,
                                color: getPainLevelColor(entry.painLevel),
                                borderLeft: `4px solid ${getPainLevelColor(entry.painLevel)}`
                              }}
                            >
                              <span className="pain-level-number">{entry.painLevel}/10</span>
                              <span className="pain-level-label">{getPainLevelLabel(entry.painLevel)}</span>
                            </div>
                          </div>
                          <div className="pain-entry-body">
                            <div className="pain-location">
                              <strong>Stelle:</strong> {entry.location}
                            </div>
                            {entry.notes && (
                              <div className="pain-notes">
                                <strong>Notizen:</strong> {entry.notes}
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="no-pain-entries">
                        <FaHeartbeat className="no-pain-icon" />
                        <p>Noch keine Schmerzeinträge vorhanden</p>
                        <button className="btn-submit" onClick={handleAddPainEntry}>
                          <FaPlus /> Ersten Eintrag erstellen
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="add-pain-entry-form">
                  <h3>Neuer Schmerz-Eintrag</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Datum *</label>
                      <input
                        type="date"
                        className="form-input"
                        value={painDate}
                        onChange={(e) => setPainDate(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Uhrzeit *</label>
                      <input
                        type="time"
                        className="form-input"
                        value={painTime}
                        onChange={(e) => setPainTime(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Schmerzstärke: {painLevel}/10 ({getPainLevelLabel(painLevel)})</label>
                    <div className="pain-level-slider">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        value={painLevel}
                        onChange={(e) => setPainLevel(Number(e.target.value))}
                        className="slider"
                        style={{
                          background: `linear-gradient(to right, ${getPainLevelColor(painLevel)} 0%, ${getPainLevelColor(painLevel)} ${painLevel * 10}%, #e0e0e0 ${painLevel * 10}%, #e0e0e0 100%)`
                        }}
                      />
                      <div className="pain-level-labels">
                        <span>0 - Kein Schmerz</span>
                        <span>10 - Unerträglich</span>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Stelle *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="z.B. Knie links, Unterer Rücken"
                      value={painLocation}
                      onChange={(e) => setPainLocation(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Notizen (optional)</label>
                    <textarea
                      className="form-textarea"
                      rows="4"
                      placeholder="Beschreiben Sie den Schmerz, Auslöser, begleitende Symptome..."
                      value={painNotes}
                      onChange={(e) => setPainNotes(e.target.value)}
                    />
                  </div>

                  <div className="form-actions">
                    <button className="btn-cancel" onClick={() => setShowAddPainEntry(false)}>
                      Abbrechen
                    </button>
                    <button
                      className="btn-submit"
                      onClick={handleSavePainEntry}
                      disabled={!painDate || !painTime || !painLocation}
                    >
                      Eintrag speichern
                    </button>
                  </div>
                </div>
              )}
            </div>

            {!showAddPainEntry && (
              <div className="modal-footer">
                <button className="btn-cancel" onClick={() => setPainDiaryCase(null)}>
                  Schließen
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Faelle;
