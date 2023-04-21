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
} from '../../variable/sizes';
import Logo1 from '../../variable/svgs/Logo1';
import NumberWallet from '../../variable/svgs/NumberWallet';
import {IBMPlexSans400} from '../../variable/fontFamily';
import Background1 from './Background1';
import ButtonBack from '../buttons/ButtonBack';
import Text700size24 from '../texts/Text700size24';

export default function BackgroundHeaderBack({children, title}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Logo1 />
        <View
          style={[
            styles.container,
            customPaddingHorizontal(10),
            customPaddingTop(3),
            customPaddingBottom(9),
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
      <Background1>
        <ScrollView>
          <View style={[customMarginBottom(130), customMarginHorizontal(20)]}>
            <View style={[customMarginTop(10), {position: 'relative'}]}>
              <View style={styles.back}>
                <ButtonBack />
              </View>
              <View style={customMarginTop(5)}>
                <Text700size24 text={title} />
              </View>
              <View style={customMarginTop(24)}>{children}</View>
            </View>
          </View>
        </ScrollView>
      </Background1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    ...customPaddingVertical(7),
    ...customPaddingHorizontal(20),
  },
  text: {
    ...IBMPlexSans400,
    color: 'white',
    ...customFontsize(14),
  },
  back: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
  },
});
