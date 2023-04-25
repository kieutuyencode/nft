import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './Main';
import EarningFree from './EarningFree';
import Cart from './Cart';

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="EarningFree" component={EarningFree} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
