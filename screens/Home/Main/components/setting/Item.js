import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import ArrowRight from '../../../../../variable/svgs/ArrowRight';
import {IBMPlexSans400} from '../../../../../variable/fontFamily';
import {
  customFontsize,
  customPaddingVertical,
  scale,
  scaleWidth,
} from '../../../../../variable/sizes';

export default function Item({text, border, onPress}) {
  return (
    <View
      style={border && {borderBottomWidth: scaleWidth, borderColor: 'white'}}>
      <TouchableOpacity
        style={[styles.container, customPaddingVertical(border ? 18 : 10)]}
        onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
        <ArrowRight />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  text: {
    ...IBMPlexSans400,
    ...customFontsize(18),
    color: 'white',
    flex: 1,
    lineHeight: scale(20),
  },
});
