import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IBMPlexSans700} from '../../../../../variable/fontFamily';
import {
  customFontsize,
  customPaddingVertical,
  scale,
} from '../../../../../variable/sizes';

export default function Button({text, onPress}) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#E8127C',
    borderRadius: 5,
    ...customPaddingVertical(10),
  },
  text: {
    ...IBMPlexSans700,
    ...customFontsize(12),
    color: 'white',
    textAlign: 'center',
    lineHeight: scale(15),
  },
});
