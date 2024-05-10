import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import WelcomeScreen from './app/Screens/WelcomeScreen'
import ViewImageScreen from './app/Screens/ViewImageScreen'
import AppButton from './app/components/AppButton'
import Card from './app/components/Card'
import ListingDetailsScreen from './app/Screens/ListingDetailsScreen'
import ListItem from './app/components/ListItem'
import ListItemDeleteAction from './app/components/ListItemDeleteAction'
import MessagesScreen from './app/Screens/MessagesScreen'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AccountScreen from './app/Screens/AccountScreen'
import AppTextInput from './app/components/AppTextInput'
import AppPicker from './app/components/AppPicker'
import LoginScreen from './app/Screens/LoginScreen'
import ListingEditScreen from './app/Screens/ListingEditScreen'


const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
  { label: 'Cars', value: 4 },
]


const App = () => {

  const [category, setCategory] = useState(categories[0])

  return (
    <GestureHandlerRootView style={{ backgroundColor: '#fff', flex: 1 }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      {/* <AccountScreen /> */}
      {/* <AppPicker
        icon='apps'
        placeholder='Category'
        item={categories}
        selectedItem={category}
        onSelectedItem = {(item)=> setCategory(item)}
      /> */}
      <ListingEditScreen />
      {/* <LoginScreen/> */}
      {/* <MessagesScreen/> */}
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
})