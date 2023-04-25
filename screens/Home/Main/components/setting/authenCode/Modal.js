import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Background1 from '../../../../../../components/background/Background1';
import {scale} from '../../../../../../variable/sizes';
import LinearGradient from 'react-native-linear-gradient';
import {IBMPlexSans700} from '../../../../../../variable/fontFamily';
import Close from '../../../../../../variable/svgs/Close';
import {useNavigation} from '@react-navigation/native';
import Button1 from '../../../../../../components/buttons/Button1';

export default function Modal({title, children, text}) {
  const {goBack} = useNavigation();

  return (
    <Background1>
      <View style={{position: 'relative'}}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.076)', 'rgba(143, 121, 217, 0.224)']}
          start={{x: 0.5, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0.3392, 0.9986]}
          style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          {children}
          <View style={{alignItems: 'center', marginTop: scale(20)}}>
            <Button1 text={text} width={154} vertical={9} />
          </View>
        </LinearGradient>
        <TouchableOpacity style={styles.close} onPress={() => goBack()}>
          <Close />
        </TouchableOpacity>
      </View>
    </Background1>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(20),
    marginTop: scale(26),
    borderWidth: scale(2),
    padding: scale(20),
    borderColor: 'rgba(106, 49, 129, 0.2)',
    borderRadius: 18,
  },
  title: {
    ...IBMPlexSans700,
    fontSize: scale(16),
    color: 'white',
    lineHeight: scale(18),
    marginBottom: scale(20),
  },
  close: {
    position: 'absolute',
    top: scale(12 + 26),
    right: scale(12 + 20),
    zIndex: 10,
  },
});
