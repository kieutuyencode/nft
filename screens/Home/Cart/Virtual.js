import {View, Text, ScrollView} from 'react-native';
import Container from './components/Container';
import EmptyCart from './components/EmptyCart';
import Item from '../Main/components/nft/virtual/Item';
import VirtualSilver from '../../../variable/svgs/VirtualSilver';
import VirtualGold from '../../../variable/svgs/VirtualGold';
import {gold, silver} from '../../../language/home/main/nft/virtual';
import {useLanguage} from '../../../store/language';

export default function Virtual() {
  const language = useLanguage();
  const data = [1];
  return (
    <Container tab={1}>
      {!data.length > 0 ? (
        <EmptyCart />
      ) : (
        <ScrollView horizontal>
          <Item
            icon={<VirtualSilver />}
            type="Silver"
            months={36}
            growth={5}
            money={300}
            title={silver[language]}
          />
          <Item
            icon={<VirtualGold />}
            type="Gold"
            months={36}
            growth={10}
            money={500}
            title={gold[language]}
          />
        </ScrollView>
      )}
    </Container>
  );
}
