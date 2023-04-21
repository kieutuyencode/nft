import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  customFontsize,
  customMarginLeft,
  customMarginTop,
  customPaddingBottom,
  customPaddingHorizontal,
  customPaddingTop,
  scaleWidth,
} from '../../../../../variable/sizes';
import LinearGradient from 'react-native-linear-gradient';
import {
  IBMPlexSans400,
  IBMPlexSans700,
} from '../../../../../variable/fontFamily';
import ArrowBtnRight from '../../../../../variable/svgs/ArrowBtnRight';

export default function Card({icon, title, description}) {
  return (
    <LinearGradient
      colors={['rgba(80, 45, 159, 0.4)', 'rgba(8, 2, 28, 0)']}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}
      locations={[0.3392, 0.9986]}
      useAngle={true}
      angle={115.36}
      style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <TouchableOpacity style={customMarginLeft(6)}>
          <ArrowBtnRight />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2 * scaleWidth,
    borderRadius: 18,
    borderColor: 'rgba(106, 49, 129, 0.2)',
    position: 'relative',
    ...customPaddingHorizontal(13),
    ...customPaddingBottom(12),
    ...customPaddingTop(73),
    flex: 1,
    justifyContent: 'flex-end',
  },
  icon: {
    position: 'absolute',
    top: -40 * scaleWidth,
    right: -22 * scaleWidth,
  },
  title: {
    ...IBMPlexSans700,
    ...customFontsize(14),
    color: 'white',
    flex: 1,
  },
  description: {
    ...customMarginTop(7),
    ...IBMPlexSans400,
    ...customFontsize(10),
    color: 'white',
    flex: 1,
  },
});
