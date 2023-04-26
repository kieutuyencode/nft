import {View, Text, TextInput, StyleSheet} from 'react-native';
import {scale} from '../../../../../../variable/sizes';
import {IBMPlexSans400} from '../../../../../../variable/fontFamily';

export default function Input({text, content, keyboardType}) {
  return (
    <View style={{flex: 1}}>
      <Text style={styles.label}>{text}*</Text>
      <TextInput
        style={[styles.input, content && styles.content]}
        placeholder={text}
        placeholderTextColor="#536981"
        multiline={content}
        keyboardType={keyboardType || 'default'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderWidth: scale(1),
    borderColor: '#EAEAEA',
    borderRadius: scale(22),
    paddingHorizontal: scale(12),
    paddingVertical: scale(6),
    ...IBMPlexSans400,
    fontSize: scale(10),
    color: '#536981',
  },
  label: {
    ...IBMPlexSans400,
    fontSize: scale(10),
    color: 'white',
    marginLeft: scale(6),
    marginBottom: scale(4),
  },
  content: {
    borderRadius: scale(10),
    height: scale(70),
    textAlignVertical: 'top',
    paddingVertical: scale(8),
  },
});
