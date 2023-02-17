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
