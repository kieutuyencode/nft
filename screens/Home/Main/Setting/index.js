import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './Main';
import ReferralLink from './ReferralLink';
import Contact from './Contact';
import AuthenCode from './AuthenCode';
import ChangePass from './ChangePass';
import KYC from './KYC';

const Stack = createNativeStackNavigator();

export default function Setting() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="ReferralLink" component={ReferralLink} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="AuthenCode" component={AuthenCode} />
      <Stack.Screen name="ChangePass" component={ChangePass} />
      <Stack.Screen name="KYC" component={KYC} />
    </Stack.Navigator>
  );
}
