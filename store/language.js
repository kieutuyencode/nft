import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';

const initialState = {
  current: 'en',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state, action) => {
      state.current = action.payload.language;
    },
  },
});

export const {toggleLanguage} = languageSlice.actions;

export const handlerLanguage = language => {
  return async dispatch => {
    dispatch(toggleLanguage({language}));
    try {
      await AsyncStorage.setItem('@current_language', language);
    } catch (e) {
      console.log(e);
    }
  };
};

export const currentLanguage = state => state.language.current;

export default languageSlice.reducer;

export function useLanguage() {
  const language = useSelector(currentLanguage);
  return language;
}
