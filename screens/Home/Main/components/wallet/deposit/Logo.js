import {View, Text, StyleSheet, Image} from 'react-native';
import {scale} from '../../../../../../variable/sizes';
import {company1, company2} from '../../../../../../variable/images';
import LinearGradient from 'react-native-linear-gradient';
import {Roboto400} from '../../../../../../variable/fontFamily';

export default function Logo() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image source={company1} style={styles.img} />
        <LinearGradient
          colors={['rgba(244, 0, 116, 0.6)', 'rgba(8, 2, 28, 0)']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0.3392, 0.9986]}
          style={styles.item1}>
          <Text style={styles.text}>NOW Token</Text>
        </LinearGradient>
      </View>
      <View style={styles.item}>
        <Image source={company2} style={styles.img} />
        <LinearGradient
          colors={[
            'rgba(255, 255, 255, 0.1)',
            'rgba(8, 2, 28, 0)',
            'rgba(8, 2, 28, 0)',
            'rgba(255, 255, 255, 0.1)',
          ]}
          start={{x: 0.0, y: 0.0}}
          end={{x: 1.0, y: 1.0}}
          locations={[0.3392, 0.9986, 0.9986, 0.9986]}
          style={{borderRadius: 999}}>
          <Text style={styles.text}>USDT. BEP 20</Text>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: scale(24),
    marginHorizontal: scale(20),
    flexDirection: 'row',
    columnGap: scale(12),
  },
  img: {
    width: scale(50),
    height: scale(50),
    position: 'absolute',
    zIndex: 10,
  },
  item: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
  },
  item1: {
    borderColor: '#6A3181',
    borderWidth: scale(1),
    borderRadius: 999,
  },
  text: {
    ...Roboto400,
    fontSize: scale(16),
    color: 'white',
    lineHeight: scale(19),
    paddingVertical: scale(6),
    paddingLeft: scale(60),
  },
});
