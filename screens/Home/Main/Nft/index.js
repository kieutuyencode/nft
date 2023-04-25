import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Market from './Market';
import Card from './Card';
import Virtual from './Virtual';
import DetailMarket from './DetailMarket';

const Stack = createNativeStackNavigator();

export default function Nft() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Market" component={Market} />
      <Stack.Screen name="DetailMarket" component={DetailMarket} />
      <Stack.Screen name="Card" component={Card} />
      <Stack.Screen name="Virtual" component={Virtual} />
    </Stack.Navigator>
  );
}
