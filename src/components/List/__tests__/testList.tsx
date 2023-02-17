import { render, screen } from '@testing-library/react';
import { AllTheProviders, renderWithClient } from '@tests/utils';
import * as React from 'react';

import { AsyncListProps, List } from '..';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

const mockedQueryFnFirst = jest
  .fn()
  .mockResolvedValue({ id: '1', name: 'mockedGuy1', coolGuyPoints: 1 });

const mockedQueryFnSecond = jest
  .fn()
  .mockResolvedValue({ id: '2', name: 'mockedGuy2', coolGuyPoints: 2 });

const mockedQueryFnThird = jest
  .fn()
  .mockResolvedValue({ id: '3', name: 'mockedGuy3', coolGuyPoints: 3 });

interface MockedGuy {
  id: string;
  name: string;
  coolGuyPoints: number;
}

const mockedQueryKey = ['mockedGuy'];

const mockedParseFn: AsyncListProps<MockedGuy>['parseFn'] = (data: MockedGuy) => {
  return {
    id: data.id,
    children: (
      <>
        {data.name}
        {data.coolGuyPoints}
      </>
    ),
  };
};

const mockedQueries: AsyncListProps<MockedGuy>['queries'] = [
  {
    discriminator: 'id',
    queryFn: mockedQueryFnFirst,
  },
  {
    discriminator: 'id',
    queryFn: mockedQueryFnSecond,
  },
  {
    discriminator: 'id',
    queryFn: mockedQueryFnThird,
  },
];

describe('List', () => {
  it('should render as regular list when not given the async flag as param', () => {
    const items = [
      {
        id: 'first',
        children: <>first</>,
      },
      {
        id: 'second',
        children: <>first</>,
      },
      {
        id: 'third',
        children: <>first</>,
      },
    ];
    render(<List items={items} />, { wrapper: AllTheProviders });
    expect(screen.getByTestId('regular-list')).toBeInTheDocument();

    expect(screen.getByTestId('cardContainer-first')).toBeInTheDocument();
  });

  it('should asynchronously load its children when given the async flag', async () => {
    const list = renderWithClient(
      <List<MockedGuy>
        async
        parseFn={mockedParseFn}
        queries={mockedQueries}
        queryKey={mockedQueryKey}
      />
    );

    expect(await list.getByTestId('async-list')).toBeInTheDocument();
    expect(mockedQueryFnFirst).toHaveBeenCalled();
  });
});
