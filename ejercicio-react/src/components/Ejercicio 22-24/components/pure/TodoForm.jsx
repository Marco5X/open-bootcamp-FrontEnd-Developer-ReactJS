import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Todoform = ({ submit }) => {
    const newText = useRef();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        submit(newText.current.value);
        newText.current.value = "";
    }

    return (
        <div>
            <h2>Create your TODOs</h2>
            <form onSubmit={ handleSubmit }>
                <input type='text' ref={newText}/>
                <button type='submit'> Create Todo </button>
            </form>
        </div>
    );
}

Todoform.propTypes = {
    submit: PropTypes.func
}

export default Todoform;