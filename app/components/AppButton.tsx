import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

type ButtonProps = {
    title: string
    onPress?: () => void
    color?: string
}

const AppButton = ({ title, onPress, color = 'primary' }: ButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.button, { backgroundColor: color === 'primary' ? colors.primary : colors.secondary }]}
            onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width: '100%',
        borderRadius: 25,
        paddingVertical: 10,
        marginVertical: 10
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: colors.white
    }
})