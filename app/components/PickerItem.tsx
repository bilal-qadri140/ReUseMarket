import { ColorSchemeName, ColorValue, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppIcon from './AppIcon'

type PickerItemProps = {
    label: string
    onPress: () => void
    backgroundColor?: ColorValue | undefined
    icon: string
}
const PickerItem = ({ label, onPress, backgroundColor, icon }: PickerItemProps) => {
    return (
        <TouchableOpacity style={[styles.container]} onPress={onPress}>
            <AppIcon backgroundColor={backgroundColor} name={icon} size={80} />
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

export default PickerItem

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        alignItems: 'center',
        width: '33.33%',
        // backgroundColor:colors.danger
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop:5,
    }
})