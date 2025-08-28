import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import TASK_VALIDATE_SCHEMA from '../../schemas/validateTask';

function TasksForm({ users }) {
  const initialValues = {
    body: '',
    userId: users[0]?.id ?? '',
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

          {users.length !== 0 && (
            <>
              <label>User name</label>
              <select
                name="userId"
                value={formProps.values.userId}
                onChange={formProps.handleChange}
              >
                {users.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.firstName}
                  </option>
                ))}
              </select>
            </>
          )}

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
const mapStateToProps = ({ tasksData: { users } }) => ({ users });

export default connect(mapStateToProps)(TasksForm);
