import {View, Text, StyleSheet} from 'react-native';
import Container from './components/Container';
import Item from './components/Item';
import {scale} from '../../../variable/sizes';
import {useLanguage} from '../../../store/language';
import {
  earningCard,
  earningFree,
  location,
  machine,
  referral,
} from '../../../language/home/earning/main';
import {useNavigation} from '@react-navigation/native';

export default function Main() {
  const language = useLanguage();
  const {navigate} = useNavigation();

  return (
    <Container marginHorizontal>
      <View style={styles.container}>
        <Item
          text={earningFree[language]}
          onPress={() => navigate('HistoryEarning')}
        />
        <Item
          text={earningCard[language]}
          onPress={() => navigate('HistoryProfit')}
        />
        <Item
          text={referral[language]}
          onPress={() => navigate('HistoryReferral')}
        />
        <Item
          text={location[language]}
          onPress={() => navigate('HistoryLocation')}
        />
        <Item
          text={machine[language]}
          onPress={() => navigate('HistoryMachine')}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: scale(20),
  },
});
