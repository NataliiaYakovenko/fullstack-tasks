import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getTasksThunk,
  getUsersThunk,
} from '../../store/tasksSlice/tasksSlice';

const TasksList = ({
  users,
  tasks,userId,body,deadline,isDone, getTasks,getUsers,}) => {

    
  useEffect(() => {
    getTasks();
    getUsers();
  }, [getTasks, getUsers]);

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
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ tasksData }) => tasksData;
const mapDispatchToProps = (dispatch) => ({
  getTasks: () => dispatch(getTasksThunk()),
  getUsers: () => dispatch(getUsersThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
