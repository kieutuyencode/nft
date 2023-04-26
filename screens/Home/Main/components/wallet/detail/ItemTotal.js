import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  customFontsize,
  customHeight,
  customMarginTop,
  customPaddingBottom,
  customPaddingHorizontal,
  customPaddingTop,
  customWidth,
  scale,
  scaleWidth,
} from '../../../../../../variable/sizes';
import Text400size16 from '../../../../../../components/texts/Text400size16';
import {IBMPlexSans700} from '../../../../../../variable/fontFamily';

export default function ItemTotal({img, number, text}) {
  return (
    <LinearGradient
      colors={['rgba(54, 30, 112, 0.8)', 'rgba(8, 2, 28, 0)']}
      locations={[0, 1]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 7.5936}}
      style={[styles.container, styles.border]}>
      <View style={styles.containText}>
        <Image source={img} style={styles.img} />
        <Text style={styles.text}>{number}</Text>
      </View>
      <LinearGradient
        colors={['rgba(244, 0, 116, 0.4)', 'rgba(37, 19, 81, 0.4)']}
        start={{x: 0.5, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0.3392, 0.9986]}
        style={[styles.border, styles.containNumber]}>
        <Text400size16 text={text} center />
      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  border: {
    borderRadius: scale(18),
    borderWidth: 2 * scaleWidth,
    borderColor: 'rgba(106, 49, 129, 0.2)',
  },
  containNumber: {
    ...customPaddingHorizontal(8),
    ...customPaddingTop(7),
    ...customPaddingBottom(12),
    ...customMarginTop(20),
  },
  containText: {
    alignItems: 'center',
    ...customMarginTop(15),
  },
  img: {
    ...customWidth(50),
    ...customHeight(50),
  },
  text: {
    ...IBMPlexSans700,
    ...customFontsize(16),
    color: 'white',
    ...customMarginTop(10),
  },
});
