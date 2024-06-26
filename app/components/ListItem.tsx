import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import AppIcon from './AppIcon';
type ListItemProps = {
    title: string
    subTitle?: string
    image?: ImageSourcePropType
    renderRightAction?: () => React.ReactNode
    IconComponent?: React.ReactNode
}

const ListItem = ({ title, subTitle, image, renderRightAction ,IconComponent}: ListItemProps) => {

    return (
        <Swipeable
            renderRightActions={renderRightAction}
        >
            <View style={styles.container}>
                {IconComponent}
                {image && <Image
                    style={styles.image}
                    source={image}
                />}
                <View style={styles.detailsContainer}>
                    <Text numberOfLines={1} style={styles.title}>{title }</Text>
                    {subTitle && <Text numberOfLines={2} style={styles.price}>{subTitle }</Text>}
                </View>
                <Icon name='chevron-right' size={25} style={styles.icon} />
            </View>
        </Swipeable>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // height: 70,
        backgroundColor: colors.white,
        // paddingVertical: 10,
        alignItems: 'center',
        paddingLeft:10,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginHorizontal: 10,
        paddingVertical: 10,
    },
    detailsContainer: {
        margin: 10,
        // justifyContent: 'center',
        flex:1,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: colors.black
    },
    price: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.medium
    },
    icon: {
        marginRight:10
    }
})