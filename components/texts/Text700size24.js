import {Text} from 'react-native';
import {IBMPlexSans700} from '../../variable/fontFamily';
import {customFontsize} from '../../variable/sizes';

export default function Text700size24({text}) {
  return (
    <Text
      style={{
        ...IBMPlexSans700,
        ...customFontsize(24),
        textAlign: 'center',
        color: 'white',
      }}>
      {text}
    </Text>
  );
}
