import {View, Text} from 'react-native';
import BackgroundHeaderBack from '../../../../components/background/BackgroundHeaderBack';
import {useLanguage} from '../../../../store/language';
import {
  account,
  direct,
  indirect,
  wallet,
} from '../../../../language/home/main/wallet/detail-blance';
import Item from '../components/wallet/detailBlance/Item';
import {company1, company2} from '../../../../variable/images';
import {commission} from '../../../../language/home/main/wallet/detail-blance';
import {balance} from '../../../../language/home/main/wallet/detail-blance';
import {interest} from '../../../../language/home/main/wallet/detail-blance';

export default function DetailBlance() {
  const language = useLanguage();

  return (
    <BackgroundHeaderBack title={account[language]}>
      <View>
        <Item
          title={wallet[language]}
          img1={company1}
          number1="1 986 086.06"
          text1={direct[language]}
          img2={company2}
          number2="1 986 086.06"
          text2={indirect[language]}
        />
        <Item
          title={commission[language]}
          img1={company1}
          number1="1 986 086.06"
          text1={direct[language]}
          img2={company2}
          number2="1 986 086.06"
          text2={indirect[language]}
        />
        <Item
          title={balance[language]}
          img1={company1}
          number1="1 986 086.06"
          text1={direct[language]}
          img2={company2}
          number2="1 986 086.06"
          text2={indirect[language]}
        />
        <Item
          title={interest[language]}
          img1={company1}
          number1="1 986 086.06"
          text1={direct[language]}
          img2={company2}
          number2="1 986 086.06"
          text2={indirect[language]}
        />
        <Item
          title="Sale"
          img1={company1}
          number1="1 986 086.06"
          text1={direct[language]}
          img2={company2}
          number2="1 986 086.06"
          text2={indirect[language]}
        />
      </View>
    </BackgroundHeaderBack>
  );
}
