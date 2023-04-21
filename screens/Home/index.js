import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './Main';

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}
