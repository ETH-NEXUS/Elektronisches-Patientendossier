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

  const currentUser = usersData[currentUserId];

  const switchUser = (userId) => {
    setCurrentUserId(userId);
  };

  const getAllUsers = () => {
    return Object.values(usersData);
  };

  return (
    <UserContext.Provider value={{ currentUser, switchUser, getAllUsers, currentUserId }}>
      {children}
    </UserContext.Provider>
  );
};
