import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import TASK_VALIDATE_SCHEMA from '../../schemas/validateTask';
import {
  createTaskThunk,
  getTasksThunk,
  getUsersThunk,
} from '../../store/tasksSlice/tasksSlice';
import styles from './TasksForm.module.scss';

function TasksForm({ users, getTasks, getUsers, createTask }) {
  const initialValues = {
    body: '',
    userId: users['0']?.id ?? '',
    deadline: '',
    isDone: false,
  };

  const submitHandler = (values, formikBag) => {
    console.log('values', values);
    createTask(values);
    formikBag.resetForm();
  };

  useEffect(() => {
    getTasks();
    getUsers();
  }, [getTasks, getUsers]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={TASK_VALIDATE_SCHEMA}
    >
      {(formProps) => (
        <Form className={styles.formWrapper}>
          <h1>TASK FORM</h1>

          {users.length !== 0 && (
            <>
              <label className={styles.userNameWrapper}>
                User name:
                <select
                  className={styles.userFullName}
                  name="userId"
                  autoFocus
                  value={formProps.values.userId}
                  onChange={formProps.handleChange}
                >
                  {users.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.firstName} {u.lastName}
                    </option>
                  ))}
                </select>
              </label>
            </>
          )}

          <label className={styles.textTaskWrapper}>
            Text task:
            <Field
              className={styles.textTask}
              name="body"
              type="text"
              placeholder="To write your task"
              autoFocus
            />
            <ErrorMessage
              className={styles.errorTask}
              name="body"
              component="p"
            />
          </label>

          <label className={styles.deadlineWrapper}>
            Deadline:
            <Field className={styles.deadline} name="deadline" type="date" />
            <ErrorMessage
              className={styles.errorDeadline}
              name="deadline"
              component="p"
            />
          </label>

          <button className={styles.btn} type="submit">SEND TASK</button>
        </Form>
      )}
    </Formik>
  );
}

const mapStateToProps = ({ tasksData: { users } }) => ({ users });

const mapDispatchToProps = (dispatch) => ({
  getTasks: () => dispatch(getTasksThunk()),
  getUsers: () => dispatch(getUsersThunk()),
  createTask: (values) => dispatch(createTaskThunk(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksForm);
