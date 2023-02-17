import { TeamMember } from '@interfaces/data';

import * as Styles from './styles';

export interface MemberCardProps {
  member: TeamMember;
  isTeamLead?: boolean;
}

export function MemberCard({ member, isTeamLead }: MemberCardProps) {
  return (
    <Styles.Container>
      {member.avatarUrl && <Styles.Image src={member.avatarUrl} />}
      <Styles.List>
        <Styles.ItemTitle>Name</Styles.ItemTitle>
        <Styles.ItemValue data-testid={`member-card__name--${member.id}`}>
          {member.firstName} {member.lastName}
        </Styles.ItemValue>

        <Styles.ItemTitle>Display Name</Styles.ItemTitle>
        <Styles.ItemValue data-testid={`member-card__display-name--${member.id}`}>
          {member.displayName}
        </Styles.ItemValue>

        <Styles.ItemTitle>Location</Styles.ItemTitle>
        <Styles.ItemValue data-testid={`member-card__location--${member.id}`}>
          {member.location}
        </Styles.ItemValue>
      </Styles.List>
      {isTeamLead && <Styles.TeamLead>Team Lead</Styles.TeamLead>}
    </Styles.Container>
  );
}
