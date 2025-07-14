import { supabase } from "@/config/supabase";
import { AuthChangeEvent, Session } from "@supabase/supabase-js";

export interface AuthUser {
  id: string;
  email: string;
  displayName?: string;
  avatar?: string;
  createdAt: string;
}

export interface SignUpData {
  email: string;
  password: string;
  displayName: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export class AuthService {
  // Регистрация пользователя
  static async signUp(
    data: SignUpData
  ): Promise<{ user: AuthUser | null; error: string | null }> {
    try {
      console.log("Starting signup process for:", data.email);

      const { data: authData, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            display_name: data.displayName,
          },
        },
      });

      if (error) {
        console.error("Auth signup error:", error);
        return { user: null, error: error.message };
      }

      if (!authData.user) {
        return { user: null, error: "Пользователь не создан" };
      }

      console.log("User created successfully:", authData.user.id);

      // Создаем/обновляем профиль сразу после регистрации
      await this.createOrUpdateProfile(
        authData.user.id,
        data.email,
        data.displayName
      );

      const user: AuthUser = {
        id: authData.user.id,
        email: authData.user.email || data.email,
        displayName: data.displayName,
        createdAt: authData.user.created_at || new Date().toISOString(),
      };

      return { user, error: null };
    } catch (error) {
      console.error("SignUp error:", error);
      return { user: null, error: "Ошибка регистрации" };
    }
  }

  // Вход пользователя
  static async signIn(
    data: SignInData
  ): Promise<{ user: AuthUser | null; error: string | null }> {
    try {
      console.log("Starting signin process for:", data.email);

      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) {
        console.error("Auth signin error:", error);
        return { user: null, error: error.message };
      }

      if (!authData.user) {
        return { user: null, error: "Пользователь не найден" };
      }

      console.log("User signed in successfully:", authData.user.id);

      // Получаем полный профиль пользователя
      const profile = await this.getFullProfile(authData.user.id);

      const user: AuthUser = {
        id: authData.user.id,
        email: authData.user.email || data.email,
        displayName:
          profile?.display_name ||
          authData.user.user_metadata?.display_name ||
          authData.user.email?.split("@")[0] ||
          data.email.split("@")[0],
        avatar: profile?.avatar_url,
        createdAt: authData.user.created_at || new Date().toISOString(),
      };

      return { user, error: null };
    } catch (error) {
      console.error("SignIn error:", error);
      return { user: null, error: "Ошибка входа" };
    }
  }

  // Создание или обновление профиля
  static async createOrUpdateProfile(
    userId: string,
    email: string,
    displayName: string
  ): Promise<void> {
    try {
      console.log("Creating/updating profile for user:", userId);

      // Используем upsert для создания или обновления профиля
      const { data, error } = await supabase
        .from("profiles")
        .upsert(
          {
            id: userId,
            email: email,
            display_name: displayName,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
          {
            onConflict: "id",
          }
        )
        .select()
        .single();

      if (error) {
        console.error("Profile upsert error:", error);
      } else {
        console.log("Profile created/updated successfully:", data);
      }
    } catch (error) {
      console.error("createOrUpdateProfile error:", error);
    }
  }

  // Получение полного профиля
  static async getFullProfile(userId: string): Promise<any> {
    try {
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) {
        console.error("Profile fetch error:", error);
        return null;
      }

      return profile;
    } catch (error) {
      console.error("getFullProfile error:", error);
      return null;
    }
  }

  // Получить текущего пользователя
  static async getCurrentUser(): Promise<AuthUser | null> {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return null;

      // Получаем полный профиль
      const profile = await this.getFullProfile(user.id);

      // Если профиль не найден, создаем его из данных auth
      if (!profile) {
        const displayName =
          user.user_metadata?.display_name ||
          user.email?.split("@")[0] ||
          "User";

        await this.createOrUpdateProfile(
          user.id,
          user.email || "",
          displayName
        );

        // Повторно получаем профиль
        const newProfile = await this.getFullProfile(user.id);

        return {
          id: user.id,
          email: user.email || "",
          displayName: newProfile?.display_name || displayName,
          avatar: newProfile?.avatar_url,
          createdAt: user.created_at || new Date().toISOString(),
        };
      }

      return {
        id: user.id,
        email: user.email || "",
        displayName:
          profile.display_name || user.email?.split("@")[0] || "User",
        avatar: profile.avatar_url,
        createdAt: user.created_at || new Date().toISOString(),
      };
    } catch (error) {
      console.error("Get current user error:", error);
      return null;
    }
  }

  // Выход пользователя
  static async signOut(): Promise<{ error: string | null }> {
    try {
      const { error } = await supabase.auth.signOut();
      return { error: error?.message || null };
    } catch (error) {
      console.error("SignOut error:", error);
      return { error: "Ошибка выхода" };
    }
  }

  // Сброс пароля
  static async resetPassword(email: string): Promise<{ error: string | null }> {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "bachor://reset-password",
      });

      return { error: error?.message || null };
    } catch (error) {
      console.error("Reset password error:", error);
      return { error: "Ошибка сброса пароля" };
    }
  }

  // Обновление профиля
  static async updateProfile(
    updates: Partial<AuthUser>
  ): Promise<{ error: string | null }> {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        return { error: "Пользователь не авторизован" };
      }

      // Обновляем профиль
      const { error } = await supabase
        .from("profiles")
        .update({
          display_name: updates.displayName,
          avatar_url: updates.avatar,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id);

      if (error) {
        console.error("Profile update error:", error);
        return { error: "Ошибка обновления профиля" };
      }

      return { error: null };
    } catch (error) {
      console.error("Update profile error:", error);
      return { error: "Ошибка обновления профиля" };
    }
  }

  // Подписка на изменения аутентификации
  static onAuthStateChange(callback: (user: AuthUser | null) => void) {
    return supabase.auth.onAuthStateChange(
      async (event: AuthChangeEvent, session: Session | null) => {
        console.log("Auth state changed:", event, session?.user?.id);

        if (session?.user) {
          const user = await this.getCurrentUser();
          callback(user);
        } else {
          callback(null);
        }
      }
    );
  }
}
