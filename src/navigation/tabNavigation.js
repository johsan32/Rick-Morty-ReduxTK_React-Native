import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import {EPISODE, HOME, LOCATION} from '../utils/routes';
import EpisodeScreen from '../screens/episode';
import {Image, StyleSheet} from 'react-native';
import MyColors from '../theme/MyColors';
import HeaderLeft from './headerLogo';
import LocationScreen from '../screens/location';

const Tab = createBottomTabNavigator();
function MyTabs({navigation, focused}) {
  return (
    <Tab.Navigator
      initialRouteName={HOME}
      screenOptions={({route}) => ({
        header: () => <HeaderLeft navigation={navigation} />,
        headerStyle: {
          backgroundColor: MyColors.black,
        },
        tabBarLabelStyle: {fontSize: focused ? 20 : 13, paddingBottom: 5},
        tabBarStyle: {
          paddingVertical: 5,
          height: 70,
          backgroundColor: MyColors.black,
        },

        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            name={route?.name}
            route={route}
          />
        ),
        tabBarActiveTintColor: MyColors.white,
        tabBarInactiveTintColor: MyColors.accent.blue.secondary,
      })}>
      <Tab.Screen
        name={HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Characters',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={require('../assets/images/tab.png')}
              style={[styles.image, {opacity: focused ? 1 : 0.3}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name={LOCATION}
        component={LocationScreen}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={require('../assets/images/video.jpg')}
              style={[styles.image, {opacity: focused ? 1 : 0.3}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name={EPISODE}
        component={EpisodeScreen}
        options={{
          tabBarLabel: 'Episode',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={require('../assets/images/map.jpg')}
              style={[styles.image, {opacity: focused ? 1 : 0.3}]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  //kod yapısı önizleme için paylaşıldığından eklenmedi...
  });

export default MyTabs;
