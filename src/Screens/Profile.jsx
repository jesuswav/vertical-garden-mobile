import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Constants from 'expo-constants'

const Profile = () => {
  return (
    <ScrollView style={{ marginTop: Constants.statusBarHeight + 52 }}>
      <Text>Profile screen</Text>
    </ScrollView>
  )
}

export default Profile
