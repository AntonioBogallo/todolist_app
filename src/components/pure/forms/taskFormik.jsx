import React from 'react';
import { Task } from '../../../models/task.class';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';

const TaskFormik = ({add,length}) => {

    const initialValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL,
        done: false
    }

    const taskSchema = Yup.object().shape(
        {
            name: Yup.string()
                     .min(6, 'Name too short')
                     .required('Task name is required'),

            description: Yup.string()
                            .min(6,'Description too short')
                            .max(30,'Description too long')
                            .required('Task description is required'),
            
            level: Yup.string()
                      .oneOf([LEVELS.NORMAL,LEVELS.URGENT,LEVELS.BLOCKING],'You must select one level')
                      .required('Level is required')
        }
    )

    function addTask(value) {
        const newTask = new Task(
            value.name,
            value.description,
            value.done,
            value.level
        )
        add(newTask);
    }

    return (
        <div>
            <h4>New Task</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={taskSchema}
                onSubmit={async values => {
                    await new Promise((r) => setTimeout(r, 2000));
                    addTask(values);
                }}
            >

            {
                    ({ values, errors, touched, isSubmitting, handleChange, handleBlur }) => (
                        <Form>
                            <label htmlFor="name">Task Name</label>
                            <Field
                                id="name"
                                name="name"
                                placeholder="Do homework"
                                type="text"
                            />

                            {
                                errors.name && touched.name &&
                                (
                                    <ErrorMessage name="name" component='div' />
                                )
                            }

                            <label htmlFor="description">Task Description</label>
                            <Field
                                id="description"
                                name="description"
                                placeholder="Pick up the clothes, clean the dishes..."
                                as="textarea"
                            />

                            {
                                errors.description && touched.description &&
                                (
                                    <ErrorMessage name="description" component='div' />
                                )
                            }

                            <label htmlFor="level">Task Level</label>
                            <Field
                                id="level"
                                name="level"
                                as="select"
                            >

                                <option value={LEVELS.NORMAL}>Normal</option>
                                <option value={LEVELS.BLOCKING}>Bloking</option>
                                <option value={LEVELS.URGENT}>Urgent</option>

                            </Field>

                            {
                                errors.level && touched.level &&
                                (
                                    <ErrorMessage name="level" component='div' />
                                )
                            }

                            <button type="submit">Save</button>

                            {isSubmitting ? <p>Saving your new task...</p> : null}
                        </Form>
                    )
            }

            </Formik>
        </div>
    );
}

export default TaskFormik;
