import { ChangeEvent, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDebounce } from '@uidotdev/usehooks';
import useSearchAction from '@/store/search/searchAction';
import { useRouter, useSearchParams } from 'next/navigation';
import { clearResults, selectFound } from '@/store/search/searchSlice';
import { useAppDispatch, useAppSelector } from './store-hooks';

const useSearchInput = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { startSearchData } = useSearchAction();

  const foundValue = useAppSelector(selectFound);

  const searchParam = useSearchParams().get('search');

  const [searchTerm, setSearchTerm] = useState<string>(searchParam || '');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const searchJokes = async () => {
      if (debouncedSearchTerm.length > 3) {
        await startSearchData(debouncedSearchTerm);
      }
    };

    searchJokes();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm.length > 3) {
      const URL = encodeURI(`/?search=${debouncedSearchTerm}`);
      router.replace(URL);
    }
  }, [debouncedSearchTerm, router]);

  useEffect(() => {
    if (debouncedSearchTerm.length === 0) {
      router.push('/');
      dispatch(clearResults());
    }
  }, [debouncedSearchTerm, router]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return { searchTerm, handleChange, foundValue };
};

export default useSearchInput;
