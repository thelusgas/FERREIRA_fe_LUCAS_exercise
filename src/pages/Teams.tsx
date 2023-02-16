import { Layout } from '@components/Layout';
import { List } from '@components/List';
import { Spinner } from '@components/Spinner';
import { ListItem, Team } from '@interfaces/data';
import { useQuery } from '@tanstack/react-query';

import { getTeams } from '../api';

const MapTeamsToList = (teams: Team[]) => {
  return teams.map(team => {
    return {
      id: team.id,
      url: `/team/${team.id}`,
      children: team.name,
    } as ListItem;
  });
};

export function Teams() {
  const { data: teams, error, isLoading } = useQuery<Team[]>(['teams'], getTeams);

  if (isLoading) {
    return <Spinner />;
  }

  if (teams) {
    return (
      <Layout title="Teams" showBackButton={false}>
        <List items={MapTeamsToList(teams)} />
      </Layout>
    );
  }

  return <div>{typeof error === 'string' ? error : 'something went wrong'}</div>;
}
