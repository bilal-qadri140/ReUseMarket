import { DimensionValue, StyleSheet, TextInputProps, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

interface FeildProps extends TextInputProps {
    name: string
    icon?: string
    width?: DimensionValue | undefined
}
interface MyFormValues {
    [key: string]: any;
}
const AppFormFeild = ({ width = '100%', name, icon, ...otherProps }: FeildProps) => {

    const { handleChange, setFieldTouched, errors, touched } = useFormikContext<MyFormValues>()

    return (
        <>
            <View style={{width:width}}>
                <AppTextInput
                    onChangeText={handleChange(name)}
                    onBlur={() => setFieldTouched(name)}
                    icon={icon}
                    {...otherProps}
                />
            </View>
            {errors[name] && <ErrorMessage error={errors[name]} visible={touched[name]} />}
        </>
    )
}

export default AppFormFeild

const styles = StyleSheet.create({})