import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {gradient, primary} from '../../../../../variable/colors';
import {
  customFontsize,
  customPadding,
  scale,
} from '../../../../../variable/sizes';
import {IBMPlexSans400} from '../../../../../variable/fontFamily';

export default function ButtonIcon({icon, title, onPress}) {
  return (
    <View>
      <TouchableOpacity style={{alignItems: 'center'}} onPress={onPress}>
        <LinearGradient
          colors={[primary, gradient]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.16)',
            borderRadius: 74,
            ...customPadding(12),
          }}>
          {icon}
        </LinearGradient>
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    ...IBMPlexSans400,
    ...customFontsize(16),
    color: 'white',
    textAlign: 'center',
    marginTop: scale(4),
  },
});
