import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

import { AppFormFeild, AppForm, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().label('Password').min(6)
})

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/Images/logo-red.png')} />

      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values.email, values.password)}
        validationSchema={validationSchema}
      >
        <AppFormFeild
          autoCapitalize='none'
          autoComplete='email'
          autoCorrect={false}
          placeholder='Email'
          icon='email'
          name='email'
          keyboardType='email-address'
          textContentType='emailAddress'
        />
        <AppFormFeild
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Password'
          icon='lock'
          name='password'
          secureTextEntry
          textContentType='password'
        />
        <SubmitButton title='Login' />
      </AppForm>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 80,
    marginBottom: 30,
    alignSelf: 'center'
  },
  errorMessage: {
    color: 'red',
    marginLeft: 10,
  }
})