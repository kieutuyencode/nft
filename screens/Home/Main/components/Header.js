import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Logo1 from '../../../../variable/svgs/Logo1';
import {IBMPlexSans400} from '../../../../variable/fontFamily';
import {
  customFontsize,
  customMarginLeft,
  customMarginTop,
  customPaddingBottom,
  customPaddingHorizontal,
  customPaddingTop,
} from '../../../../variable/sizes';
import NumberWallet from '../../../../variable/svgs/NumberWallet';

export default function Header() {
  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    ...IBMPlexSans400,
    color: 'white',
    ...customFontsize(14),
  },
});
