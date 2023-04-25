import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  customFontsize,
  customMarginBottom,
  customMarginLeft,
  customMarginTop,
  customPaddingBottom,
  customPaddingHorizontal,
  customPaddingTop,
  customPaddingVertical,
} from '../../variable/sizes';
import NumberWallet from '../../variable/svgs/NumberWallet';
import {IBMPlexSans400} from '../../variable/fontFamily';
import Background1 from './Background1';
import ButtonBack from '../buttons/ButtonBack';

export default function BackgroundBack({children}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <ButtonBack />
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
      <Background1>
        <ScrollView>
          <View style={customMarginBottom(130)}>{children}</View>
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
    ...customPaddingHorizontal(14),
  },
  text: {
    ...IBMPlexSans400,
    color: 'white',
    ...customFontsize(14),
  },
});
