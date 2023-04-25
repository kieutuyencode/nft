import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  customFontsize,
  customMarginBottom,
  customMarginHorizontal,
  customMarginLeft,
  customMarginTop,
  customPaddingBottom,
  customPaddingHorizontal,
  customPaddingTop,
  customPaddingVertical,
  scale,
} from '../../variable/sizes';
import Logo1 from '../../variable/svgs/Logo1';
import NumberWallet from '../../variable/svgs/NumberWallet';
import {IBMPlexSans400} from '../../variable/fontFamily';
import Background1 from './Background1';
import ButtonBack from '../buttons/ButtonBack';
import LinearGradient from 'react-native-linear-gradient';

export default function BackgroundTabSetting({children}) {
  return (
    <View style={{flex: 1}}>
      <Background1>
        <View style={styles.container}>
          <Logo1 />
          <View
            style={[
              styles.container,
              customPaddingHorizontal(10),
              customPaddingTop(3),
              customPaddingBottom(7),
              {backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: 20},
            ]}>
            <View style={customMarginTop(4)}>
              <NumberWallet />
            </View>
            <View style={customMarginLeft(7)}>
              <Text style={styles.text}>1 986 086.06</Text>
            </View>
          </View>
        </View>
        <LinearGradient
          colors={['rgba(80, 45, 159, 0.4)', 'rgba(8, 2, 28, 0)']}
          start={{x: 0.0, y: 0.5}}
          end={{x: 1.0, y: 0.5}}
          locations={[0.3392, 0.9986]}
          style={styles.content}>
          <ScrollView>
            <View style={[customMarginBottom(20), {position: 'relative'}]}>
              <View style={styles.back}>
                <ButtonBack />
              </View>
              <View style={[customMarginTop(10), customMarginHorizontal(20)]}>
                <View style={customMarginTop(5)}>{children}</View>
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      </Background1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...customPaddingVertical(12),
    ...customPaddingHorizontal(20),
  },
  text: {
    ...IBMPlexSans400,
    color: 'white',
    ...customFontsize(14),
  },
  back: {
    position: 'absolute',
    top: scale(6),
    left: scale(6),
    zIndex: 10,
  },
  content: {
    borderWidth: scale(2),
    borderColor: 'rgba(106, 49, 129, 0.2)',
  },
});
