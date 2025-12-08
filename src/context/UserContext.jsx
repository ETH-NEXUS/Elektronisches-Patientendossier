import { createContext, useContext, useState } from 'react';
import { usersData } from '../data/usersData';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [currentUserId, setCurrentUserId] = useState('luca-frei');
  const [users, setUsers] = useState(usersData);

  const currentUser = users[currentUserId];

  const switchUser = (userId) => {
    setCurrentUserId(userId);
  };

  const getAllUsers = () => {
    return Object.values(users);
  };

  const addDocument = (newDocument) => {
    setUsers(prevUsers => ({
      ...prevUsers,
      [currentUserId]: {
        ...prevUsers[currentUserId],
        documents: [newDocument, ...prevUsers[currentUserId].documents]
      }
    }));
  };

  const updateDocument = (documentId, updatedData) => {
    setUsers(prevUsers => ({
      ...prevUsers,
      [currentUserId]: {
        ...prevUsers[currentUserId],
        documents: prevUsers[currentUserId].documents.map(doc =>
          doc.id === documentId ? { ...doc, ...updatedData } : doc
        )
      }
    }));
  };

  const deleteDocument = (documentId) => {
    setUsers(prevUsers => ({
      ...prevUsers,
      [currentUserId]: {
        ...prevUsers[currentUserId],
        documents: prevUsers[currentUserId].documents.filter(doc => doc.id !== documentId)
      }
    }));
  };

  return (
    <UserContext.Provider value={{ currentUser, switchUser, getAllUsers, currentUserId, addDocument, updateDocument, deleteDocument }}>
      {children}
    </UserContext.Provider>
  );
};
