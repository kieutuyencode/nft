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
  scale,
} from '../../variable/sizes';
import NumberWallet from '../../variable/svgs/NumberWallet';
import {IBMPlexSans400} from '../../variable/fontFamily';
import Background1 from './Background1';
import ButtonBack from '../buttons/ButtonBack';

export default function BackgroundBackFull({children}) {
  return (
    <View style={{flex: 1}}>
      <Background1>
        <View style={styles.container}>
          <ButtonBack />
          <View
            style={[
              customPaddingHorizontal(10),
              customPaddingTop(3),
              customPaddingBottom(7),
              {
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: scale(20),
                flexDirection: 'row',
                alignItems: 'center',
              },
            ]}>
            <View style={customMarginTop(4)}>
              <NumberWallet />
            </View>
            <View style={customMarginLeft(7)}>
              <Text style={styles.text}>1 986 086.06</Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={[customMarginBottom(130), customMarginHorizontal(24)]}>
            {children}
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
    marginVertical: scale(16),
    marginHorizontal: scale(24),
  },
  text: {
    ...IBMPlexSans400,
    color: 'white',
    ...customFontsize(14),
  },
});
