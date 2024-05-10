import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { AppForm, AppFormField, SubmitButton } from '../components/forms'
import AppFormPicker from '../components/AppFormPicker';


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().label("Category"),
});


const categories = [
    {
        backgroundColor: "#fc5c65",
        icon: "floor-lamp",
        label: "Furniture",
        value: 1,
    },
    {
        backgroundColor: "#fd9644",
        icon: "car",
        label: "Cars",
        value: 2,
    },
    {
        backgroundColor: "#fed330",
        icon: "camera",
        label: "Cameras",
        value: 3,
    },
    {
        backgroundColor: "#26de81",
        icon: "cards",
        label: "Games",
        value: 4,
    },
    {
        backgroundColor: "#2bcbba",
        icon: "shoe-heel",
        label: "Clothing",
        value: 5,
    },
    {
        backgroundColor: "#45aaf2",
        icon: "basketball",
        label: "Sports",
        value: 6,
    },
    {
        backgroundColor: "#4b7bec",
        icon: "headphones",
        label: "Movies & Music",
        value: 7,
    },
    {
        backgroundColor: "#a55eea",
        icon: "book-open-variant",
        label: "Books",
        value: 8,
    },
    {
        backgroundColor: "#778ca3",
        icon: "application",
        label: "Other",
        value: 9,
    },
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
                <AppFormPicker items={categories} name='category' placeholder='Category' width='55%' />
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