import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {IBMPlexSans400} from '../../../../../variable/fontFamily';
import {
  customFontsize,
  customMarginRight,
  customMarginVertical,
  scaleWidth,
} from '../../../../../variable/sizes';

export default function ItemWithIcon({text, icon}) {
  return (
    <View style={{borderBottomWidth: scaleWidth, borderColor: 'white'}}>
      <TouchableOpacity style={[styles.container]}>
        <View style={[customMarginVertical(10), customMarginRight(10)]}>
          {icon}
        </View>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  text: {
    ...IBMPlexSans400,
    ...customFontsize(14),
    color: 'white',
  },
});
