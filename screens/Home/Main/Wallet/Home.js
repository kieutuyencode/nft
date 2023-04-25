import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Background1 from '../../../../components/background/Background1';
import Header from '../components/Header';
import {
  customFontsize,
  customLineHeight,
  customMarginHorizontal,
  customMarginRight,
  customMarginTop,
  customPaddingLeft,
  scaleWidth,
} from '../../../../variable/sizes';
import Hexagon from '../../../../variable/svgs/Hexagon';
import Logo2 from '../../../../variable/svgs/Logo2';
import {
  IBMPlexSans400,
  IBMPlexSans500,
  IBMPlexSans600,
} from '../../../../variable/fontFamily';
import {useLanguage} from '../../../../store/language';
import {
  available,
  detailBalance,
} from '../../../../language/home/main/wallet/wallet';
import ArrowBtnRight from '../../../../variable/svgs/ArrowBtnRight';
import ListButton from '../components/wallet/ListButton';
import Remain from '../components/wallet/Remain';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const language = useLanguage();
  const {navigate} = useNavigation();

  return (
    <Background1>
      <ScrollView>
        <View style={styles.container}>
          <View style={customMarginTop(11)}>
            <Header />
          </View>
          <View style={{position: 'relative'}}>
            <Hexagon />
            <View style={styles.innerHexagon}>
              <View style={{alignItems: 'center'}}>
                <Logo2 />
                <Text style={styles.textHexagon}>1 986 086.06</Text>
                <Text style={styles.textHexagonSmall}>
                  {available[language]} ~ $6900
                </Text>
                <TouchableOpacity
                  style={styles.buttonHexagon}
                  onPress={() => navigate('DetailBlance')}>
                  <Text
                    style={[
                      styles.textHexagonSmall,
                      IBMPlexSans400,
                      customMarginRight(3),
                    ]}>
                    {detailBalance[language]}
                  </Text>
                  <ArrowBtnRight />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ListButton />
        </View>
        <Remain />
      </ScrollView>
    </Background1>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...customMarginHorizontal(20),
  },
  innerHexagon: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 70 * scaleWidth,
  },
  textHexagon: {
    color: 'white',
    ...IBMPlexSans600,
    ...customFontsize(32),
  },
  textHexagonSmall: {
    ...IBMPlexSans500,
    ...customFontsize(12),
    color: 'white',
    ...customLineHeight(16),
  },
  buttonHexagon: {
    borderWidth: scaleWidth,
    borderColor: 'rgba(255, 255, 255, 0.16)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 74,
    ...customPaddingLeft(9),
    flexDirection: 'row',
    alignItems: 'center',
    ...customMarginTop(10),
  },
});
