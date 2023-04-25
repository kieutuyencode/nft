import {View, Text, StyleSheet} from 'react-native';
import Container from '../components/nft/Container';
import Text700size24 from '../../../../components/texts/Text700size24';
import {useLanguage} from '../../../../store/language';
import {
  gold,
  platinum,
  silver,
  title,
  vip,
} from '../../../../language/home/main/nft/virtual';
import {desc} from '../../../../language/home/main/nft/market';
import Text400size16 from '../../../../components/texts/Text400size16';
import {scale} from '../../../../variable/sizes';
import {
  description,
  historyCommission,
  userName,
} from '../../../../language/home/main/wallet/detail';
import HistoryBorder from '../../../../components/history/HistoryBorder';
import Item from '../components/nft/virtual/Item';
import VirtualSilver from '../../../../variable/svgs/VirtualSilver';

export default function Virtual() {
  const language = useLanguage();

  return (
    <Container tab={2} full>
      <Text700size24 text={title[language]} />
      <View style={styles.containTextDesc}>
        <Text400size16 text={desc[language]} center />
      </View>
      <Item
        icon={<VirtualSilver />}
        type="Silver"
        months={36}
        growth={5}
        money={300}
        title={silver[language]}
      />
      <Item
        icon={<VirtualSilver />}
        type="Gold"
        months={36}
        growth={10}
        money={500}
        title={gold[language]}
      />
      <Item
        icon={<VirtualSilver />}
        type="Platinum"
        months={36}
        growth={15}
        money={700}
        title={platinum[language]}
      />
      <Item
        icon={<VirtualSilver />}
        type="Vip"
        months={36}
        growth={20}
        money={'1,000'}
        title={vip[language]}
      />
      <View
        style={{
          marginHorizontal: scale(16),
          marginBottom: scale(130),
          marginTop: scale(16),
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
    marginBottom: scale(42),
  },
});
