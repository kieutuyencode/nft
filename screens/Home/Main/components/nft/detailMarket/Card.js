import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from '../../../../../../variable/sizes';

export default function Card({children}) {
  return (
    <LinearGradient
      colors={['rgba(80, 45, 159, 0.4)', 'rgba(8, 2, 28, 0)']}
      start={{x: 0.0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      locations={[0.3392, 0.9986]}
      style={styles.container}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: scale(2),
    borderColor: 'rgba(106, 49, 129, 0.2)',
    borderRadius: 18,
    overflow: 'hidden',
  },
});
