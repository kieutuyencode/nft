import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IBMPlexSans700} from '../../../../../../variable/fontFamily';
import {scale} from '../../../../../../variable/sizes';

export default function NumberTable1({number}) {
  return (
    <LinearGradient
      colors={['rgba(255, 255, 255, 0.076)', 'rgba(143, 121, 217, 0.224)']}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 0.0}}
      locations={[0.3392, 0.9986]}
      style={styles.container}>
      <Text style={styles.text}>{number}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: scale(18),
  },
  text: {
    ...IBMPlexSans700,
    fontSize: scale(16),
    color: 'white',
    textAlign: 'center',
    paddingTop: scale(6),
    paddingBottom: scale(8),
  },
});
