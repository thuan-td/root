'use client';

import { useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name?: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Check for existing token in localStorage
    const storedToken = localStorage.getItem('auth_token');
    if (storedToken) {
      setToken(storedToken);
      // TODO: Validate token and fetch user data
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // TODO: Implement actual login API call
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error('Login failed');

      const data = await response.json();
      setToken(data.token);
      setUser(data.user);
      localStorage.setItem('auth_token', data.token);

      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'ログインに失敗しました' };
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('auth_token');
  };

  const register = async (email: string, password: string, name?: string) => {
    try {
      // TODO: Implement actual register API call
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name }),
      });

      if (!response.ok) throw new Error('Registration failed');

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: '登録に失敗しました' };
    }
  };

  return {
    user,
    token,
    isLoading,
    isAuthenticated: !!token,
    login,
    logout,
    register,
  };
}
