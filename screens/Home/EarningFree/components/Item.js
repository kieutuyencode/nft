import {StyleSheet, Text, Pressable} from 'react-native';
import {IBMPlexSans700} from '../../../../variable/fontFamily';
import {scale} from '../../../../variable/sizes';

export default function Item({text, onPress}) {
  return (
    <Pressable onPress={onPress}>
      {({pressed}) => (
        <Text style={[styles.text, pressed && styles.active]}>{text}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    ...IBMPlexSans700,
    fontSize: scale(16),
    color: 'white',
    marginBottom: scale(16),
  },
  active: {
    color: '#E80274',
  },
});
