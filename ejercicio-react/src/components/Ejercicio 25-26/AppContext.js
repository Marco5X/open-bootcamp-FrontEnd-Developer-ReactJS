import { TaskComponent } from './components/TaskComponent';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { TasksProvider } from './components/TaskContext';

export default function TaskApp() {
    return (
        <TasksProvider>
            <h1>Task App (use Reducer)</h1>
            <AddTask />
            <TaskList />
        </TasksProvider>
    );
}