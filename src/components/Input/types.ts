export interface InputProps {
  name: string;
  type?: 'text' | "email" | "password" | "tel" | "url" | "number"; // union
  placeholder?: string;
  label?: string;
  id?: string;
}