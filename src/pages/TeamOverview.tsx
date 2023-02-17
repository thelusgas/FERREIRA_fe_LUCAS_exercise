import { Layout } from '@components/Layout';
import { List } from '@components/List';
import { MemberCard } from '@components/MemberCard';
import { Search } from '@components/Search';
import { Spinner } from '@components/Spinner';
import { ListItem, TeamExtended, TeamMember } from '@interfaces/data';
import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getTeamExtended, getTeamMember } from '../api';

export function TeamOverview() {
  const { teamId } = useParams<{ teamId: string }>();
  const [filter, setFilter] = useState('');

  const handleChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  if (!teamId) {
    throw new Error('team ID not found');
  }

  const {
    data: team,
    isLoading,
    error,
  } = useQuery<TeamExtended>(['teams', teamId], () => getTeamExtended(teamId));

  if (isLoading) {
    return <Spinner />;
  }

  if (team) {
    const queries = team.teamMemberIds.map(id => {
      return {
        discriminator: id as keyof TeamMember & string,
        queryFn: () => getTeamMember(id),
      };
    });

    return (
      <Layout title={team.name} subtitle="team" showBackButton>
        <Search
          searchValue={filter}
          onChange={handleChangeFilter}
          placeholder="Start typing to filter team members"
        />
        <List<TeamMember>
          queryKey={['team', 'member']}
          queries={queries}
          parseFn={parseUserToListItem}
          async
          search={{
            searchKey: 'displayName',
            searchValue: filter,
          }}
        />
      </Layout>
    );
  }

  return <div>{typeof error === 'string' ? error : 'something went wrong'}</div>;
}

const parseUserToListItem = (data: TeamMember): ListItem => {
  return {
    id: data.id,
    url: `/user/${data.id}`,
    children: <MemberCard member={data} />,
  };
};
