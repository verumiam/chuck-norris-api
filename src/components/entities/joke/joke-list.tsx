'use client';

import { useAppSelector } from '@/hooks/store-hooks';
import { selectFoundData } from '@/store/search/searchSlice';
import JokeItem from './joke-item';
import JokeSkeleton from './joke-skeleton';
import { SearchData, SearchType } from '@/store/search/types';

function generateJokeList(results: SearchData[], status: SearchType['status']) {
  return results.map((joke) =>
    status === 'loading' ? <JokeSkeleton key={joke.id} /> : <JokeItem {...joke} key={joke.id} />
  );
}

export default function JokeList() {
  const { results, status } = useAppSelector(selectFoundData);

  if (status === 'failed') {
    return (
      <section className="text-center pt-6 pb-8">
        К сожалению, не удалось получить данные. Возникла ошибка.
      </section>
    );
  }

  return (
    <section className="max-w-[1600px] p-6 mx-auto">
      <section className="max-w-[1600px] mx-auto pt-6 pb-8">
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 mb-4">
          {generateJokeList(results.slice(0, 2), status)}
        </div>
        <div className="grid gap-4 xl:grid-cols-3 md:grid-cols-2">
          {generateJokeList(results.slice(2), status)}
        </div>
      </section>
    </section>
  );
}
