import { TeamMember } from '@interfaces/data';

import * as Styles from './styles';

export interface MemberCardProps {
  member: TeamMember;
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <Styles.Container>
      {member.avatarUrl && <Styles.Image src={member.avatarUrl} />}
      <Styles.List>
        <Styles.ItemTitle>Name</Styles.ItemTitle>
        <Styles.ItemValue>
          {member.firstName} {member.lastName}
        </Styles.ItemValue>

        <Styles.ItemTitle>Display Name</Styles.ItemTitle>
        <Styles.ItemValue>{member.displayName}</Styles.ItemValue>

        <Styles.ItemTitle>Location</Styles.ItemTitle>
        <Styles.ItemValue>{member.location}</Styles.ItemValue>
      </Styles.List>
    </Styles.Container>
  );
}
