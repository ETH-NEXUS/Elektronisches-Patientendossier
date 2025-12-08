import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { FaFileAlt, FaSyringe, FaXRay, FaFileMedical, FaPills, FaHeartbeat, FaTint, FaStethoscope, FaTimes, FaEllipsisV, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { sampleDocuments, detectDocumentCategory, getDefaultDate } from '../data/sampleDocuments';
import './Dokumente.css';

const getThumbnailIcon = (thumbnail) => {
  const icons = {
    lab: <FaTint />,
    vaccine: <FaSyringe />,
    mri: <FaXRay />,
    report: <FaFileMedical />,
    medication: <FaPills />,
    heart: <FaHeartbeat />,
    bp: <FaHeartbeat />,
    checkup: <FaStethoscope />
  };
  return icons[thumbnail] || <FaFileAlt />;
};

const getThumbnailColor = (category) => {
  const colors = {
    'Labor': '#4285f4',
    'Impfungen': '#34a853',
    'Bildgebung': '#fbbc04',
    'Diagnosen': '#ea4335',
    'Medikamente': '#ff6600',
    'Vorsorge': '#9c27b0'
  };
  return colors[category] || '#666';
};

const categoryMapping = {
  'impfungen': 'Impfungen',
  'medikamente': 'Medikamente',
  'labor': 'Labor',
  'bildgebung': 'Bildgebung',
  'diagnosen': 'Diagnosen',
  'vorsorge': 'Vorsorge'
};

function Dokumente() {
  const { currentUser, addDocument, updateDocument, deleteDocument } = useUser();
  const [searchParams] = useSearchParams();
  const kategorie = searchParams.get('kategorie');

  // Modal State (Hinzufügen)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  const [selectedSampleDoc, setSelectedSampleDoc] = useState('');
  const [autoDate, setAutoDate] = useState('');
  const [autoCategory, setAutoCategory] = useState('');

  // 3-Punkte-Menü State
  const [openMenuId, setOpenMenuId] = useState(null);

  // Anschauen Modal State
  const [viewDocument, setViewDocument] = useState(null);

  // Bearbeiten Modal State
  const [editDocument, setEditDocument] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editCategory, setEditCategory] = useState('');

  const filteredDocuments = useMemo(() => {
    const userDocuments = currentUser.documents || [];

    if (!kategorie) {
      return userDocuments;
    }

    const categoryName = categoryMapping[kategorie];
    if (!categoryName) {
      return userDocuments;
    }

    return userDocuments.filter(doc => doc.category === categoryName);
  }, [kategorie, currentUser]);

  const getTitle = () => {
    if (!kategorie) return 'Dokumente';
    const categoryName = categoryMapping[kategorie];
    return categoryName ? `Dokumente - ${categoryName}` : 'Dokumente';
  };

  // Modal Funktionen
  const openModal = () => {
    setIsModalOpen(true);
    setCustomTitle('');
    setSelectedSampleDoc('');
    setAutoDate(getDefaultDate());
    setAutoCategory('Vorsorge');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCustomTitle('');
    setSelectedSampleDoc('');
    setAutoDate('');
    setAutoCategory('');
  };

  const handleSampleDocChange = (docIndex) => {
    setSelectedSampleDoc(docIndex);

    if (docIndex === '') {
      setAutoDate(getDefaultDate());
      setAutoCategory('Vorsorge');
      return;
    }

    const userSampleDocs = sampleDocuments[currentUser.id] || [];
    const selectedDoc = userSampleDocs[parseInt(docIndex)];

    if (selectedDoc) {
      // Automatisches Ausfüllen basierend auf dem ausgewählten Probe-Dokument
      setAutoDate(selectedDoc.date);
      setAutoCategory(selectedDoc.category);

      // Titel vorschlagen, wenn noch leer
      if (!customTitle) {
        setCustomTitle(selectedDoc.title);
      }
    }
  };

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setCustomTitle(newTitle);

    // Automatische Kategorie-Erkennung basierend auf Titel
    if (newTitle.length > 3) {
      const detectedCategory = detectDocumentCategory(newTitle);
      setAutoCategory(detectedCategory);
    }
  };

  const handleAddDocument = () => {
    if (!customTitle.trim()) {
      alert('Bitte geben Sie einen Titel ein.');
      return;
    }

    if (selectedSampleDoc === '') {
      alert('Bitte wählen Sie ein Probe-Dokument aus.');
      return;
    }

    const userSampleDocs = sampleDocuments[currentUser.id] || [];
    const selectedDoc = userSampleDocs[parseInt(selectedSampleDoc)];

    if (!selectedDoc) {
      alert('Fehler beim Laden des Probe-Dokuments.');
      return;
    }

    // Neues Dokument erstellen
    const newDocument = {
      id: `new-${Date.now()}`,
      title: customTitle,
      category: autoCategory,
      date: autoDate,
      type: selectedDoc.type,
      status: 'aktuell',
      thumbnail: selectedDoc.thumbnail,
      tags: selectedDoc.tags
    };

    // Dokument zum User hinzufügen (über Context)
    addDocument(newDocument);

    closeModal();
  };

  // 3-Punkte-Menü Funktionen
  const toggleMenu = (docId) => {
    setOpenMenuId(openMenuId === docId ? null : docId);
  };

  const handleView = (doc) => {
    setViewDocument(doc);
    setOpenMenuId(null);
  };

  const handleEdit = (doc) => {
    setEditDocument(doc);
    setEditTitle(doc.title);
    setEditCategory(doc.category);
    setOpenMenuId(null);
  };

  const handleDelete = (docId) => {
    if (window.confirm('Möchten Sie dieses Dokument wirklich löschen?')) {
      deleteDocument(docId);
      setOpenMenuId(null);
    }
  };

  const saveEdit = () => {
    if (!editTitle.trim()) {
      alert('Bitte geben Sie einen Titel ein.');
      return;
    }

    updateDocument(editDocument.id, {
      title: editTitle,
      category: editCategory
    });

    setEditDocument(null);
    setEditTitle('');
    setEditCategory('');
  };

  return (
    <div className="dokumente-container">
      <div className="dokumente-header">
        <div>
          <h1>{getTitle()}</h1>
          <p className="dokumente-subtitle">
            {!kategorie
              ? 'Alle Ihre medizinischen Dokumente an einem Ort'
              : `${filteredDocuments.length} Dokument${filteredDocuments.length !== 1 ? 'e' : ''} gefunden`
            }
          </p>
        </div>
        <button className="add-document-btn" onClick={openModal}>+ Dokument hinzufügen</button>
      </div>

      {/* Modal für Dokument hinzufügen */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Neues Dokument hinzufügen</h2>
              <button className="modal-close-btn" onClick={closeModal}>
                <FaTimes />
              </button>
            </div>

            <div className="modal-body">
              {/* Titel Eingabe */}
              <div className="form-group">
                <label htmlFor="doc-title">Titel *</label>
                <input
                  type="text"
                  id="doc-title"
                  value={customTitle}
                  onChange={handleTitleChange}
                  placeholder="z.B. Blutbild vom 07.12.2024"
                  className="form-input"
                />
              </div>

              {/* Probe-Dokument Auswahl */}
              <div className="form-group">
                <label htmlFor="sample-doc">Dokument auswählen *</label>
                <select
                  id="sample-doc"
                  value={selectedSampleDoc}
                  onChange={(e) => handleSampleDocChange(e.target.value)}
                  className="form-select"
                >
                  <option value="">-- Bitte wählen --</option>
                  {(sampleDocuments[currentUser.id] || []).map((doc, index) => (
                    <option key={index} value={index}>
                      {doc.title} ({doc.category})
                    </option>
                  ))}
                </select>
                {selectedSampleDoc !== '' && (
                  <p className="form-hint">
                    📄 {sampleDocuments[currentUser.id][parseInt(selectedSampleDoc)].description}
                  </p>
                )}
              </div>

              {/* Auto-Fill Felder (nur anzeigen) */}
              <div className="auto-fill-section">
                <h3>Automatisch erkannt:</h3>
                <div className="auto-fill-fields">
                  <div className="auto-fill-item">
                    <span className="auto-fill-label">Datum:</span>
                    <span className="auto-fill-value">{autoDate ? new Date(autoDate).toLocaleDateString('de-DE') : '-'}</span>
                  </div>
                  <div className="auto-fill-item">
                    <span className="auto-fill-label">Kategorie:</span>
                    <span className="auto-fill-value">{autoCategory || '-'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-cancel" onClick={closeModal}>Abbrechen</button>
              <button className="btn-submit" onClick={handleAddDocument}>Dokument hinzufügen</button>
            </div>
          </div>
        </div>
      )}

      {filteredDocuments.length === 0 ? (
        <div className="no-documents">
          <p>Keine Dokumente in dieser Kategorie gefunden.</p>
        </div>
      ) : (
        <div className="documents-simple-grid">
          {filteredDocuments.map(doc => (
            <div key={doc.id} className={`document-simple-card ${openMenuId === doc.id ? 'menu-open' : ''}`}>
              <div
                className="document-simple-thumbnail"
                style={{ backgroundColor: getThumbnailColor(doc.category) }}
              >
                {getThumbnailIcon(doc.thumbnail)}
              </div>
              <div className="document-simple-info">
                <h3>{doc.title}</h3>
                <p className="document-simple-category">{doc.category}</p>
                {doc.date && <p className="document-simple-date">{new Date(doc.date).toLocaleDateString('de-DE')}</p>}
              </div>

              {/* 3-Punkte-Menü */}
              <div className="document-menu-container">
                <button
                  className="document-menu-btn"
                  onClick={() => toggleMenu(doc.id)}
                >
                  <FaEllipsisV />
                </button>

                {openMenuId === doc.id && (
                  <div className="document-menu-dropdown">
                    <button onClick={() => handleView(doc)}>
                      <FaEye /> Anschauen
                    </button>
                    <button onClick={() => handleEdit(doc)}>
                      <FaEdit /> Bearbeiten
                    </button>
                    <button onClick={() => handleDelete(doc.id)} className="delete-btn">
                      <FaTrash /> Löschen
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Anschauen Modal */}
      {viewDocument && (
        <div className="modal-overlay" onClick={() => setViewDocument(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Dokument anschauen</h2>
              <button className="modal-close-btn" onClick={() => setViewDocument(null)}>
                <FaTimes />
              </button>
            </div>

            <div className="modal-body">
              <div className="view-document-details">
                <div className="view-item">
                  <span className="view-label">Titel:</span>
                  <span className="view-value">{viewDocument.title}</span>
                </div>
                <div className="view-item">
                  <span className="view-label">Kategorie:</span>
                  <span className="view-value">{viewDocument.category}</span>
                </div>
                <div className="view-item">
                  <span className="view-label">Typ:</span>
                  <span className="view-value">{viewDocument.type}</span>
                </div>
                <div className="view-item">
                  <span className="view-label">Datum:</span>
                  <span className="view-value">{new Date(viewDocument.date).toLocaleDateString('de-DE')}</span>
                </div>
                <div className="view-item">
                  <span className="view-label">Status:</span>
                  <span className="view-value">{viewDocument.status}</span>
                </div>
                {viewDocument.tags && viewDocument.tags.length > 0 && (
                  <div className="view-item">
                    <span className="view-label">Tags:</span>
                    <span className="view-value">{viewDocument.tags.join(', ')}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-cancel" onClick={() => setViewDocument(null)}>Schließen</button>
            </div>
          </div>
        </div>
      )}

      {/* Bearbeiten Modal */}
      {editDocument && (
        <div className="modal-overlay" onClick={() => setEditDocument(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Dokument bearbeiten</h2>
              <button className="modal-close-btn" onClick={() => setEditDocument(null)}>
                <FaTimes />
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="edit-title">Titel</label>
                <input
                  type="text"
                  id="edit-title"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="edit-category">Kategorie</label>
                <select
                  id="edit-category"
                  value={editCategory}
                  onChange={(e) => setEditCategory(e.target.value)}
                  className="form-select"
                >
                  <option value="Labor">Labor</option>
                  <option value="Impfungen">Impfungen</option>
                  <option value="Bildgebung">Bildgebung</option>
                  <option value="Diagnosen">Diagnosen</option>
                  <option value="Medikamente">Medikamente</option>
                  <option value="Vorsorge">Vorsorge</option>
                </select>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-cancel" onClick={() => setEditDocument(null)}>Abbrechen</button>
              <button className="btn-submit" onClick={saveEdit}>Speichern</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dokumente;
