import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {company1} from '../../../../../../variable/images';
import {scale} from '../../../../../../variable/sizes';
import Text400size16 from '../../../../../../components/texts/Text400size16';
import {useLanguage} from '../../../../../../store/language';
import {totalProfit2} from '../../../../../../language/home/main/wallet/detail';
import {IBMPlexSans700} from '../../../../../../variable/fontFamily';

export default function TotalTable1() {
  const language = useLanguage();

  return (
    <LinearGradient
      colors={['rgba(255, 215, 5, 0.4)', 'rgba(80, 45, 159, 0.4)']}
      start={{x: 0.0, y: 0.0}}
      end={{x: 1.0, y: 1.0}}
      locations={[0.3392, 0.9986]}
      style={styles.container}>
      <View style={styles.containerInner}>
        <Image source={company1} style={styles.image} />
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.076)', 'rgba(143, 121, 217, 0.224)']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 0.0}}
          locations={[0.3392, 0.9986]}
          style={styles.containLabel}>
          <Text400size16 text={totalProfit2[language]} />
          <Text style={styles.number}>1 986 086.06</Text>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(9),
    paddingVertical: scale(14),
  },
  containLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: scale(6),
    paddingBottom: scale(8),
    paddingLeft: scale(66),
    borderRadius: 999,
  },
  containerInner: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: scale(50),
    height: scale(50),
    position: 'absolute',
    zIndex: 10,
  },
  number: {
    ...IBMPlexSans700,
    fontSize: scale(16),
    color: 'white',
    flex: 1,
  },
});
