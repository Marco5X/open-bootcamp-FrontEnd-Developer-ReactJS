import LoginForm from './components/pure/LoginForm';
import TodoForm from './components/pure/TodoForm';
import TodoList from './components/pure/TodoList';
import Filteroptions from './components/pure/FilterOptions';


function AppRedux() {
    return (
        <div className="App">
            {/* <LoginForm></LoginForm> */}
            <hr />
            <TodoList />
            <br/>
            <TodoForm />
            <br />
            <Filteroptions></Filteroptions>
        </div>
    );
}

export default AppRedux;