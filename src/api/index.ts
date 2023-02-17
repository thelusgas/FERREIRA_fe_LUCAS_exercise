import { Url } from '@api/url';
import { Team, TeamExtended, TeamMember } from '@interfaces/data';

export const getData = async <T extends object>(url: string): Promise<T> => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

export const getTeams = (): Promise<Team[]> => {
  return getData(Url.TEAMS);
};

export const getTeamExtended = (teamId: string): Promise<TeamExtended> => {
  return getData(`${Url.TEAMS}/${teamId}`);
};

export const getTeamMember = (userId: string): Promise<TeamMember> => {
  return getData(`${Url.USERS}/${userId}`);
};
