import React from 'react';
import { Formik, Form, Field } from 'formik';
import TASK_VALIDATE_SCHEMA from '../../schemas/validateTask';

function TasksForm() {
  const initialValues = {
    body: '',
    userId: '1',
    deadline: '',
    isDone: false,
  };

  const submitHandler = (values, formikBag) => {
    console.log('values', values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={TASK_VALIDATE_SCHEMA}
    >
      {(formProps) => (
        <Form>
          <h1>TASK FORM</h1>

          <label>User name</label>
          <select
            name="userId"
            value={formProps.values.userId}
            onChange={formProps.handleChange}
          >
            {[
              { id: '1', firstName: 'Alina' },
              { id: '2', firstName: 'Richard' },
              { id: '3', firstName: 'Zak' },
              { id: '4', firstName: 'Roll' },
            ].map((u) => (
              <option key={u.id} value={u.id}>
                {u.firstName}
              </option>
            ))}
          </select>

          <br />
          <label>
            Text task
            <Field
              name="body"
              type="text"
              placeholder="To write your task"
              autoFocus
            />
          </label>

          <br />
          <label>
            Deadline
            <Field name="deadline" type="date" />
          </label>

          {/* <br />
          <label>
            Is done
            <Field name="isDone" type="checkbox" />
          </label> */}

          <br />
          <button type="submit">SEND</button>
        </Form>
      )}
    </Formik>
  );
}

export default TasksForm;
