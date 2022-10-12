import React, { useRef, useContext, useReducer } from "react";

//Actions
const ADD_TASK = "ADD_TASK"
const DELETE_TASK = "DELETE_TASK"
const FILTER_TASK = "FILTER_TASK"

const myContext = React.createContext(null)


export const TaskComponent = () => {
    const inputRef = useRef()

    //Initial State for Reducer
    const initialState = [{
        id: 1,
        title: "Todo 1",
        completed: false,
    },
    {
        id: 2,
        title: "Todo 2",
        completed: true,
    }]

    //Reducer to change State
    const reducer = (state, action) => {
        switch (action.type) {
            case ADD_TASK: {
                return [...state,
                { id: state.length + 1, title: action.title, completed: false }]
            }
            case DELETE_TASK: {
                return state.filter((task, index) => index !== action.index)
            }
            case FILTER_TASK: {
                return state.filter((task) => (task.completed === true))
            }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: ADD_TASK,
            title: inputRef.current.value
        });
    }

    const FormTask = () => {
        return (
            <div>
                <form onSubmit={ handleSubmit }>
                    <label htmlFor=""> Task : </label>
                    <input type="text" name="title" ref={inputRef} />
                    <input type="submit" value="Create Task" />
                </form>
            </div>
        )
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1>Tasks List</h1>
            <FormTask />
            <h3>List</h3>
            {!state ? <p>Add your task</p> : state.map((task, index) => (
                <ul key={index}>
                    <li>{task.id} -- {task.title} => {task.completed === false ? "Not completed" : "OK" }{" "}
                        <button onClick={() => {
                            dispatch({ type: DELETE_TASK, index })
                        }}
                        >Delete
                        </button>
                    </li>
                </ul>
            ))}
            <div><h4> Filter for completed</h4>
                <button style={{ backgroundColor: "gray" }} onClick={() => {
                    dispatch({ type: FILTER_TASK })
                }}
                >Filter
                </button>
            </div>
        </div>
    )
}