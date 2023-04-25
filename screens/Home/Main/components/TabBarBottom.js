import LinearGradient from 'react-native-linear-gradient';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  customFontsize,
  customHeight,
  customLineHeight,
  customMarginHorizontal,
  customMarginLeft,
  customPaddingHorizontal,
  customPaddingVertical,
} from '../../../../variable/sizes';
import {gradient, primary} from '../../../../variable/colors';
import {IBMPlexSans400} from '../../../../variable/fontFamily';

export default function TabBarBottom({state, descriptors, navigation}) {
  return (
    <LinearGradient
      colors={['rgba(244, 0, 116, 0.4)', 'rgba(37, 19, 81, 0.4)']}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 0.0}}
      locations={[0.3392, 0.9986]}
      style={styles.container}>
      <View style={styles.containerInner}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const IconTab = options.tabBarIcon;

          return (
            <TouchableOpacity
              key={label}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              {!isFocused ? (
                <IconTab />
              ) : (
                <LinearGradient
                  colors={[primary, gradient]}
                  start={{x: 0, y: 0}}
                  end={{x: 0, y: 1}}
                  style={styles.active}>
                  <IconTab />
                  <Text style={styles.label}>{label}</Text>
                </LinearGradient>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  containerInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
    borderWidth: 2,
    borderColor: 'rgba(106, 49, 129, 0.2)',
    borderRadius: 999,
    ...customMarginHorizontal(20),
    ...customPaddingHorizontal(12),
    ...customHeight(55),
    justifyContent: 'center',
  },
  active: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.16)',
    ...customPaddingVertical(8),
    ...customPaddingHorizontal(17),
    borderRadius: 74,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    ...IBMPlexSans400,
    color: 'white',
    ...customFontsize(14),
    ...customMarginLeft(13),
    ...customLineHeight(16),
  },
});
