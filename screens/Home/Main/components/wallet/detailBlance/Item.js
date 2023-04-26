import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  customFontsize,
  customMarginBottom,
  customMarginTop,
  customPaddingBottom,
  customPaddingHorizontal,
  customPaddingTop,
  customPaddingVertical,
  scale,
  scaleWidth,
} from '../../../../../../variable/sizes';
import {
  IBMPlexSans400,
  IBMPlexSans700,
} from '../../../../../../variable/fontFamily';
import {useNavigation} from '@react-navigation/native';

export default function Item({
  title,
  img1,
  img2,
  number1,
  number2,
  text1,
  text2,
}) {
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate('Detail')}>
      <LinearGradient
        colors={['rgba(54, 30, 112, 0.8)', 'rgba(8, 2, 28, 0)']}
        locations={[0, 1]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 7.5936}}
        style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.containerInner}>
          <View style={styles.inner}>
            <Image source={img1} style={styles.image} />
            <Text style={styles.text}>{text1}</Text>
            <LinearGradient
              colors={['rgba(80, 45, 159, 0.4)', 'rgba(8, 2, 28, 0)']}
              start={{x: 0.5, y: 0}}
              end={{x: 1, y: 1}}
              locations={[0.3392, 0.9986]}
              style={{
                borderRadius: scale(22.5),
                ...customPaddingHorizontal(14),
                ...customPaddingTop(1),
                ...customPaddingBottom(3),
              }}>
              <Text style={styles.number}>{number1}</Text>
            </LinearGradient>
          </View>
          <View style={styles.inner}>
            <Image source={img2} style={styles.image} />
            <Text style={styles.text}>{text2}</Text>
            <LinearGradient
              colors={['rgba(80, 45, 159, 0.4)', 'rgba(8, 2, 28, 0)']}
              start={{x: 0.5, y: 0}}
              end={{x: 1, y: 1}}
              locations={[0.3392, 0.9986]}
              style={{
                borderRadius: scale(22.5),
                ...customPaddingHorizontal(14),
                ...customPaddingTop(1),
                ...customPaddingBottom(3),
              }}>
              <Text style={styles.number}>{number2}</Text>
            </LinearGradient>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: scale(20),
    ...customPaddingTop(8),
    ...customMarginBottom(12),
    ...customPaddingBottom(12),
  },
  containerInner: {
    flexDirection: 'row',
    justifyContent: 'center',
    ...customMarginTop(16),
    columnGap: 52 * scaleWidth,
  },
  inner: {
    alignItems: 'center',
  },
  title: {
    ...IBMPlexSans700,
    ...customFontsize(20),
    color: 'white',
    textAlign: 'center',
  },
  image: {width: 50 * scaleWidth, height: 50 * scaleWidth},
  number: {
    ...IBMPlexSans400,
    ...customFontsize(13),
    color: 'white',
  },
  text: {
    ...IBMPlexSans400,
    ...customFontsize(16),
    color: 'white',
    ...customMarginBottom(4),
    ...customMarginTop(4),
  },
});
