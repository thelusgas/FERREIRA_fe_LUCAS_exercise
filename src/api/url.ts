import { baseUrl } from '../helpers/constants';

export const Url = {
  BASE: `${baseUrl}`,
  TEAMS: `${baseUrl}/teams`,
  USERS: `${baseUrl}/users`,
} as const;
