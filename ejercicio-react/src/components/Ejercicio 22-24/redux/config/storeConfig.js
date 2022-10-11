/*
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit'
import taskSlice from "../reducers/taskSlice"
import { watcherSaga } from "../sagas/sagas"

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tasks: taskSlice
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(watcherSaga);
*/