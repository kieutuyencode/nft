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

export default function ListButton() {
  const language = useLanguage();

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
        <ButtonIcon icon={<ArrowUp />} title={deposit[language]} />
        <ButtonIcon icon={<ArrowDown />} title={withDraw[language]} />
        <ButtonIcon icon={<Transfer />} title={transfer[language]} />
      </View>
    </View>
  );
}
