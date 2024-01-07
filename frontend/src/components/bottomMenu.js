import {React} from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommonActions } from '@react-navigation/native';
import { Text, BottomNavigation, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MainPage from '../mainPage.js';
import AddPage from '../addPage.js';
import AccountPage from '../accountPage.js';
import SettingsPage from '../settingsPage.js';

const Tab = createBottomTabNavigator();

export default function BottomNavigationBarExample() {
  return (
    <Tab.Navigator
      style={styles().color}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) =>
            descriptors[route.key].options.tabBarIcon?.({
              focused,
              color,
              size: 24,
            }) || null
          }
          getLabelText={({ route }) => descriptors[route.key].route.name}
        />
      )}
    >
      
      <Tab.Screen
        name="Home"
        component={MainPage}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddPage}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="plus-box-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Accounts"
        component={AccountPage}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="card-account-details" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsPage}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background
    },
    color: {
      backgroundColor: theme.colors.background
    }
  });
}