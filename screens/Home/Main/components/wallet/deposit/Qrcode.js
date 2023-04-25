import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useLanguage} from '../../../../../../store/language';
import {
  copy,
  deposit,
  please,
  qrcode,
  save,
} from '../../../../../../language/home/main/wallet/deposit';
import Text700size24 from '../../../../../../components/texts/Text700size24';
import {
  IBMPlexSans400,
  IBMPlexSans500,
  IBMPlexSans600,
} from '../../../../../../variable/fontFamily';
import {scale} from '../../../../../../variable/sizes';
import QrCodeIcon from '../../../../../../variable/svgs/QrCode';
import LinearGradient from 'react-native-linear-gradient';
import {gradient, primary} from '../../../../../../variable/colors';

export default function Qrcode() {
  const language = useLanguage();

  return (
    <View>
      <Text700size24 text={deposit[language]} />
      <Text style={styles.text}>{please[language]}</Text>
      <View style={styles.qr}>
        <QrCodeIcon />
        <Text style={styles.text2}>{qrcode[language]}</Text>
        <Text style={styles.text3}>bnb136ns6lfw4zs5hg4n85vdth</Text>
      </View>
      <View style={styles.containBtn}>
        <LinearGradient
          colors={[primary, gradient]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.btn}>
          <TouchableOpacity>
            <Text style={styles.textBtn}>{copy[language]}</Text>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity
          style={[styles.btn, {backgroundColor: 'rgba(255, 255, 255, 0.2)'}]}>
          <Text style={styles.textBtn}>{save[language]}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    ...IBMPlexSans500,
    fontSize: scale(18),
    color: '#E30374',
    textAlign: 'center',
  },
  qr: {
    alignItems: 'center',
    marginTop: scale(46),
  },
  text2: {
    ...IBMPlexSans600,
    fontSize: scale(18),
    color: 'white',
    marginTop: scale(16),
  },
  text3: {
    ...IBMPlexSans400,
    fontSize: scale(18),
    color: 'white',
    marginTop: scale(8),
  },
  btn: {
    borderWidth: scale(1),
    borderRadius: 74,
    borderColor: 'rgba(255, 255, 255, 0.16)',
    paddingVertical: scale(12),
    flex: 1,
    overflow: 'hidden',
  },
  containBtn: {
    flexDirection: 'row',
    marginTop: scale(28),
    columnGap: scale(15),
  },
  textBtn: {
    ...IBMPlexSans600,
    fontSize: scale(14),
    color: 'white',
    textAlign: 'center',
    lineHeight: scale(16),
  },
});
