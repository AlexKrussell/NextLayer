import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  name: string;
  email: string;
  picture: string;
}

interface AuthContextType {
  user: User | null;
  signIn: () => void;
  signOut: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const savedUser = localStorage.getItem("nextlayer_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Load Google Sign-In script
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const signIn = () => {
    setIsLoading(true);

    // Initialize Google Sign-In
    if (typeof window !== "undefined" && (window as any).google) {
      const google = (window as any).google;

      google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com", // Replace with your actual client ID
        callback: (response: any) => {
          // Decode JWT token to get user info
          const userInfo = JSON.parse(atob(response.credential.split('.')[1]));

          const userData: User = {
            name: userInfo.name,
            email: userInfo.email,
            picture: userInfo.picture
          };

          setUser(userData);
          localStorage.setItem("nextlayer_user", JSON.stringify(userData));
          setIsLoading(false);
        }
      });

      google.accounts.id.prompt();
    } else {
      // Fallback for demo purposes (mock login)
      setTimeout(() => {
        const mockUser: User = {
          name: "Demo User",
          email: "demo@nextlayer.com",
          picture: "https://ui-avatars.com/api/?name=Demo+User&background=e4d3ff&color=030213"
        };
        setUser(mockUser);
        localStorage.setItem("nextlayer_user", JSON.stringify(mockUser));
        setIsLoading(false);
      }, 800);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("nextlayer_user");
    if (typeof window !== "undefined" && (window as any).google) {
      (window as any).google.accounts.id.disableAutoSelect();
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
