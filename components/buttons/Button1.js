import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {gradient, primary} from '../../variable/colors';
import {IBMPlexSans600} from '../../variable/fontFamily';
import {
  customFontsize,
  customPaddingVertical,
  customWidth,
  scaleWidth,
} from '../../variable/sizes';

export default function Button1({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[primary, gradient]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          borderWidth: scaleWidth,
          borderColor: 'rgba(255, 255, 255, 0.16)',
          ...customPaddingVertical(12),
          borderRadius: 74,
          ...customWidth(259),
        }}>
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    ...IBMPlexSans600,
    ...customFontsize(16),
    color: 'white',
    textAlign: 'center',
  },
});
