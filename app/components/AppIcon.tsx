import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
type IconProps = {
    name: string,
    size?: number
    iconCoolor?: string
    backgroundColor: string
}

const AppIcon = ({ name, size = 50, iconCoolor = '#fff', backgroundColor }: IconProps) => {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <MaterialIcon name={name} size={size / 2} color={iconCoolor} />
        </View>
    )
}

export default AppIcon

const styles = StyleSheet.create({

})