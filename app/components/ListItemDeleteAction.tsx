import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from '../config/colors';

type DeleteProps = {
    onPress: () => void
}

const ListItemDeleteAction = ({ onPress }: DeleteProps) => {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >
            <View style={styles.container}>
                <Icon name='trash-can' size={35} color={colors.white} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ListItemDeleteAction

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        backgroundColor: colors.danger,
        flexDirection:'row'
    }
})