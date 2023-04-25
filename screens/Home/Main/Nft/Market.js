import {View, StyleSheet} from 'react-native';
import Container from '../components/nft/Container';
import Text700size24 from '../../../../components/texts/Text700size24';
import {useLanguage} from '../../../../store/language';
import {desc, title} from '../../../../language/home/main/nft/market';
import Text400size16 from '../../../../components/texts/Text400size16';
import {scale} from '../../../../variable/sizes';
import Search from '../components/nft/market/Search';
import ListItem from '../components/nft/market/ListItem';

export default function Market() {
  const language = useLanguage();

  return (
    <Container tab={0}>
      <Text700size24 text={title[language]} />
      <View style={styles.containTextDesc}>
        <Text400size16 text={desc[language]} center />
      </View>
      <Search />
      <ListItem />
    </Container>
  );
}

const styles = StyleSheet.create({
  containTextDesc: {
    marginTop: scale(6),
    marginBottom: scale(26),
  },
});
