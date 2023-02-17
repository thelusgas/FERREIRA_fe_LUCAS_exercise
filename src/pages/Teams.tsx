import { Layout } from '@components/Layout';
import { List } from '@components/List';
import { Search } from '@components/Search';
import { Spinner } from '@components/Spinner';
import { useSearch } from '@helpers/use-search';
import { Team } from '@interfaces/data';
import { ListItem } from '@interfaces/lib';
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

  const [filter, handleChangeFilter, filteredTeams] = useSearch({
    searchKey: 'name',
    objects: teams,
  });

  if (isLoading) {
    return <Spinner isFullPage />;
  }

  if (teams) {
    return (
      <Layout title="Teams" showBackButton={false}>
        <Search
          searchValue={filter}
          onChange={handleChangeFilter}
          placeholder="Start typing to filter teams"
        />
        <List items={MapTeamsToList(filteredTeams)} />
      </Layout>
    );
  }

  return <div>{typeof error === 'string' ? error : 'something went wrong'}</div>;
}
