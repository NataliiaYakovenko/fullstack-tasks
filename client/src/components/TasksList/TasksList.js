import React, { useEffect } from 'react';
import { FcApproval } from 'react-icons/fc';
import { FcCancel } from 'react-icons/fc';
import { FaTrash } from 'react-icons/fa';
import { connect } from 'react-redux';
import {
  deleteTaskThunk,
  getTasksThunk,
  getUsersThunk,
  updateTaskThunk,
} from '../../store/tasksSlice/tasksSlice';
import styles from './TasksList.module.scss';

const TasksList = ({
  users,
  tasks,
  isFetching,
  error,
  getTasks,
  getUsers,
  updateTask,
  deleteTask,
}) => {
  useEffect(() => {
    getTasks();
    getUsers();
  }, []);

  return (
    <>
      <h2 className={styles.titleList}>TASKS LIST:</h2>
      <ol className={styles.listWrapper}>
        {tasks.map((t) => (
          <li className={styles.numberList} key={t.id}>
            <p className={styles.userName}>
              {users.find((u) => u.id === t.userId)?.firstName}{' '}
              {users.find((u) => u.id === t.userId)?.lastName}
            </p>
            <p className={styles.task}>{t.body}</p>
            <p className={styles.deadline}>{t.deadline}</p>

            <label className={styles.isDoneWrapper}>
              <input
                className={styles.isDone}
                type="checkbox"
                checked={t.isDone}
                onChange={() => {
                  updateTask(t.id, { ...t, isDone: !t.isDone });
                }}
              />
              <span
                style={{
                  color: t.isDone ? 'lightgreen' : 'rgb(238, 108, 108)',
                }}
              >
                {t.isDone ? (
                  <>
                    <span> Task had done </span>
                    <FcApproval className={styles.iconDone} />
                  </>
                ) : (
                  <>
                    <span> Task had not done </span>
                    <FcCancel className={styles.iconNotDone} />
                  </>
                )}
              </span>
            </label>

            <button
              onClick={() => {
                deleteTask(t.id);
              }}
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ol>
    </>
  );
};

const mapStateToProps = ({ tasksData }) => tasksData;
const mapDispatchToProps = (dispatch) => ({
  getTasks: () => dispatch(getTasksThunk()),
  getUsers: () => dispatch(getUsersThunk()),
  updateTask: (id, payload) => dispatch(updateTaskThunk({ id, payload })),
  deleteTask: (id) => dispatch(deleteTaskThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
