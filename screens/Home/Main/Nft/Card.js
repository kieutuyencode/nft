import {View, Text, StyleSheet} from 'react-native';
import Container from '../components/nft/Container';
import {useLanguage} from '../../../../store/language';
import Text700size24 from '../../../../components/texts/Text700size24';
import {title} from '../../../../language/home/main/nft/card';
import Text400size16 from '../../../../components/texts/Text400size16';
import {desc} from '../../../../language/home/main/nft/market';
import {scale} from '../../../../variable/sizes';
import ListItem from '../components/nft/card/ListItem';
import HistoryBorder from '../../../../components/history/HistoryBorder';
import {
  description,
  historyCommission,
  userName,
} from '../../../../language/home/main/wallet/detail';

export default function Card() {
  const language = useLanguage();

  return (
    <Container tab={1} full>
      <Text700size24 text={title[language]} />
      <View style={styles.containTextDesc}>
        <Text400size16 text={desc[language]} center />
      </View>
      <ListItem />
      <View
        style={{
          marginBottom: scale(130),
          marginTop: scale(24),
          marginHorizontal: scale(22),
        }}>
        <HistoryBorder
          title={historyCommission[language]}
          label1={userName[language]}
          label2={description[language]}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  containTextDesc: {
    marginTop: scale(6),
    marginBottom: scale(26),
    marginHorizontal: scale(22),
  },
});
