import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider(props) {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const changeUser = (user) => setUser(user);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);

  return (
    <UserContext.Provider
      value={{ user, changeUser, loggedIn, toggleLoggedIn }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
