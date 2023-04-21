import {Text} from 'react-native';
import {IBMPlexSans400} from '../../variable/fontFamily';
import {customFontsize} from '../../variable/sizes';

export default function Text400size16({text, center}) {
  return (
    <Text
      style={{
        ...IBMPlexSans400,
        ...customFontsize(16),
        textAlign: center ? 'center' : 'left',
        color: 'white',
        flex: 1,
      }}>
      {text}
    </Text>
  );
}
