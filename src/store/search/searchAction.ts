import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { searching } from './searchThunk';

const useSearchAction = () => {
  const dispatch = useDispatch<AppDispatch>();

  const startSearchData = async (query: string) => {
    try {
      await dispatch(searching(query)).unwrap();
    } catch (error) {
      return error;
    }
  };

  return { startSearchData };
};

export default useSearchAction;
