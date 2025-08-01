import React, { createContext, useState, useContext, useEffect, useCallback, ReactNode } from 'react';
import { db } from '../services/db';
import type { UserProgress } from '../types';

interface AuthUser {
  username: string;
  allowedModules?: number[];
}

interface AuthContextType {
  user: AuthUser | null;
  progress: UserProgress;
  loading: boolean;
  error: string | null;
  login: (username: string, password_attempt: string) => Promise<void>;
  logout: () => void;
  updateProgress: (moduleId: number, lessonId: string, activity: 'quiz' | 'exercise', score?: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [progress, setProgress] = useState<UserProgress>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // This effect runs on initial load to check for a persisted session
    const checkSession = () => {
        try {
            const sessionUser = sessionStorage.getItem('authUser');
            if(sessionUser) {
                const parsedUser = JSON.parse(sessionUser);
                setUser(parsedUser);
                db.getProgress(parsedUser.username).then(setProgress);
            }
        } catch (e) {
            console.error("Failed to restore session", e);
            sessionStorage.removeItem('authUser');
        } finally {
            setLoading(false);
        }
    };
    checkSession();
  }, []);

  const login = async (username: string, password_attempt: string) => {
    setError(null);
    setLoading(true);
    try {
      const loggedInUser = await db.login(username, password_attempt);
      if (loggedInUser) {
        setUser(loggedInUser);
        const userProgress = await db.getProgress(loggedInUser.username);
        setProgress(userProgress);
        sessionStorage.setItem('authUser', JSON.stringify(loggedInUser));
      } else {
        setError('Nombre de usuario o contraseña incorrectos.');
      }
    } catch (err) {
      setError('Ocurrió un error durante el inicio de sesión.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setProgress({});
    sessionStorage.removeItem('authUser');
  };

  const updateProgress = useCallback((moduleId: number, lessonId: string, activity: 'quiz' | 'exercise', score?: number) => {
      if (!user) return;

      setProgress(prev => {
          const newProgress = JSON.parse(JSON.stringify(prev));
          if (!newProgress[moduleId]) {
              newProgress[moduleId] = {};
          }
          if (!newProgress[moduleId][lessonId]) {
              newProgress[moduleId][lessonId] = {};
          }

          if (activity === 'quiz') {
              newProgress[moduleId][lessonId].quizCompleted = true;
              newProgress[moduleId][lessonId].quizScore = score;
          } else if (activity === 'exercise') {
              newProgress[moduleId][lessonId].exerciseCompleted = true;
          }
          
          db.saveProgress(user.username, newProgress);
          return newProgress;
      });
  }, [user]);
  
  const value = { user, progress, loading, error, login, logout, updateProgress };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};