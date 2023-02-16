export const Url = {
  BASE: `${import.meta.env.VITE_APP_API_URL}`,
  TEAMS: `${import.meta.env.VITE_APP_API_URL}/teams`,
  USERS: `${import.meta.env.VITE_APP_API_URL}/users`,
} as const;
