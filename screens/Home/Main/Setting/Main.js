import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BackgroundHeader from '../../../../components/background/BackgroundHeader';
import Text700size24 from '../../../../components/texts/Text700size24';
import {handlerLanguage, useLanguage} from '../../../../store/language';
import {
  Language,
  about,
  chanPassword,
  code,
  help,
  history,
  link,
  listing,
  logout,
  myassets,
  presale,
  promotion,
  security12,
  security2fa,
  setting,
  wellcome,
} from '../../../../language/home/main/setting/setting';
import {
  customFontsize,
  customMarginBottom,
  customMarginHorizontal,
  customMarginTop,
  scale,
  scaleWidth,
} from '../../../../variable/sizes';
import Item from '../components/setting/Item';
import Button from '../components/setting/Button';
import ItemWithIcon from '../components/setting/ItemWithIcon';
import Telegram from '../../../../variable/svgs/Telegram';
import Twitter from '../../../../variable/svgs/Twitter';
import Reddit from '../../../../variable/svgs/Reddit';
import Facebook from '../../../../variable/svgs/Facebook';
import Instagram from '../../../../variable/svgs/Instagram';
import Youtube from '../../../../variable/svgs/Youtube';
import LinearGradient from 'react-native-linear-gradient';
import {gradient, primary} from '../../../../variable/colors';
import {IBMPlexSans500} from '../../../../variable/fontFamily';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

export default function Main() {
  const language = useLanguage();
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  return (
    <BackgroundHeader>
      <View style={[customMarginHorizontal(46), customMarginTop(20)]}>
        <Text700size24 text={setting[language]} />
        <View style={[customMarginTop(4)]}>
          <Item text={presale[language]} />
        </View>
        <Item text={wellcome[language]} />
      </View>
      <View style={styles.containBtn}>
        <View style={{flex: 1}}>
          <Button
            text={link[language]}
            onPress={() => navigate('ReferralLink')}
          />
        </View>
        <View style={{flex: 1}}>
          <Button text={code[language]} />
        </View>
      </View>
      <View style={customMarginHorizontal(46)}>
        <Item text={promotion[language]} border />
        <Item text={listing[language]} border />
        <Item text={history[language]} border />
        <Item text={security12[language]} border />
        <Item
          text={security2fa[language]}
          border
          onPress={() => navigate('AuthenCode')}
        />
        <Item
          text={chanPassword[language]}
          border
          onPress={() => navigate('ChangePass')}
        />
        <Item text="KYC" border onPress={() => navigate('KYC')} />
        <Item
          text={Language[language]}
          border
          onPress={() =>
            dispatch(handlerLanguage(language === 'vn' ? 'en' : 'vn'))
          }
        />
        <Item
          text={myassets[language]}
          border
          onPress={() => navigate('Cart')}
        />
        <View style={[customMarginTop(66)]}>
          <ItemWithIcon text="Telegram" icon={<Telegram />} />
          <ItemWithIcon text="Twitter" icon={<Twitter />} />
          <ItemWithIcon text="Reddit" icon={<Reddit />} />
          <ItemWithIcon text="Facebook" icon={<Facebook />} />
          <ItemWithIcon text="Instagram" icon={<Instagram />} />
          <ItemWithIcon text="Youtube" icon={<Youtube />} />
        </View>
        <View style={customMarginTop(20)}>
          <Item text={help[language]} onPress={() => navigate('Contact')} />
          <Item text={about[language]} />
        </View>
      </View>
      <View style={[customMarginHorizontal(24), customMarginTop(46)]}>
        <TouchableOpacity>
          <LinearGradient
            colors={[primary, gradient]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{
              borderWidth: scaleWidth,
              borderColor: 'rgba(255, 255, 255, 0.16)',
              borderRadius: 74,
            }}>
            <Text style={styles.text}>{logout[language]}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </BackgroundHeader>
  );
}

const styles = StyleSheet.create({
  containBtn: {
    flexDirection: 'row',
    ...customMarginHorizontal(24),
    columnGap: 26 * scaleWidth,
    ...customMarginTop(40),
    ...customMarginBottom(36),
  },
  text: {
    ...IBMPlexSans500,
    ...customFontsize(24),
    color: 'white',
    textAlign: 'center',
    lineHeight: scale(28),
    paddingVertical: scale(8),
  },
});
