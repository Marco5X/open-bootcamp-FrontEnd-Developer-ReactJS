import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from "../reducers/taskSlice"
import { watcherSaga } from "../sagas/sagas"

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tasks: tasksReducer
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(watcherSaga);