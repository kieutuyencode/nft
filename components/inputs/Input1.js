import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  customFontsize,
  customHeight,
  customMarginBottom,
  customPaddingLeft,
  customPaddingRight,
  customPaddingVertical,
  customWidth,
  scale,
} from '../../variable/sizes';
import {IBMPlexSans400} from '../../variable/fontFamily';
import {eye, eyeOff} from '../../variable/images';
import {useState} from 'react';

export default function Input1({placeholder, password, keyboardType}) {
  const [secure, setSecure] = useState(password);

  function toggle() {
    setSecure(prev => !prev);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="white"
        secureTextEntry={secure}
        keyboardType={keyboardType || 'default'}
      />
      {password &&
        (!secure ? (
          <TouchableOpacity onPress={toggle}>
            <Image source={eye} style={[customWidth(24), customHeight(24)]} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={toggle}>
            <Image
              source={eyeOff}
              style={[customWidth(24), customHeight(24)]}
            />
          </TouchableOpacity>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    ...customPaddingRight(14),
  },
  input: {
    ...customPaddingLeft(12),
    color: 'white',
    ...customFontsize(12),
    ...IBMPlexSans400,
    flex: 1,
    ...customPaddingVertical(14),
  },
});
