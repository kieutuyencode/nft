import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {bgclaim, mintNFT} from '../../../../../variable/images';
import {useLanguage} from '../../../../../store/language';
import {
  claim,
  earningNow,
  getNow,
  gotoShop,
  itfree,
  nftMarket,
  shareLink,
} from '../../../../../language/home/main/wallet/wallet';
import {
  IBMPlexSans400,
  IBMPlexSans500,
  IBMPlexSans700,
} from '../../../../../variable/fontFamily';
import {
  customFontsize,
  customHeight,
  customMarginBottom,
  customMarginLeft,
  customMarginTop,
  customPaddingBottom,
  customPaddingHorizontal,
  customPaddingTop,
  customPaddingVertical,
  customWidth,
  scaleWidth,
} from '../../../../../variable/sizes';
import ButtonPadding from '../../../../../components/buttons/ButtonPadding';
import ArrowBtnRight from '../../../../../variable/svgs/ArrowBtnRight';
import LinearGradient from 'react-native-linear-gradient';
import ListCard from './ListCard';

export default function Remain() {
  const language = useLanguage();

  return (
    <View style={[customMarginTop(29), customMarginBottom(130)]}>
      <View style={{borderRadius: 18, overflow: 'hidden'}}>
        <ImageBackground source={bgclaim}>
          <View style={styles.container}>
            <Text style={styles.text}>{claim[language]}</Text>
            <Text style={styles.textBig}>500 Token</Text>
            <Text style={styles.text}>{itfree[language]}</Text>
            <View style={customMarginTop(10)}>
              <ButtonPadding
                text={earningNow[language]}
                top={8}
                bottom={13}
                horizontal={16}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={[styles.shareLink, styles.flex]}>
        <Text style={styles.textShareLink}>{shareLink[language]}</Text>
        <TouchableOpacity>
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0)']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={[styles.flex, customMarginLeft(7), styles.btn]}>
            <Text style={styles.textGetNow}>{getNow[language]}</Text>
            <ArrowBtnRight />
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={{borderRadius: 14, overflow: 'hidden'}}>
        <ImageBackground source={mintNFT}>
          <View style={styles.nft}>
            <Text style={styles.nftText}>{nftMarket[language]}</Text>
            <TouchableOpacity style={styles.nftBtn}>
              <Text style={styles.nftTextSm}>{gotoShop[language]}</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <ListCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...customPaddingHorizontal(16),
    ...customPaddingTop(11),
    ...customPaddingBottom(15),
  },
  text: {
    ...IBMPlexSans500,
    ...customFontsize(24),
    color: 'white',
  },
  textBig: {
    ...IBMPlexSans700,
    ...customFontsize(32),
    color: 'white',
  },
  shareLink: {
    borderRadius: 11,
    backgroundColor: 'rgba(8, 2, 28, 0.5)',
    ...customPaddingHorizontal(16),
    ...customPaddingVertical(12),
    ...customMarginTop(24),
    ...customMarginBottom(22),
  },
  textShareLink: {
    ...IBMPlexSans500,
    ...customFontsize(16),
    color: 'white',
    flex: 1,
  },
  textGetNow: {
    ...IBMPlexSans400,
    ...customFontsize(14),
    color: 'white',
    ...customPaddingHorizontal(12),
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    borderRadius: 74,
    borderWidth: scaleWidth,
    borderColor: 'rgba(255, 255, 255, 0.16)',
  },
  nft: {
    ...customHeight(181),
    alignItems: 'center',
    justifyContent: 'center',
  },
  nftText: {
    ...IBMPlexSans700,
    ...customFontsize(20),
    color: 'white',
  },
  nftTextSm: {
    ...IBMPlexSans400,
    ...customFontsize(16),
    color: 'white',
  },
  nftBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 74,
    borderWidth: scaleWidth,
    borderColor: 'rgba(255, 255, 255, 0.16)',
    ...customPaddingBottom(8),
    ...customPaddingTop(3),
    ...customPaddingHorizontal(27),
    ...customMarginTop(10),
  },
});