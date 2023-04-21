import {View} from 'react-native';
import Card from './Card';
import {customMarginTop, scaleWidth} from '../../../../../variable/sizes';
import Earn1 from '../../../../../variable/svgs/Earn1';
import {useLanguage} from '../../../../../store/language';
import {
  nftCard,
  virtual,
  virtualDesc,
} from '../../../../../language/home/main/wallet/wallet';
import Earn2 from '../../../../../variable/svgs/Earn2';

export default function ListCard() {
  const language = useLanguage();

  return (
    <View
      style={[
        customMarginTop(56),
        {flexDirection: 'row', columnGap: 22 * scaleWidth},
      ]}>
      <Card
        icon={<Earn1 />}
        title={virtual[language]}
        description={virtualDesc[language]}
      />
      <Card
        icon={<Earn2 />}
        title={nftCard[language]}
        description={virtualDesc[language]}
      />
    </View>
  );
}
