import { FlatList, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItemSeperator from '../components/ListItemSeperator'
import AppIcon from '../components/AppIcon'
import colors from '../config/colors'

type MessageType = {
    id: number
    title: string
    subTitle: string
    image: ImageSourcePropType
}


const initialMeasages: MessageType[] = [
    {
        id: 1,
        title: 'T1',
        subTitle: 'sub title 1',
        image: require('../assets/Images/bilal.png')
    },
    {
        id: 2,
        title: 'T2',
        subTitle: 'sub title 2',
        image: require('../assets/Images/mosh.jpg')
    },
    {
        id: 3,
        title: 'T3',
        subTitle: 'sub title 3',
        image: require('../assets/Images/bilal.png')
    },
    {
        id: 4,
        title: 'T4',
        subTitle: 'sub title 4',
        image: require('../assets/Images/mosh.jpg')
    }
]

const MessagesScreen = () => {

    const [messages, setMessages] = useState(initialMeasages)

    const handleDelete = (item: MessageType) => {
        setMessages(messages.filter(m => m.id !== item.id))
    }

    return (
        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => <ListItem
                title={item.title}
                // subTitle={item.subTitle}
                IconComponent={<AppIcon
                    size={50}
                    name='email'
                    iconCoolor={colors.white}
                    backgroundColor={colors.secondary}
                />}
                // image={item.image}
                renderRightAction={() => <ListItemDeleteAction onPress={() => { handleDelete(item) }} />}
            />
            }
            ItemSeparatorComponent={() => <ListItemSeperator />}
        />
    )
}

export default MessagesScreen

const styles = StyleSheet.create({})