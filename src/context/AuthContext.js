import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { NEXT_API } from '@/utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [staff, setStaff] = useState(false);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => checkUserLoggedIn(), []);

  //   Register User
  const register = async (newUser) => {
    try {
      const res = await axios.post(
        `${NEXT_API}register`,
        {
          newUser,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await res.data.user;

      if (res.statusText === 'OK') {
        setUser(data);
        setLoggedIn(true);
        router.push('/user/profile');
      }
    } catch (err) {
      setError('We are sorry, something went wrong, please try again. ');
      setError(null);
    }
  };
  //  Login User
  const login = async ({ email, password }) => {
    try {
      // API request to internal Nextjs API
      const res = await axios.post(
        `${NEXT_API}login`,
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      // Response from internal Nextjs API
      const data = await res.data.user;

      // If Response OK store data and determine which type of user
      if (res.statusText === 'OK') {
        setUser(data);
        setLoggedIn(true);

        // Define routing and user type
        if (data.role === 'user') {
          router.push('/user/profile');
        } else if (data.role === 'staff') {
          router.push('/admin/dashboard');
          setStaff(true);
        } else if (data.role === 'admin') {
          router.push('/admin/dashboard');
          setAdmin(true);
        }
      }
      // if Error set Error state so message show up at front end to inform client
      // Resseting Error stat so that message does not presist.
    } catch (err) {
      if (err.request.status === 401) {
        setError('Incorrect email or password');
        setError(null);
      } else {
        setError('We are sorry, something went wrong, please try again. ');
        setError(null);
      }
    }
  };
  // Logout User
  const logout = async () => {
    const res = await axios.get(`${NEXT_API}logout`);
    if (res.statusText === 'OK') {
      setUser(null);
      setLoggedIn(false);
      router.push('/');
    }
  };

  // Check if user is logged in
  const checkUserLoggedIn = async (user) => {
    try {
      const res = await axios.get(`${NEXT_API}user`);
      const data = await res.data.user;
      if (res.statusText === 'OK') {
        setUser(data);
        setLoggedIn(true);
      }
    } catch (err) {
      setUser(null);
      setLoggedIn(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{ user, error, register, login, logout, loggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
