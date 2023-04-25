import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IBMPlexSans400} from '../../../../../../variable/fontFamily';
import {scale} from '../../../../../../variable/sizes';
import Plus from '../../../../../../variable/svgs/Plus';

export default function Upload({text}) {
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.076)', 'rgba(143, 121, 217, 0.224)']}
        start={{x: 0.5, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0.3392, 0.9986]}
        style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Plus />
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...IBMPlexSans400,
    fontSize: scale(14),
    color: 'white',
    lineHeight: scale(16),
    flex: 1,
  },
});
