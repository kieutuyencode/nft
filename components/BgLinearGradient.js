import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {scale, scaleWidth} from '../variable/sizes';

export default function BgLinearGradient({children}) {
  return (
    <LinearGradient
      colors={['rgba(80, 45, 159, 0.4)', 'rgba(8, 2, 28, 0)']}
      start={{x: 0.1, y: 0.9}}
      end={{x: 0.9, y: 0.1}}
      style={styles.container}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: scale(18),
    borderWidth: 2 * scaleWidth,
    borderColor: 'rgba(106, 49, 129, 0.2)',
    overflow: 'hidden',
  },
});
