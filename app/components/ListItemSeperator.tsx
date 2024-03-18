import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

const ListItemSeperator = () => {
    return (
        <View
            style={{
                height: 2,
                backgroundColor: colors.light,
                width:'100%'
            }}
        />
    )
}

export default ListItemSeperator

const styles = StyleSheet.create({})