import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {gradient, primary} from '../../variable/colors';
import {scale} from '../../variable/sizes';

export default function Button({
  text,
  onPress,
  vertical,
  horizontal,
  font,
  lineHeight,
  test,
  size,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[primary, gradient]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{
          borderWidth: scale(1),
          borderColor: 'rgba(255, 255, 255, 0.16)',
          borderRadius: 999,
        }}>
        <Text
          style={[
            styles.text,
            test && {backgroundColor: 'black'},
            font,
            {
              fontSize: scale(size || 14),
              paddingVertical: scale(vertical || 0),
              paddingHorizontal: scale(horizontal || 0),
              lineHeight: scale(lineHeight || 16),
            },
          ]}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
