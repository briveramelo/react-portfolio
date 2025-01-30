import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  signInAnonymously,
  setPersistence,
  inMemoryPersistence,
  User,
} from "firebase/auth";

// Define context type
interface AuthContextType {
  user: User | null;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth Provider Component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();

  useEffect(() => {
    // Set Firebase authentication to in-memory (no tracking, no cookies)
    setPersistence(auth, inMemoryPersistence)
      .then(() => signInAnonymously(auth))
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error("Auth Error:", error);
      });

    // Sign out on tab close
    const handleTabClose = () => {
      auth.signOut().catch((error) => console.error("Sign-out error:", error));
    };
    window.addEventListener("beforeunload", handleTabClose);

    return () => {
      window.removeEventListener("beforeunload", handleTabClose);
      auth
        .signOut()
        .catch((error) => console.error("Sign-out error on unmount:", error));
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
