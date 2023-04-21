import {TouchableOpacity} from 'react-native';
import ArrowBtnLeft from '../../variable/svgs/ArrowBtnLeft';
import {useNavigation} from '@react-navigation/native';

export default function ButtonBack() {
  const {goBack} = useNavigation();

  return (
    <TouchableOpacity onPress={goBack}>
      <ArrowBtnLeft />
    </TouchableOpacity>
  );
}
