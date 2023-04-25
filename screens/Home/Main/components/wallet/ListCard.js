import {ScrollView, StyleSheet, View} from 'react-native';
import Card from './Card';
import {scale, scaleWidth} from '../../../../../variable/sizes';
import {useLanguage} from '../../../../../store/language';
import {
  nftCard,
  nftReal,
  virtual,
  virtualDesc,
} from '../../../../../language/home/main/wallet/wallet';
import Earn2 from '../../../../../variable/svgs/Earn2';
import {useNavigation} from '@react-navigation/native';

export default function ListCard() {
  const language = useLanguage();
  const {navigate} = useNavigation();

  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      <View style={styles.width}>
        <Card
          icon={<Earn2 />}
          title={virtual[language]}
          description={virtualDesc[language]}
        />
      </View>
      <View style={styles.width}>
        <Card
          icon={<Earn2 />}
          title={nftCard[language]}
          description={virtualDesc[language]}
        />
      </View>
      <View style={styles.width}>
        <Card
          icon={<Earn2 />}
          title={nftReal[language]}
          description={virtualDesc[language]}
          onPress={() => navigate('EstateNFT')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: scale(36),
    paddingBottom: scale(6),
    paddingRight: scale(30),
    columnGap: 22 * scaleWidth,
    paddingLeft: scale(20),
    marginBottom: scale(130),
    marginTop: scale(16),
  },
  width: {
    width: (scaleWidth * 375 - 20 * 2 * scaleWidth - 22 * scaleWidth) / 2,
  },
});
