import { Spinner } from '@components/Spinner';
import { ListItem } from '@interfaces/lib';
import { useQueries } from '@tanstack/react-query';

import { Card } from '../Card';
import { Container } from './styles';

export interface RegularListProps {
  items: ListItem[];
}

interface ItemQuery<T extends object> {
  discriminator: keyof T & string;
  queryFn: () => Promise<T>;
}

export interface AsyncListProps<T extends object> {
  parseFn: (data: T) => ListItem;
  queryKey: string[];
  queries: ItemQuery<T>[];
  search?: {
    searchKey: keyof T & string;
    searchValue: string;
  };
}

export type ListProps<T extends object> =
  | ({
      async?: false;
    } & RegularListProps)
  | ({
      async: true;
    } & AsyncListProps<T>);

function RegularList({ items }: RegularListProps) {
  return (
    <Container data-testid="regular-list">
      {items.map(item => {
        return (
          <Card key={`${item.id}`} id={item.id} url={item.url}>
            {item.children}
          </Card>
        );
      })}
    </Container>
  );
}

function AsyncList<T extends object>({ queries, queryKey, parseFn, search }: AsyncListProps<T>) {
  const res = useQueries({
    queries: queries.map(query => ({
      queryKey: [[...queryKey], query.discriminator],
      queryFn: () => query.queryFn(),
    })),
  });

  const isFiltered = (item: T) => {
    if (!search) {
      return false;
    }

    if (search.searchValue === '') {
      return false;
    }

    const itemKeyValue = item[search.searchKey];

    if (typeof itemKeyValue !== 'string') {
      return false;
    }

    return !itemKeyValue.toLowerCase().includes(search.searchValue.toLowerCase());
  };

  return (
    <Container data-testid="async-list">
      {res.map(r => {
        const itemKey = `list-item-${Math.random()}`;
        if (r.isLoading) {
          return <Spinner key={itemKey} />;
        }
        if (r.data) {
          if (isFiltered(r.data)) {
            return null;
          }

          const { children, ...parsedData } = parseFn(r.data);
          return (
            <Card {...parsedData} key={itemKey}>
              {children}
            </Card>
          );
        }
        return <div key={itemKey}>error</div>;
      })}
    </Container>
  );
}

export function List<T extends object>({ async, ...rest }: ListProps<T>) {
  if ('parseFn' in rest) {
    return <AsyncList<T> {...rest} />;
  }

  return <RegularList {...rest} />;
}
