import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  deleteTaskThunk,
  getTasksThunk,
  getUsersThunk,
} from '../../store/tasksSlice/tasksSlice';

const TasksList = ({
  users,
  tasks,
  isFetching,
  error,
  getTasks,
  getUsers,
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
          <p>{t.isDone}</p>
          <button
            onClickCapture={() => {
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
  deleteTask: (id) => dispatch(deleteTaskThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
