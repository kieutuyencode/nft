import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import DetailBlance from './DetailBlance';
import Detail from './Detail';

const Stack = createNativeStackNavigator();

export default function Wallet() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailBlance" component={DetailBlance} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
