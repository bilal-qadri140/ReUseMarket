import { StyleSheet, Text} from 'react-native'
import React from 'react'
import { FormikErrors, FormikTouched } from 'formik'

type MessageProps = {
    error: string | string[] | FormikErrors<any> | FormikErrors<any>[] | undefined
    visible: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined
}

const ErrorMessage = ({ error, visible }: MessageProps) => {
    if(!visible) return null
    return (
        <Text style={styles.error}>{error?.toString()}</Text>
    )
}

export default ErrorMessage

const styles = StyleSheet.create({
    error: {
        marginLeft: 10,
        color: 'red'
    }
})