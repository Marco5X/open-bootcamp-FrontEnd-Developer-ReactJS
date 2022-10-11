import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../redux/actions/actions'
import Todoform from '../pure/TodoForm'

const mapStateToProps = (state) => ({
    // Not necessary
})

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (text) => {
            dispatch(addTodo(text))
        }
    }
}

const TodoFormContainer = connect(null, mapDispatchToProps)(Todoform)

export default TodoFormContainer