import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IBMPlexSans700} from '../../../../../variable/fontFamily';
import {
  customFontsize,
  customPaddingVertical,
} from '../../../../../variable/sizes';

export default function Button({text}) {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#E8127C',
    borderRadius: 5,
  },
  text: {
    ...IBMPlexSans700,
    ...customFontsize(12),
    color: 'white',
    textAlign: 'center',
    ...customPaddingVertical(10),
  },
});
