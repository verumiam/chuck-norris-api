import { mainUrl } from '@/constants/url-params';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const searching = createAsyncThunk('search/get', async (query: string, thunkAPI) => {
  const apiUrl = `${mainUrl}/jokes/search?query=${query}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    } else {
      return thunkAPI.rejectWithValue({ error: 'Unknown error occurred' });
    }
  }
});
