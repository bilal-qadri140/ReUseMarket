import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { AppForm, AppFormField, SubmitButton } from '../components/forms'
import AppPicker from '../components/AppPicker';
import AppFormPicker from '../components/AppFormPicker';


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().label("Category"),
});


const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Camera", value: 3 },
];



const ListingEditScreen = () => {
    return (
        <View style={styles.contianer}>
            <AppForm
                initialValues={{ title: '', price: '', description: '', category: null }}
                validationSchema={validationSchema}
                onSubmit={(values) => console.log(values)}

            >
                <AppFormField name='title' maxLength={255} placeholder='Title' />
                <AppFormField
                    name='price'
                    placeholder='Price'
                    keyboardType='numeric'
                    maxLength={8}
                    width={120}
                />
                <AppFormPicker items={categories} name='category' placeholder='Category' width='55%'/>
                <AppFormField
                    name='description'
                    placeholder='Description'
                    maxLength={200}
                    multiline
                    numberOfLines={3}
                    textAlignVertical='top'
                />
                <SubmitButton title='Post' />
            </AppForm>
        </View>
    )
}

export default ListingEditScreen

const styles = StyleSheet.create({
    contianer: {
        padding: 10
    }
})