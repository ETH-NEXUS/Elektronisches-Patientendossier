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

  return (
    <UserContext.Provider value={{ currentUser, switchUser, getAllUsers, currentUserId, addDocument }}>
      {children}
    </UserContext.Provider>
  );
};
