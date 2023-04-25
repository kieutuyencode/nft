import {StyleSheet, TextInput} from 'react-native';
import {scale} from '../../../../../../variable/sizes';
import {IBMPlexSans400} from '../../../../../../variable/fontFamily';

export default function Input({placeholder}) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor="white"
      placeholder={placeholder}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: scale(1),
    borderRadius: 999,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    paddingHorizontal: scale(20),
    paddingVertical: scale(8),
    ...IBMPlexSans400,
    fontSize: scale(14),
    color: 'white',
  },
});
