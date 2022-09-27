import React from "react";
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import LEVELS from "../../models/levels.enum";
import useTasks from "./useList"

const Formulario = () => {
    let schema = yup.object().shape({
        name: yup.string().min(2, "To short").max(36, "To long").required("Required"),
        description: yup.string().min(3, "to short").max(150, "To long").required("Description required"),
    });

    const defaultTask = {
        name: "Default Task",
        description: "Default Description",
        level: LEVELS.NORMAL,
    }

    const tasks = useTasks([defaultTask])

    return (
        <div>
            <h1>Create tasks !!!</h1>
            {tasks.isEmpty() ? (
                <p>Task List is Empty</p>
            ) : (
                tasks.value.map((task, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold', marginRight: '5px' }}>{task.name}</p>
                        <p>{task.description}</p>
                         =><hr />
                        <button type="checkbox" onClick={() => tasks.remove(index)} checked={false}>🗑</button>
                    </li>
                ))
            )}
            <Formik
                initialValues={{ name: '', description: '', level: LEVELS.NORMAL }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        tasks.push(values);
                        actions.resetForm({});
                        actions.setSubmitting(false);

                    }, 400);
                }}
                validationSchema={schema}
            >
                {({ errors }) => (
                    <Form style={{border: "solid 1px"}}>
                        <Field type="text" name="name" placeholder="Name task" />
                        {errors && errors.name}
                        <br />
                        <Field type="text" name="description" placeholder="Description task" />
                        {errors && errors.description}
                        <br />
                        <Field as="select" name="level" >
                            <option value={LEVELS.NORMAL}>Normal</option>
                            <option value={LEVELS.URGENT}>Urgent</option>
                            <option value={LEVELS.BLOCKING}>Blocking</option>
                        </Field>
                        <br />
                        <button type="submit" >Create</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Formulario