import {View, StyleSheet, TextInput} from 'react-native';
import {scale} from '../../../../../../variable/sizes';
import More2 from '../../../../../../variable/svgs/More2';
import {IBMPlexSans400} from '../../../../../../variable/fontFamily';

export default function Input({placeholder, more, desc}) {
  return (
    <View style={{marginBottom: scale(12)}}>
      <View style={styles.container}>
        <TextInput
          style={[styles.input, desc && {height: scale(62)}]}
          placeholder={placeholder}
          placeholderTextColor="#536981"
          multiline={desc}
        />
        {more && (
          <View style={styles.more}>
            <More2 />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#EAEAEA',
    borderWidth: scale(1),
    borderRadius: 999,
    backgroundColor: 'white',
    paddingHorizontal: scale(16),
    ...IBMPlexSans400,
    fontSize: scale(14),
    color: '#536981',
    paddingVertical: scale(6),
  },
  container: {
    justifyContent: 'center',
  },
  more: {
    position: 'absolute',
    right: scale(16),
  },
});
