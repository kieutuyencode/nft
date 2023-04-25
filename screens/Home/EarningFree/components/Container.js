import {View, Text, StyleSheet} from 'react-native';
import BackgroundBack from '../../../../components/background/BackgroundBack';
import {scale} from '../../../../variable/sizes';
import LinearGradient from 'react-native-linear-gradient';

export default function Container({children, marginHorizontal}) {
  return (
    <BackgroundBack>
      <LinearGradient
        colors={['rgba(80, 45, 159, 0.4)', 'rgba(8, 2, 28, 0)']}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        locations={[0.3392, 0.9986]}
        useAngle={true}
        angle={115.36}
        style={[
          styles.container,
          marginHorizontal && {marginHorizontal: scale(20)},
        ]}>
        {children}
      </LinearGradient>
    </BackgroundBack>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    borderWidth: scale(2),
    borderColor: 'rgba(106, 49, 129, 0.2)',
    marginTop: scale(20),
  },
});
