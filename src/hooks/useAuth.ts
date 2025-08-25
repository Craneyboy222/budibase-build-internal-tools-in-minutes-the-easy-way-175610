import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthState {
  isAuthenticated: boolean;
  user: null | { id: string; name: string; roles: string[] };
}

const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Assume a function `fetchUser` to get user data
      fetchUser(token).then(user => {
        setAuthState({ isAuthenticated: true, user });
      }).catch(() => {
        localStorage.removeItem('authToken');
        navigate('/login');
      });
    }
  }, [navigate]);

  const login = async (username: string, password: string) => {
    try {
      // Assume a function `apiLogin` to authenticate
      const { token, user } = await apiLogin(username, password);
      localStorage.setItem('authToken', token);
      setAuthState({ isAuthenticated: true, user });
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setAuthState({ isAuthenticated: false, user: null });
    navigate('/login');
  };

  return { ...authState, login, logout };
};

export default useAuth;