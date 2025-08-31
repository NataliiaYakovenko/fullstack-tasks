import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  deleteTaskThunk,
  getTasksThunk,
  getUsersThunk,
  updateTaskThunk,
} from '../../store/tasksSlice/tasksSlice';

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
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          <p>
            {users.find((u) => u.id === t.userId)?.firstName}{' '}
            {users.find((u) => u.id === t.userId)?.lastName}
          </p>
          <p>{t.body}</p>
          <p>{t.deadline}</p>

          <label>
            <input
              type="checkbox"
              checked={t.isDone}
              onChange={() => {
                updateTask(t.id, { ...t, isDone: !t.isDone });
              }}
            />
            <span style={{ color: t.isDone ? 'green' : 'red' }}>
              {t.isDone ? 'Task had done' : 'Task had not done'}
            </span>
          </label>

          <br />
          <button
            onClick={() => {
              deleteTask(t.id);
            }}
          >
            DELETE
          </button>
        </li>
      ))}
    </ul>
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
