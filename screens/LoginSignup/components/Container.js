import {ScrollView} from 'react-native';
import Background1 from '../../../components/background/Background1';

export default function Container({children}) {
  return (
    <Background1>
      <ScrollView style={{flex: 1}} automaticallyAdjustKeyboardInsets={true}>
        {children}
      </ScrollView>
    </Background1>
  );
}
