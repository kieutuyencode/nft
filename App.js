import {Provider, useDispatch} from 'react-redux';
import {useLayoutEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {store} from './store';
import Screens from './screens';
import {toggleLanguage} from './store/language';

function Container() {
  const dispath = useDispatch();

  useLayoutEffect(() => {
    const currentLanguage = async () => {
      try {
        const language = await AsyncStorage.getItem('@current_language');
        const currentLanguage = language != null ? language : 'en';
        dispath(toggleLanguage({language: currentLanguage}));
      } catch (e) {
        console.log(e);
      }
    };
    currentLanguage();
  }, []);

  return <Screens />;
}

export default function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}
