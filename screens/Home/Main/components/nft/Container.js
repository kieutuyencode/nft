import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  customFontsize,
  customMarginHorizontal,
  customMarginLeft,
  customMarginTop,
  customMarginVertical,
  customPaddingBottom,
  customPaddingHorizontal,
  customPaddingTop,
  customPaddingVertical,
  scale,
} from '../../../../../variable/sizes';
import NumberWallet from '../../../../../variable/svgs/NumberWallet';
import {IBMPlexSans400} from '../../../../../variable/fontFamily';
import Logo1 from '../../../../../variable/svgs/Logo1';
import Background1 from '../../../../../components/background/Background1';
import TabHeader from './TabHeader';

export default function Container({children, tab, full}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Logo1 />
        <View
          style={[
            styles.container,
            customPaddingHorizontal(10),
            customPaddingTop(3),
            customPaddingBottom(7),
            {
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: scale(20),
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
      <Background1>
        <View style={[customMarginHorizontal(full ? 0 : 22), {flex: 1}]}>
          <View style={customMarginHorizontal(full ? 22 : 0)}>
            <TabHeader tab={tab} />
          </View>
          <ScrollView>
            <View style={{paddingTop: scale(46)}}>{children}</View>
          </ScrollView>
        </View>
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
});
