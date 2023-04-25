import {View} from 'react-native';
import ButtonIcon from './ButtonIcon';
import {customMarginTop, scaleWidth} from '../../../../../variable/sizes';
import ArrowUp from '../../../../../variable/svgs/ArrowUp';
import {
  deposit,
  transfer,
  withDraw,
} from '../../../../../language/home/main/wallet/wallet';
import {useLanguage} from '../../../../../store/language';
import ArrowDown from '../../../../../variable/svgs/ArrowDown';
import Transfer from '../../../../../variable/svgs/Transfer';
import {useNavigation} from '@react-navigation/native';

export default function ListButton() {
  const language = useLanguage();
  const {navigate} = useNavigation();

  return (
    <View style={{marginTop: -40}}>
      <View
        style={[
          {
            justifyContent: 'center',
            flexDirection: 'row',
            columnGap: 35 * scaleWidth,
          },
          customMarginTop(10),
        ]}>
        <ButtonIcon
          icon={<ArrowUp />}
          title={deposit[language]}
          onPress={() => navigate('Deposit')}
        />
        <ButtonIcon
          icon={<ArrowDown />}
          title={withDraw[language]}
          onPress={() => navigate('WithDraw')}
        />
        <ButtonIcon
          icon={<Transfer />}
          title={transfer[language]}
          onPress={() => navigate('Transfer')}
        />
      </View>
    </View>
  );
}
