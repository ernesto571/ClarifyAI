import { create } from "zustand";
import { persist } from "zustand/middleware";
import { signIn, signUp, signOut, getSession } from "../lib/authClient";

interface FormData {
  first_name?: string;
  last_name?: string;
  email: string;
  password: string;
  role?: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  image?: string;
}
interface AuthState {
  user: User | null;
  isLoading: boolean;
  isGoogleLoading: boolean;
  isGithubLoading: boolean;
  error: string | null;
  formData: FormData;
  signup: (data: FormData) => Promise<void>;
  login: (data:FormData) => Promise<void>;
  logout: () => Promise<void>;
  fetchProfile: () => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithGithub: () => Promise<void>;
  setFormData: (data: Partial<FormData>) => void;
  clearError: () => void;
}

const initialFormData: FormData = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  role: '',
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      formData: initialFormData,
      isGoogleLoading: false,
      isGithubLoading: false,
      error: null,

      // signup
      signup: async (data) => {
        set({ isLoading: true, error: null });
        try {
          console.log("📤 Signup payload:", data); 
          const { error } = await signUp.email({
            email: data.email,
            password: data.password,
            name: `${data.first_name ?? ""} ${data.last_name ?? ""}`.trim(),
            role: data.role ?? "user" ,
          });
          if (error) {
            console.error("❌ Signup error:", error.message);
            set({ error: error.message, isLoading: false });
            return;
          }
          const session = await getSession();
          set({ user: (session.data?.user as User) ?? null, isLoading: false });
        } catch (err) {
          console.error("❌ Signup unexpected error:", err);
          set({ error: "Signup failed. Please try again.", isLoading: false });
        }
      },

      // login
      login: async (data) => {
        set({ isLoading: true, error: null });
        try {
          console.log("📤 Login payload:", data);
          const { data: authData, error } = await signIn.email({ 
            email: data.email,
            password: data.password,
          });
          if (error) {
            console.error("❌ Login error:", error.message);
            set({ error: error.message, isLoading: false });
            return;
          }
          set({ user: (authData?.user as User) ?? null, isLoading: false });
        } catch (err) {
          console.error("❌ Login unexpected error:", err);
          set({ error: "Login failed. Please try again.", isLoading: false });
        }
      },

      // logout
      logout: async () => {
        set({ isLoading: true });
        try {
          await signOut();
          set({ user: null, isLoading: false });
        } catch (err) {
          console.error("❌ Logout error:", err);
          set({ user: null, isLoading: false });
        }
      },

      fetchProfile: async () => {
        set({ isLoading: true });
        try {
          const { data } = await getSession();
          set({ user: (data?.user as User) || null, isLoading: false });
        } catch (err) {
          console.error("❌ fetchProfile error:", err);
          set({ user: null, isLoading: false });
        }
      },
      loginWithGoogle: async () => {
        set({ isGoogleLoading: true, error: null });
        try {
          const { error } = await signIn.social({
            provider: "google",
            callbackURL: `${window.location.origin}/auth/callback`,
          });
          if (error) {
            console.error("❌ Google login error:", error.message);
            set({ error: error.message, isLoading: false });
          }
        } catch (err) {
          console.error("❌ Google login unexpected error:", err);
          set({ error: "Google login failed. Please try again.", isLoading: false });
        }
      },
      loginWithGithub: async () => {
        set({ isGithubLoading: true, error: null });
        try {
          const { error } = await signIn.social({
            provider: "github",
            callbackURL: `${window.location.origin}/auth/callback`,
          });
          if (error) {
            console.error("❌ GitHub login error:", error.message);
            set({ error: error.message, isLoading: false });
          }
        } catch (err) {
          console.error("❌ GitHub login unexpected error:", err);
          set({ error: "GitHub login failed. Please try again.", isLoading: false });
        }
      },
      clearError: () => set({ error: null }),

      setFormData: (data) => {
        console.log("📝 setFormData:", data);
        set((state) => ({ formData: { ...state.formData, ...data } }));
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ user: state.user }),
    },
    
  )
);