import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {gradient, primary} from '../../variable/colors';
import {IBMPlexSans600} from '../../variable/fontFamily';
import {
  customFontsize,
  customPaddingHorizontal,
  customPaddingVertical,
  scale,
  scaleWidth,
} from '../../variable/sizes';

export default function ButtonPadding({text, onPress, vertical, horizontal}) {
  return (
    <View style={{alignItems: 'flex-start'}}>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          colors={[primary, gradient]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            borderWidth: scaleWidth,
            borderColor: 'rgba(255, 255, 255, 0.16)',
            ...customPaddingVertical(vertical || 0),
            ...customPaddingHorizontal(horizontal || 0),
            borderRadius: 74,
          }}>
          <Text style={styles.text}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    ...IBMPlexSans600,
    ...customFontsize(16),
    color: 'white',
    textAlign: 'center',
    lineHeight: scale(18),
  },
});
