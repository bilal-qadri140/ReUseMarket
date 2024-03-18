import { StyleSheet } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'


import AppButton from '../AppButton'

type ButtonProps = {
    title: string
}

const SubmitButton = ({ title }: ButtonProps) => {
    const { handleSubmit } = useFormikContext()
    return (
        <AppButton title={title} onPress={handleSubmit} />
    )
}

export default SubmitButton

const styles = StyleSheet.create({})