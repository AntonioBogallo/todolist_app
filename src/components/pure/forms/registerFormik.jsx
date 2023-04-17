import React from 'react';
// import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterFormik = () => {

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(

        {
            username: Yup.string()
                         .min(6, 'Username too short ')
                         .max(12, 'Username too long')
                         .required('Username is required'),
            email: Yup.string()
                      .email('Invalid email format')
                      .required('Email is required'),
            password: Yup.string()
                         .min(8, 'Password too short')
                         .required('Password is required'),
            confirm: Yup.string()
                        .when("password", {
                            is: value => (value && value.length > 0 ? true : false),
                            then: () => Yup.string().oneOf([Yup.ref("password")], "Password must match!")
                        })
                        .required("You must confirm the password"),
            role: Yup.string()
                     .oneOf([ROLES.USER,ROLES.ADMIN],"You must select a role: User / Admin")
                     .required("Role is required")
        }

    )

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik 
                initialValues={initialValues} 
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

            {
                ({ values, errors, touched, isSubmitting, handleChange, handleBlur }) => (
                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field
                            id="username"
                            name="username"
                            placeholder="Your username"
                            type="text"
                        />

                        {
                            errors.username && touched.username &&
                            (
                                <ErrorMessage name="username" component='div' />
                            )
                        }

                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="Antonio@acme.com"
                            type="email"
                        />

                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name="email" component='div' />
                            )
                        }
                        
                        <label htmlFor="password">Password</label>
                        <Field 
                            id="password" 
                            type='password' 
                            name="password" 
                            placeholder="xxxxxxx"
                        />


                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name="password" component='div' />
                            )
                        }

                        <label htmlFor="confirm">Confirm</label>
                        <Field 
                            id="confirm" 
                            type='password' 
                            name="confirm" 
                            placeholder="Confirm password"
                        />


                        {
                            errors.confirm && touched.confirm &&
                            (
                                <ErrorMessage name="confirm" component='div' />
                            )
                        }

                        <button type="submit">Register</button>

                        {isSubmitting ? <p>Saving your credentials...</p> : null}
                    </Form>
                )
            }

            </Formik>
        </div>
    );
}

export default RegisterFormik;
