import {ImageBackground} from 'react-native';
import {background1} from '../../variable/images';

export default function Background1({children}) {
  return (
    <ImageBackground style={{flex: 1}} source={background1}>
      {children}
    </ImageBackground>
  );
}
