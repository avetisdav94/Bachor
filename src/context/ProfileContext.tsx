import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

interface ProfileContextType {
  displayName: string;
  email: string;
  avatar?: string;
  updateDisplayName: (name: string) => Promise<void>;
  updateAvatar: (avatarUrl: string) => Promise<void>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, updateProfile } = useAuth();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState<string | undefined>();

  // Синхронизируем с данными из AuthContext
  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setEmail(user.email || "");
      setAvatar(user.avatar);
      console.log("Profile context synchronized with auth user:", user);
    } else {
      setDisplayName("");
      setEmail("");
      setAvatar(undefined);
    }
  }, [user]);

  const updateDisplayName = async (name: string) => {
    try {
      const { error } = await updateProfile({ displayName: name });
      if (!error) {
        setDisplayName(name);
        console.log("Display name updated:", name);
      } else {
        console.error("Error updating display name:", error);
      }
    } catch (error) {
      console.error("Error updating display name:", error);
    }
  };

  const updateAvatar = async (avatarUrl: string) => {
    try {
      const { error } = await updateProfile({ avatar: avatarUrl });
      if (!error) {
        setAvatar(avatarUrl);
        console.log("Avatar updated:", avatarUrl);
      } else {
        console.error("Error updating avatar:", error);
      }
    } catch (error) {
      console.error("Error updating avatar:", error);
    }
  };

  const value = {
    displayName,
    email,
    avatar,
    updateDisplayName,
    updateAvatar,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};
