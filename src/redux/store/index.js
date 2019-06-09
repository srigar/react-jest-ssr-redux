import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers/index';
import thunk from 'redux-thunk';

export default (initialState) => {
    const enhancers = compose(
        applyMiddleware(thunk)
    );
    const store = createStore(reducers, initialState, enhancers);
    return store
};