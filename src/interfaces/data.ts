import { ReactNode } from 'react';

export interface Team {
  id: string;
  name: string;
}

export interface TeamExtended extends Team {
  teamLeadId: string;
  teamMemberIds: string[];
}

export interface TeamMember {
  id: string;
  firstName: string;
  lastName: string;
  displayName: string;
  location: string;
  avatarUrl: string;
}

export interface ListItem {
  id: string;
  url?: string;
  children: ReactNode;
}
