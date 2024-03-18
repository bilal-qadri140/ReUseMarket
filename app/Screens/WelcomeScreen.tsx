import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from '../components/AppButton'

const WelcomeScreen = () => {
    return (
        <ImageBackground
            blurRadius={6}
            style={styles.backgroundImage}
            source={require('../assets/Images/background.jpg')}
        >
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/Images/logo-red.png')} />
                <Text style={styles.text}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
            <AppButton title='Login' onPress={() => { }} />
            <AppButton title='register' onPress={() => { }} color='secondary' />
            </View>

        </ImageBackground>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    imageContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        color:'#555'
    },
    buttonsContainer: {
        width: '100%',
        paddingHorizontal:20
    }
})