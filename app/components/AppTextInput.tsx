import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from '../config/colors';

interface InputProps extends TextInputProps {
    icon?: string
    placeholder?: string
    [x: string]: any;
}

const AppTextInput = ({ icon, placeholder, ...otherProps }: InputProps) => {
    return (
        <View style={styles.container}>
            {icon && <Icon name={icon} size={25} color={colors.medium} style={styles.icon} />}
            <TextInput
                style={styles.inputText}
                placeholder={placeholder}
                {...otherProps}
            />
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 15,
        marginVertical: 10,
        backgroundColor: colors.light,
        borderRadius: 25,
        alignItems: 'center'
    },
    icon: {
        marginRight: 8,
    },
    inputText: {
        fontSize: 18,
        color: colors.dark,
        marginRight: 25,
        flex: 1
    }
})