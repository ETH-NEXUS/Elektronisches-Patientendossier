import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { documents } from '../data/documentsData';
import { FaFileAlt, FaSyringe, FaXRay, FaFileMedical, FaPills, FaHeartbeat, FaTint, FaStethoscope } from 'react-icons/fa';
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
  const [searchParams] = useSearchParams();
  const kategorie = searchParams.get('kategorie');

  const filteredDocuments = useMemo(() => {
    if (!kategorie) {
      return documents;
    }

    const categoryName = categoryMapping[kategorie];
    if (!categoryName) {
      return documents;
    }

    return documents.filter(doc => doc.category === categoryName);
  }, [kategorie]);

  const getTitle = () => {
    if (!kategorie) return 'Dokumente';
    const categoryName = categoryMapping[kategorie];
    return categoryName ? `Dokumente - ${categoryName}` : 'Dokumente';
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
        <button className="add-document-btn">+ Dokument hinzufügen</button>
      </div>

      {filteredDocuments.length === 0 ? (
        <div className="no-documents">
          <p>Keine Dokumente in dieser Kategorie gefunden.</p>
        </div>
      ) : (
        <div className="documents-simple-grid">
          {filteredDocuments.map(doc => (
            <div key={doc.id} className="document-simple-card">
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dokumente;
