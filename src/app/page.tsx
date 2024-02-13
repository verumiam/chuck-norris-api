import JokeList from '@/components/entities/joke/joke-list';
import SearchInput from '@/components/widgets/search-input';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Suspense>
        <SearchInput />
      </Suspense>
      <JokeList />
    </>
  );
}
