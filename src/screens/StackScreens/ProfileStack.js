import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../HomeScreens/ProfileScreen';
import SettingsScreen from '../HomeScreens/SettingsScreen';

const Profile = ({uid}) => {
  const ProfileStack = createNativeStackNavigator();

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen options={{headerShown: false}} name="ProfileScreen">
        {() => <ProfileScreen uid={uid} />}
      </ProfileStack.Screen>
      <ProfileStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </ProfileStack.Navigator>
  );
};

export default Profile;

const styles = StyleSheet.create({});
