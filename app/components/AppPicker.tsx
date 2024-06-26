import { Button, ColorSchemeName, ColorValue, FlatList, Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from '../config/colors';
import AppTextInput from './AppTextInput';
import PickerItem from './PickerItem';

type ItemType = {
    label: string
    value: number
    backgroundColor: ColorValue | undefined
    icon: string
}

type InputProps = {
    icon?: string
    placeholder?: string
    item: ItemType[]
    selectedItem: ItemType
    onSelectedItem: (item: ItemType) => void
}


const AppPicker = ({ icon, placeholder, item, selectedItem, onSelectedItem }: InputProps) => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <Icon name={icon} size={25} color={colors.medium} style={styles.icon} />}
                    <Text style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</Text>
                    <Icon name='chevron-down' size={25} color={colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide' >
                <Button title='Close' onPress={() => setModalVisible(false)} />
                <FlatList
                    data={item}
                    numColumns={3}
                    keyExtractor={(item) => item.value.toString()}
                    renderItem={({ item }) => <PickerItem label={item.label} backgroundColor={item.backgroundColor} icon={item.icon} onPress={() => {
                        onSelectedItem(item)
                        setModalVisible(false)
                    }} />}
                />
            </Modal>
        </>
    )
}

export default AppPicker

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
    text: {
        fontSize: 18,
        color: colors.medium,
        marginRight: 25,
        paddingVertical: 15,
        flex: 1
    }
})