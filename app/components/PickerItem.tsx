import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

type PickerItemProps = {
    label: string
    onPress: () => void
}
const PickerItem = ({ label,onPress }: PickerItemProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

export default PickerItem

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        backgroundColor: colors.light,
        marginHorizontal: 20,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})