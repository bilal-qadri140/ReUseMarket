import { StyleSheet, TextInputProps } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

interface FeildProps extends TextInputProps {
    name: string
    icon: string
}
interface MyFormValues {
    [key: string]: any; 
}
const AppFormFeild = ({ name, icon, ...otherProps }: FeildProps) => {

    const { handleChange, setFieldTouched, errors, touched } = useFormikContext<MyFormValues>()

    return (
        <>
            <AppTextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                icon={icon}
                {...otherProps}
            />
            {errors[name] && <ErrorMessage error={errors[name]} visible={touched[name]} />}
        </>
    )
}

export default AppFormFeild

const styles = StyleSheet.create({})