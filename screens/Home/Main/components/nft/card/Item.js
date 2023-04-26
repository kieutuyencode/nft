import {View, Text, StyleSheet, Image} from 'react-native';
import {scale} from '../../../../../../variable/sizes';
import LinearGradient from 'react-native-linear-gradient';
import {
  IBMPlexSans400,
  IBMPlexSans700,
} from '../../../../../../variable/fontFamily';
import {useLanguage} from '../../../../../../store/language';
import {classicImg, goldImg} from '../../../../../../variable/images';
import ArrowRightSm from '../../../../../../variable/svgs/ArrowRightSm';
import QrCard from '../../../../../../variable/svgs/QrCard';
import Button from '../../../../../../components/buttons/Button';

export default function Item({type}) {
  const options = type === 'Classic' ? classic : type === 'Gold' ? gold : null;
  const language = useLanguage();

  return (
    <View>
      <LinearGradient
        {...options}
        style={[
          styles.container,
          type === 'Classic'
            ? styles.classic
            : type === 'Gold'
            ? styles.gold
            : null,
        ]}>
        <View style={styles.containText}>
          <View>
            <Text style={styles.textBig}>
              {type === 'Classic'
                ? textBigcl[language]
                : type === 'Gold'
                ? textBiggold[language]
                : null}
            </Text>
            <View style={{marginTop: scale(7)}}>
              <Text style={styles.textBig}>
                {type === 'Classic'
                  ? '$500'
                  : type === 'Gold'
                  ? '$3,000'
                  : null}
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.containTextSm}>
              <ArrowRightSm />
              <Text style={styles.textSm}>
                {type === 'Classic' ? 11 : type === 'Gold' ? 13 : null} % /
                {monthly[language]}
              </Text>
            </View>
            <View style={{marginTop: scale(7)}}>
              <View style={styles.containTextSm}>
                <ArrowRightSm />
                <Text style={styles.textSm}>24 {months[language]}</Text>
              </View>
            </View>
          </View>
        </View>
        {type === 'Classic' ? (
          <Image source={classicImg} style={styles.img} />
        ) : type === 'Gold' ? (
          <Image source={goldImg} style={styles.img} />
        ) : null}
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View
            style={[
              styles.containBtn,
              type === 'Classic'
                ? styles.containBtnCl
                : type === 'Gold'
                ? styles.containBtnGold
                : null,
            ]}>
            <View style={{position: 'relative', justifyContent: 'center'}}>
              <QrCard />
              <View style={{position: 'absolute', marginLeft: scale(48)}}>
                <Button
                  text={buynow[language]}
                  font={IBMPlexSans700}
                  size={14}
                  lineHeight={16}
                  vertical={6}
                  horizontal={16}
                  angle
                  borderNone
                />
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
      <Text style={styles.text}>
        {type === 'Classic'
          ? textClassic[language]
          : type === 'Gold'
          ? textGold[language]
          : null}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: scale(308),
    height: scale(194),
    backgroundColor: 'white',
    borderRadius: scale(18),
    position: 'relative',
  },
  classic: {
    borderWidth: scale(1),
    borderColor: '#C20767',
  },
  gold: {
    borderWidth: scale(1),
    borderColor: '#FFD880',
  },
  text: {
    ...IBMPlexSans700,
    fontSize: scale(20),
    color: 'white',
    marginTop: scale(16),
  },
  img: {
    position: 'absolute',
    width: scale(223),
    height: scale(106),
    top: scale(8),
    right: scale(12),
  },
  textBig: {
    ...IBMPlexSans700,
    fontSize: scale(20),
    color: 'white',
    lineHeight: scale(22),
  },
  textSm: {
    ...IBMPlexSans400,
    fontSize: scale(12),
    color: 'white',
    lineHeight: scale(14),
  },
  containText: {
    flexDirection: 'row',
    marginTop: scale(14),
    marginLeft: scale(30),
    marginRight: scale(18),
    justifyContent: 'space-between',
  },
  containTextSm: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: scale(9),
  },
  containBtn: {
    backgroundColor: 'black',
    marginBottom: scale(28),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scale(7),
  },
  containBtnCl: {
    backgroundColor: '#9B0A5C',
  },
  containBtnGold: {
    backgroundColor: '#FEC874',
  },
});

const classic = {
  colors: ['#4E1145', '#DA046E'],
  start: {x: 0.0, y: 0.5},
  end: {x: 1, y: 0.5},
  useAngle: true,
  angle: 247.1,
};

const gold = {
  colors: ['#CCAC59', '#F7B047'],
  start: {x: 0.0, y: 0.5},
  end: {x: 1, y: 0.5},
};

const textClassic = {
  en: 'Classic NFT Card',
  vn: 'Thẻ NFT cổ điển',
};

const textGold = {
  en: 'Gold NFT Card',
  vn: 'Thẻ NFT vàng',
};

const textBigcl = {
  en: 'Classic',
  vn: 'Cổ điển',
};

const textBiggold = {
  en: 'Gold',
  vn: 'Vàng',
};

const monthly = {
  en: 'monthly',
  vn: 'hằng tháng',
};

const months = {
  en: 'months',
  vn: 'tháng',
};

const buynow = {
  en: 'BUY NOW',
  vn: 'MUA NGAY',
};
