import TasksForm from './components/TasksForm/TasksForm';
import TasksList from './components/TasksList/TasksList';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <TasksForm />
      </div>

      <div className={styles.right}>
        <TasksList />
      </div>
    </div>
  );
}

export default App;
