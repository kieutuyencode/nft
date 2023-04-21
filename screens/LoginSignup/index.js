import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './Signup';
import Forgot from './Forgot';
import NewPass from './NewPass';

const Stack = createNativeStackNavigator();

export default function LoginSignup() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="NewPass" component={NewPass} />
    </Stack.Navigator>
  );
}
