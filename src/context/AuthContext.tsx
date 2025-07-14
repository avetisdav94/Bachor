// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthService, AuthUser } from "../services/AuthService";

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  signUp: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<{ error: string | null }>;
  signIn: (
    email: string,
    password: string
  ) => Promise<{ error: string | null }>;
  signOut: () => Promise<{ error: string | null }>;
  resetPassword: (email: string) => Promise<{ error: string | null }>;
  updateProfile: (
    updates: Partial<AuthUser>
  ) => Promise<{ error: string | null }>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Получаем текущего пользователя при загрузке
    const getCurrentUser = async () => {
      try {
        const currentUser = await AuthService.getCurrentUser();
        setUser(currentUser);
        console.log("Current user loaded:", currentUser);
      } catch (error) {
        console.error("Error getting current user:", error);
      } finally {
        setLoading(false);
      }
    };

    getCurrentUser();

    // Подписываемся на изменения аутентификации
    const {
      data: { subscription },
    } = AuthService.onAuthStateChange(async (user) => {
      console.log("Auth state changed, updating user:", user);
      setUser(user);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    setLoading(true);
    const { user: newUser, error } = await AuthService.signUp({
      email,
      password,
      displayName,
    });

    if (newUser) {
      setUser(newUser);
      console.log("User signed up and set:", newUser);
    }

    setLoading(false);
    return { error };
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    const { user: newUser, error } = await AuthService.signIn({
      email,
      password,
    });

    if (newUser) {
      setUser(newUser);
      console.log("User signed in and set:", newUser);
    }

    setLoading(false);
    return { error };
  };

  const signOut = async () => {
    setLoading(true);
    const { error } = await AuthService.signOut();
    setUser(null);
    setLoading(false);
    return { error };
  };

  const resetPassword = async (email: string) => {
    return await AuthService.resetPassword(email);
  };

  const updateProfile = async (updates: Partial<AuthUser>) => {
    const { error } = await AuthService.updateProfile(updates);

    if (!error && user) {
      // Обновляем локальное состояние
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      console.log("Profile updated locally:", updatedUser);
    }

    return { error };
  };

  const refreshProfile = async () => {
    try {
      const currentUser = await AuthService.getCurrentUser();
      setUser(currentUser);
      console.log("Profile refreshed:", currentUser);
    } catch (error) {
      console.error("Error refreshing profile:", error);
    }
  };

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updateProfile,
    refreshProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
