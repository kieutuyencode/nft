import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {scale} from '../../../../../variable/sizes';
import More from '../../../../../variable/svgs/More';
import LinearGradient from 'react-native-linear-gradient';
import {IBMPlexSans400} from '../../../../../variable/fontFamily';
import {useLanguage} from '../../../../../store/language';
import {select} from '../../../../../language/home/main/swap';
import SwapVertical from '../../../../../variable/svgs/SwapVertical';

export default function SelectCurrency() {
  const language = useLanguage();

  return (
    <View style={{marginTop: scale(34)}}>
      <TouchableOpacity>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.076)', 'rgba(143, 121, 217, 0.224)']}
          start={{x: 0.5, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0.3392, 0.9986]}
          style={styles.container}>
          <Text style={styles.text}>0.0</Text>
          <Text style={[styles.text, styles.selectText]}>
            {select[language]}
          </Text>
          <More />
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <SwapVertical />
      </TouchableOpacity>
      <TouchableOpacity>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.076)', 'rgba(143, 121, 217, 0.224)']}
          start={{x: 0.5, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0.3392, 0.9986]}
          style={styles.container}>
          <Text style={styles.text}>0.0</Text>
          <Text style={[styles.text, styles.selectText]}>
            {select[language]}
          </Text>
          <More />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scale(10),
    paddingHorizontal: scale(14),
    borderRadius: 18,
  },
  text: {
    ...IBMPlexSans400,
    fontSize: scale(14),
    color: 'white',
    lineHeight: scale(16),
  },
  selectText: {
    flex: 1,
    textAlign: 'right',
    marginRight: scale(14),
  },
  icon: {
    marginVertical: scale(10),
    alignItems: 'center',
  },
});
