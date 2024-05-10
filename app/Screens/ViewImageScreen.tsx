import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import colors from '../config/colors'

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <Icon name='close' color={colors.white} size={35} />
            </View>
            <View style={styles.deleteIcon}>
                <Icon name='trash-can-outline' color={colors.white} size={35} />
            </View>
            <Image
                style={styles.image}
                resizeMode='contain'
                source={require('../assets/Images/chair.jpg')}
            />
        </View>
    )
}

export default ViewImageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    closeIcon: {
        position: 'absolute',
        top: 30,
        left: 20
    },
    deleteIcon: {
        position: 'absolute',
        top: 30,
        right: 20
    },
    image: {
        width: '100%',
        height: '100%'
    }
})