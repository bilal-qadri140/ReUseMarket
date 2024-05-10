import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'
import colors from '../config/colors'
import AppIcon from '../components/AppIcon'
import ListItemSeperator from '../components/ListItemSeperator'


const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        }
    }
]

const AccountScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title='Bilal Qadri'
                    subTitle='bilalattari1409l@gmail.com'
                    image={require('../assets/Images/bilal.png')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    ItemSeparatorComponent={ListItemSeperator}
                    data={menuItems}
                    keyExtractor={item => item.title}
                    renderItem={({ item }) => <ListItem
                        title={item.title}
                        IconComponent={<AppIcon
                            backgroundColor={item.icon.backgroundColor}
                            name={item.icon.name}
                        />}
                    />}

                />
            </View>
            <ListItem
                title='Log Out'
                IconComponent={<AppIcon backgroundColor='#ffe66d' name='logout'  />}
            />

        </View>

    )
}

export default AccountScreen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
        flex:1,
    },
    container: {
        marginVertical: 20
    }
})