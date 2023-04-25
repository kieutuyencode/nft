import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Location from './Location';
import Virtual from './Virtual';
import Card from './Card';
import MarketPlace from './MarketPlace';

const Stack = createNativeStackNavigator();

export default function Cart() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Virtual" component={Virtual} />
      <Stack.Screen name="Card" component={Card} />
      <Stack.Screen name="MarketPlace" component={MarketPlace} />
    </Stack.Navigator>
  );
}
