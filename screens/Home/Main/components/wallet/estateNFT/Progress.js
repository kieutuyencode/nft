import {View, Text, StyleSheet} from 'react-native';
import {scale} from '../../../../../../variable/sizes';
import {IBMPlexSans400} from '../../../../../../variable/fontFamily';
import LinearGradient from 'react-native-linear-gradient';

export default function Progress({
  label1,
  number1,
  label2,
  number2,
  label3,
  progress,
}) {
  return (
    <View>
      <View style={styles.container}>
        <LinearGradient
          colors={['#F40074', '#502D9F']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          locations={[0.0169, 0.9775]}
          style={[styles.progress, {width: `${progress}%`}]}></LinearGradient>
      </View>
      <View style={styles.desc}>
        <Text style={styles.text}>
          {number1} {label1}
        </Text>
        <Text style={styles.text}>
          {label2} {number2} {label3}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: scale(18),
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 999,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  text: {
    ...IBMPlexSans400,
    fontSize: scale(14),
    color: 'white',
  },
  desc: {
    marginTop: scale(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progress: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    borderRadius: 999,
  },
});
