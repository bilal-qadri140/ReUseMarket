import { DimensionValue, StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { ErrorMessage } from './forms'
import AppPicker from './AppPicker'
import { useFormikContext } from 'formik'


type FormPickerProps = {
    name: string
    items: any
    placeholder: string
    width?: DimensionValue | undefined
}
type MyFormValues = {
    [key: string]: any;
}

const AppFormPicker = ({ width = '100%', items, name, placeholder }: FormPickerProps) => {
    const { errors, setFieldValue, touched, values } = useFormikContext<MyFormValues>();

    return (
        < >
            <View style={{ width }}>
                <AppPicker
                    item={items}
                    onSelectedItem={(item) => setFieldValue(name, item)}
                    selectedItem={values[name]}
                    placeholder={placeholder}
                />
            </View>
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default AppFormPicker

const styles = StyleSheet.create({})