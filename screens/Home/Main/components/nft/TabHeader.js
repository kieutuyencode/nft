import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useLanguage} from '../../../../../store/language';
import {Roboto400} from '../../../../../variable/fontFamily';
import {scale} from '../../../../../variable/sizes';
import {useNavigation} from '@react-navigation/native';

export default function TabHeader({tab}) {
  const language = useLanguage();
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      {[
        {text: market[language], link: 'Market'},
        {text: card[language], link: 'Card'},
        {text: virtual[language], link: 'Virtual'},
      ].map((item, index) => (
        <TouchableOpacity key={index} onPress={() => navigate(item.link)}>
          {tab === index ? (
            <LinearGradient
              colors={['rgba(244, 0, 116, 0.6)', 'rgba(8, 2, 28, 0)']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              locations={[0.3392, 0.9986]}
              style={[styles.btn, styles.active]}>
              <Text style={styles.text}>{item.text}</Text>
            </LinearGradient>
          ) : (
            <LinearGradient
              colors={[
                'rgba(255, 255, 255, 0.1)',
                'rgba(8, 2, 28, 0)',
                'rgba(8, 2, 28, 0)',
                'rgba(255, 255, 255, 0.1)',
              ]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              locations={[0.3392, 0.9986, 0.9986, 0.9986]}
              style={[styles.btn]}>
              <Text style={[styles.text, {padding: scale(1)}]}>
                {item.text}
              </Text>
            </LinearGradient>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: scale(14),
  },
  text: {
    ...Roboto400,
    fontSize: scale(14),
    color: 'white',
    lineHeight: scale(16),
  },
  btn: {
    borderRadius: 999,
    paddingHorizontal: scale(12),
    paddingVertical: scale(10),
  },
  active: {
    borderWidth: scale(1),
    borderColor: '#6A3181',
  },
});

const market = {en: 'NFT Marketplace', vn: 'Chợ NFT'};

const card = {en: 'NFT Card', vn: 'Thẻ NFT'};

const virtual = {en: 'Virtual ...', vn: 'Máy ảo'};
