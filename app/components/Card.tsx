import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

type CardProps = {
    title: string
    subTitle: string
    image: ImageSourcePropType
}

const Card = ({ title, subTitle, image }: CardProps) => {
    return (
        <View style={styles.contaner}>
            <Image
                source={image}
                style={styles.image}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    contaner: {
        margin: 20,
        borderRadius: 15,
        backgroundColor: '#fff',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    detailsContainer: {
        padding: 20
    },
    titleText: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 22,
    }
})