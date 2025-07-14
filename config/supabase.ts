import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cshtiyegdpdqnymbbgdc.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzaHRpeWVnZHBkcW55bWJiZ2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MDMxMTMsImV4cCI6MjA2ODA3OTExM30.hmEuPA0yBgwa01P3c5Ws0tahatbnz-X0tgLcTtSMN44";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Типы для TypeScript
export type Database = {
  public: {
    Tables: {
      words: {
        Row: {
          id: number;
          word: string;
          meaning: string;
          translation: string;
          category: string;
          examples: string;
          detailed_examples: any;
          created_at: string;
        };
        Insert: {
          word: string;
          meaning: string;
          translation: string;
          category: string;
          examples?: string;
          detailed_examples?: any;
        };
        Update: {
          word?: string;
          meaning?: string;
          translation?: string;
          category?: string;
          examples?: string;
          detailed_examples?: any;
        };
      };
      categories: {
        Row: {
          id: string;
          title: string;
          description: string;
          icon: string;
          color: string;
          words_count: number;
          created_at: string;
        };
        Insert: {
          id: string;
          title: string;
          description: string;
          icon: string;
          color: string;
          words_count?: number;
        };
        Update: {
          title?: string;
          description?: string;
          icon?: string;
          color?: string;
          words_count?: number;
        };
      };
      word_of_the_day: {
        Row: {
          id: number;
          word_id: number;
          date: string;
          created_at: string;
        };
        Insert: {
          word_id: number;
          date: string;
        };
        Update: {
          word_id?: number;
          date?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
};

// Типизированный клиент
export const typedSupabase = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey
);
