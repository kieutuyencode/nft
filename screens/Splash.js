import {ImageBackground, View} from 'react-native';
import {backgroundSplash} from '../variable/images';
import Logo from '../variable/svgs/Logo';
import {useEffect} from 'react';
import {useNavigation, useIsFocused} from '@react-navigation/native';

export default function Splash() {
  const {navigate} = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    const time = setTimeout(() => {
      navigate('LoginSignup');
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, [isFocused]);

  return (
    <ImageBackground source={backgroundSplash} style={{flex: 1}}>
      <View style={{marginTop: 200, alignItems: 'center'}}>
        <Logo />
      </View>
    </ImageBackground>
  );
}
