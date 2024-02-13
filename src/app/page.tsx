import JokeList from '@/components/entities/joke/joke-list';
import SearchInput from '@/components/widgets/search-input';

export default function Home() {
  return (
    <>
      <SearchInput />
      <JokeList />
    </>
  );
}
