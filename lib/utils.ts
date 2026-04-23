import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getRoleStyles = (role: string) => {
  const styles: Record<string, string> = {
    admin: "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/20",
    moderator: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/20",
    user: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/20",
  };
  return styles[role] || "bg-gray-500/15 text-gray-600 border-gray-500/20";
};

export function getUserGradient(username: string) {

  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }

  const h1 = Math.abs(hash % 360);
  const h2 = (h1 + 40) % 360;

  return {
    from: `hsla(${h1}, 70%, 60%, 0.2)`,
    to: `hsla(${h2}, 70%, 60%, 0.2)`,
  };
}
