import { ChangeEvent } from 'react';

import * as Styles from './styles';

export interface SearchProps {
  searchValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;

  placeholder?: string;
}

export function Search({ searchValue, onChange, placeholder }: SearchProps) {
  return (
    <Styles.Input
      type="search"
      placeholder={placeholder ?? 'Search...'}
      value={searchValue}
      onChange={onChange}
    />
  );
}
