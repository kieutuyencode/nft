import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from '../../../../../../variable/sizes';
import {IBMPlexSans400} from '../../../../../../variable/fontFamily';

export default function Feature({text}) {
  return (
    <LinearGradient
      colors={[
        'rgba(80, 45, 159, 0.4)',
        'rgba(9, 3, 30, 0.00510205)',
        'rgba(8, 2, 28, 0)',
      ]}
      start={{x: 0.0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      locations={[0.3392, 0.9985, 0.9986]}
      style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: scale(2),
    borderRadius: 999,
    borderColor: 'rgba(106, 49, 129, 0.2)',
    width: scale(104),
  },
  text: {
    ...IBMPlexSans400,
    fontSize: scale(14),
    color: 'white',
    lineHeight: scale(17),
    textAlign: 'center',
    paddingVertical: scale(8),
  },
});
