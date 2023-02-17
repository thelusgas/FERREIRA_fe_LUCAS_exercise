import { ChangeEvent, useMemo, useState } from 'react';

export interface UseSearchProps<T extends object> {
  searchKey: keyof T & string;
  objects: T[] | undefined;
}
export const useSearch = <T extends object>({ searchKey, objects }: UseSearchProps<T>) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredObjects = useMemo(() => {
    if (!objects) {
      return [];
    }

    if (search === '') {
      return objects;
    }

    return objects.filter(object => {
      const value = object[searchKey];
      if (typeof value !== 'string') {
        return false;
      }
      return value.toLowerCase().includes(search.toLowerCase());
    });
  }, [objects, search, searchKey]);

  return [search, handleSearchChange, filteredObjects] as const;
};
