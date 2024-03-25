import { DimensionValue, StyleSheet, Text, View } from 'react-native'
import React from 'react'


import PickerItem from './PickerItem'
import { ErrorMessage } from './forms'
import AppPicker from './AppPicker'
import { useFormikContext } from 'formik'

const categories = [
    { label: 'Furniture', value: 1 },
    { label: 'Clothing', value: 2 },
    { label: 'Cameras', value: 3 },
    { label: 'Cars', value: 4 },
]

type FormPickerProps = {
    name: string
    items: any
    placeholder: string
    width?: DimensionValue | undefined
}
interface MyFormValues {
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