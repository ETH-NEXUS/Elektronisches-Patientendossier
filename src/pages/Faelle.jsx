import { useState, useMemo } from 'react';
import { useUser } from '../context/UserContext';
import DocumentFilters from '../components/Documents/DocumentFilters';
import DocumentListView from '../components/Documents/DocumentListView';
import DocumentGridView from '../components/Documents/DocumentGridView';
import { statusOptions, sortOptions } from '../data/documentsData';
import './Faelle.css';

function Faelle() {
  const { currentUser } = useUser();
  const [statusFilter, setStatusFilter] = useState('alle');
  const [sortBy, setSortBy] = useState('date-desc');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('list');

  const filteredAndSortedDocuments = useMemo(() => {
    let result = [...(currentUser.documents || [])];

    if (statusFilter !== 'alle') {
      result = result.filter(doc => doc.status === statusFilter);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(doc =>
        doc.title.toLowerCase().includes(query) ||
        doc.category.toLowerCase().includes(query) ||
        doc.type.toLowerCase().includes(query)
      );
    }

    switch (sortBy) {
      case 'date-desc':
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'date-asc':
        result.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'title':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'category':
        result.sort((a, b) => a.category.localeCompare(b.category));
        break;
      default:
        break;
    }

    return result;
  }, [statusFilter, searchQuery, sortBy]);

  return (
    <div className="faelle-container">
      <div className="faelle-header">
        <h1>Fälle</h1>
        <button className="add-fall-btn">+ Fall hinzufügen</button>
      </div>

      <DocumentFilters
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        viewMode={viewMode}
        setViewMode={setViewMode}
        statusOptions={statusOptions}
        sortOptions={sortOptions}
      />

      {filteredAndSortedDocuments.length === 0 ? (
        <div className="no-documents">
          <p>Keine Dokumente gefunden.</p>
        </div>
      ) : (
        <>
          {viewMode === 'list' ? (
            <DocumentListView documents={filteredAndSortedDocuments} />
          ) : (
            <DocumentGridView documents={filteredAndSortedDocuments} />
          )}
        </>
      )}
    </div>
  );
}

export default Faelle;
