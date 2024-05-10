import { StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { Formik } from 'formik'

type AppFormProps = {
    children: ReactNode
    initialValues: any
    onSubmit: (values: any) => void
    validationSchema: any
}

const AppForm = ({ children, initialValues, onSubmit, validationSchema }: AppFormProps) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {
                () => {
                    return (
                        <>
                            {children}
                        </>
                    )
                }
            }
        </Formik>
    )
}

export default AppForm

const styles = StyleSheet.create({})